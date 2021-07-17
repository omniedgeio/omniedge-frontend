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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { resetPassword } from "../../lib/api/auth";
import { showError } from "../../lib/helpers/toast";
import { Page } from "../../types";
YupPassword(Yup);

const ForgotPasswordPage: Page = function (props) {
  const router = useRouter();

  const [success, setSuccess] = useState(false);
  const { handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Required").email(),
    }),
    onSubmit: (values, actions) => {
      resetPassword(values)
        .then(() => {
          setSuccess(true);
        })
        .catch(() => {
          showError("Reset password failed", "Please send a request again.");
          actions.setSubmitting(false);
        });
    },
  });

  return (
    <VStack maxW="sm" margin="2rem auto">
      {!success ? (
        <form style={{ width: "100%" }} onSubmit={handleSubmit}>
          <VStack w="full" spacing={4} alignItems="flex-start">
            <Heading fontWeight="semibold" fontSize="lg">
              Forgot Password
            </Heading>
            <FormControl isInvalid={!!(touched.email && errors.email)} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="mail@host"
              ></Input>
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
            <Button type="submit" isLoading={isSubmitting} colorScheme="brand">
              Send Instruction
            </Button>
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
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Instruction sent!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            We have send instruction to your email. Please check your inbox.
          </AlertDescription>
        </Alert>
      )}
    </VStack>
  );
};

export default ForgotPasswordPage;
