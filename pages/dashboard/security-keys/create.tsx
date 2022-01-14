import {
  Box,
  Button,
  Code,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Text,
  useClipboard,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import * as Yup from "yup";
import DashboardLayout from "../../../components/layout/Dashboard";
import { SecurityKeyType } from "../../../lib/api/enum";
import { ICreateSecurityKeyResponse } from "../../../lib/api/response";
import { createSecurityKey } from "../../../lib/api/securityKey";
import { Page } from "../../../types";

const CreateSecurityKeyForm: React.FC = function (props) {
  const [securityKey, setSecurityKey] = useState<ICreateSecurityKeyResponse | undefined>();
  const { hasCopied, onCopy } = useClipboard(securityKey?.key || "");
  const { isOpen, onClose, onOpen } = useDisclosure();
  const router = useRouter();

  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      type: "1",
      name: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      type: Yup.string().required("Required").oneOf(["1", "2"]),
    }),
    onSubmit: (values, actions) => {
      createSecurityKey({
        type: parseInt(values.type) as SecurityKeyType,
        name: values.name,
      })
        .then((res) => {
          setSecurityKey(res);
          onOpen();
        })
        .catch((err) => {
          actions.setSubmitting(false);
        });
    },
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Security Key</ModalHeader>
          <ModalBody>
            <VStack spacing={2} alignItems="flex-start">
              <Text>
                Security key created successfully. Please copy to somewhere as the key would be only display once.
              </Text>
              <Text
                w="full"
                py="3"
                px="4"
                bgColor="gray.50"
                color="gray.700"
                border="solid 1px"
                borderColor="gray.200"
                borderRadius="md"
              >
                {securityKey?.key}
              </Text>
              <Button onClick={onCopy} size="sm" colorScheme={hasCopied ? "brand" : "gray"} leftIcon={<FiClipboard />}>
                {hasCopied ? "Copied" : "Copy"}
              </Button>
              <Box pt={2}>
                <Text fontWeight="medium">
                  Expiration Date :{" "}
                  <Text pr={1} as="span">
                    <Code>{format(new Date(securityKey?.expires_at || Date.now()), "dd/MM/yyy hh:mm:ss b")}</Code>
                  </Text>
                </Text>
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                onClose();
                router.push("/dashboard/security-keys");
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <form onSubmit={handleSubmit}>
        <VStack alignItems="flex-start" spacing="4">
          <FormControl isInvalid={!!(touched.type && errors.type)} isRequired>
            <RadioGroup name="type" value={values.type}>
              <VStack alignItems="flex-start">
                <Radio value="1" colorScheme="brand" onChange={handleChange}>
                  <Heading as="h6" size="sm" fontWeight="medium">
                    Permanent
                  </Heading>
                  <Text>A security key with a year expiration. You can use it across multiple devices.</Text>
                </Radio>
                <Radio value="2" colorScheme="brand" onChange={handleChange}>
                  <Heading as="h6" size="sm" fontWeight="medium">
                    One Time
                  </Heading>
                  <Text>A security key with few minutes expiration. It will be automatically revoked once used.</Text>
                </Radio>
              </VStack>
            </RadioGroup>
            <FormErrorMessage>{errors.type}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Name for indication"
            ></Input>
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="brand">
            Create
          </Button>
        </VStack>
      </form>
    </>
  );
};

const CreateSecurityKeyPage: Page = function (prop) {
  return (
    <VStack spacing="4" alignItems="flex-start">
      <Heading fontWeight="semibold" size="md">
        Create Security Key
      </Heading>
      <CreateSecurityKeyForm />
    </VStack>
  );
};

CreateSecurityKeyPage.layout = DashboardLayout;

export default CreateSecurityKeyPage;
