import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import * as Yup from "yup";
import PasswordInput from "../components/input/PasswordInput";
import EntryLayout from "../components/layout/Entry";
import Link from "../components/next/Link";
import { loginByPassword } from "../lib/api/auth";
import { Page } from "../types";


const LoginPage: Page = function (props) {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");

  const { handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Required").email(),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values, actions) => {
      let auth_session_uuid = router.query["auth_session_uuid"]?.toString();
      loginByPassword({
        ...(auth_session_uuid ? { auth_session_uuid } : {}),
        ...values,
      })
        .then(() => {
          if (auth_session_uuid) {
            router.push("/login_success");
          } else {
            router.push("/dashboard");
          }
        })
        .catch((err) => {
          if (err.data) {
            setErrorMsg(err.data.message);
          }
          actions.setSubmitting(false);
        });
    },
  });

  return (<>
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      {errorMsg && (
        <Alert my={2} status="error">
          <AlertIcon />
          <AlertDescription>{errorMsg}</AlertDescription>
        </Alert>
      )}
      <VStack w="full" spacing="4">
        <FormControl id="email" isInvalid={!!(touched.email && errors.email)} isRequired>
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
        <FormControl id="password" isInvalid={!!(touched.password && errors.password)} isRequired>
          <FormLabel>Password</FormLabel>
          <PasswordInput name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
          <HStack mt="1" w="full" justifyContent="flex-end">
            <Link fontSize="xs" color="gray.500" href="/forgot-password">
              Forgot Password
            </Link>
          </HStack>
        </FormControl>
        <VStack w="full">
          <Button isLoading={isSubmitting} type="submit" colorScheme="brand" isFullWidth>
            Login
          </Button>
          <HStack w="full">
            <Text fontSize="xs" color="gray.500">
              {`Still don't have an account? `}
              <Link href="/register" color="brand.500">
                Register here
              </Link>
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </form>
    <Text fontSize="xs" color="gray.500">
              {`By clicking the buttons above, you acknowledge that you have read, understood, and agree to OmniEdge's `} <Link href="/terms" color="brand.500">Terms of Service </Link>and <Link href="/privacy" color="brand.500">Privacy Policy.</Link>
    </Text>
    </>
  );
};

LoginPage.layout = EntryLayout;

export default LoginPage;
