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
import {useTranslation} from "react-i18next";

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
  const {t, i18n} = useTranslation('dashboard')
  const expiresAt = securityKey?.expires_at ? format(new Date(securityKey?.expires_at), "dd/MM/yyy hh:mm:ss b") : '-'
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('securitykey.new')}</ModalHeader>
          <ModalBody>
            <VStack spacing={2} alignItems="flex-start">
              <Text>
              {t('securitykey.new-desc')}
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
                {hasCopied ? t('copied') : t('copy')}
              </Button>
              <Box pt={2}>
                <Text fontWeight="medium">
                {t('securitykey.expirationdate')}{" "}
                  <Text pr={1} as="span">
                    <Code>{expiresAt}</Code>
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
              {t('securitykey.close')}
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
                  {t('securitykey.permanent')}
                  </Heading>
                  <Text>{t('securitykey.permanent-desc')}</Text>
                </Radio>
                <Radio value="2" colorScheme="brand" onChange={handleChange}>
                  <Heading as="h6" size="sm" fontWeight="medium">
                  {t('securitykey.once')}
                  </Heading>
                  <Text>{t('securitykey.once-desc')}</Text>
                </Radio>
              </VStack>
            </RadioGroup>
            <FormErrorMessage>{errors.type}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
            <FormLabel>{t('securitykey.name')}</FormLabel>
            <Input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder={t('securitykey.name')}
            ></Input>
            <FormErrorMessage>{errors.name}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="brand">
          {t('securitykey.create')}
          </Button>
        </VStack>
      </form>
    </>
  );
};

const CreateSecurityKeyPage: Page = function (prop) {
  const {t, i18n} = useTranslation('dashboard')
  return (
    <VStack spacing="4" alignItems="flex-start">
      <Heading fontWeight="semibold" size="md">
        {t('securitykey.createkey')}
      </Heading>
      <CreateSecurityKeyForm />
    </VStack>
  );
};

CreateSecurityKeyPage.layout = DashboardLayout;

export default CreateSecurityKeyPage;
