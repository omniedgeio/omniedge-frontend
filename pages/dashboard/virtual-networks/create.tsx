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
import * as Yup from "yup";
import DashboardLayout from "../../../components/layout/Dashboard";
import { Page } from "../../../types";

const CreateVirtualNetworkPage: Page = function (props) {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      name: "",
      ip_range: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
    }),
    onSubmit: (values, actions) => {},
  });

  return (
    <VStack alignItems="flex-start">
      <Heading fontWeight="semibold" size="md">
        Create Virtual Network
      </Heading>
      <form style={{ width: "100%" }}>
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
          <FormControl>
            <FormLabel>IP Range</FormLabel>
            <Input type="text" defaultValue="100.100.0.0/24" disabled fontFamily="mono"></Input>
            <FormHelperText>{`Currently we don't support change of ip range`}</FormHelperText>
          </FormControl>
          <Button colorScheme="brand">Create</Button>
        </VStack>
      </form>
    </VStack>
  );
};

CreateVirtualNetworkPage.layout = DashboardLayout;

export default CreateVirtualNetworkPage;
