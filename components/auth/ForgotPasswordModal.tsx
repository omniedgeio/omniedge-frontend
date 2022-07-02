import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import Link from "../../components/next/Link";
import { resetPassword } from "../../lib/api/auth";
import { showError } from "../../lib/helpers/toast";
import { Page } from "../../types";
import {useTranslation} from "react-i18next";
YupPassword(Yup);


interface IForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ForgotPasswordModal: React.FC<IForgotPasswordModalProps> = function ({ isOpen, onClose, onSuccess }) {
  const router = useRouter();
  const {t, i18n} = useTranslation('auth')
  const [success, setSuccess] = useState(false);
  const { handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required(t('required')).email(),
    }),
    onSubmit: (values, actions) => {
      resetPassword(values)
        .then(() => {
          setSuccess(true);
        })
        .catch(() => {
          showError(t('reset_password_failed'), t('instructionsendagain'));
          actions.setSubmitting(false);
        });
    },
  });
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
          <ModalHeader>{t('forgotpassword')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <VStack maxW="sm" margin="2rem auto" px={4}>
      {!success ? (
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack w="full" spacing={4} alignItems="flex-start">
            <Heading fontWeight="semibold" fontSize="lg">
            {t('forgotpassword')}
            </Heading>
            <FormControl isInvalid={!!(touched.email && errors.email)} isRequired>
              <FormLabel>{t('email')}</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={t('enteremail')}
              ></Input>
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <ModalFooter>
            <Button type="submit" isLoading={isSubmitting} colorScheme="brand">
              {t('sendinstruction')}
            </Button>
            </ModalFooter>
          </VStack>
        </form>
      ) : (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          py={6}
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {t('instructionsent')}
          </AlertTitle>
          <AlertDescription maxWidth="sm">
          {t('instructionsentinfo')}
            <br></br>
            <Button colorScheme="green" mt={4} onClick={onClose}>
            {t('close')}
            </Button>
            
          </AlertDescription>
        </Alert>
      )}
    </VStack>
          </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ForgotPasswordModal;