import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import isCidr from "is-cidr";
import { useRouter } from "next/dist/client/router";
import * as Yup from "yup";
import DashboardLayout from "../../../components/layout/Dashboard";
import { createVirtualNetwork } from "../../../lib/api/virtualNetwork";
import { Page } from "../../../types";

const CreateVirtualNetworkPage: Page = function (props) {
  const router = useRouter();

  const { handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      ip_range: "100.100.0.0/24",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      ip_range: Yup.string()
        .required("Required")
        .test("is-cidr", "It is not a valid cidr", (value, context) => isCidr(value as string) != 0),
    }),
    onSubmit: (values, actions) => {
      createVirtualNetwork(values)
        .then((res) => {
          router.push("/dashboard/virtual-networks");
        })
        .catch(() => {
          actions.setSubmitting(false);
        });
    },
  });

  return (
    <VStack alignItems="flex-start">
      <Heading fontWeight="semibold" size="md">
        Create Virtual Network
      </Heading>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <VStack alignItems="flex-start" spacing="4" w="full" maxW="sm">
          <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="My Omni Network"
            ></Input>
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!(touched.ip_range && errors.ip_range)} isRequired>
            <FormLabel>IP Range</FormLabel>
            <Input
              type="text"
              name="ip_range"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ip_range}
              placeholder="100.100.0.0/24"
              fontFamily="mono"
            ></Input>
            <FormErrorMessage>{errors.ip_range}</FormErrorMessage>
            <FormHelperText>{`Currently we don't support change of ip range in future`}</FormHelperText>
          </FormControl>
          <Button isLoading={isSubmitting} type="submit" colorScheme="brand">
            Create
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};

CreateVirtualNetworkPage.layout = DashboardLayout;

export default CreateVirtualNetworkPage;
