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
import YupPassword from "yup-password";
import PasswordInput from "../components/input/PasswordInput";
import EntryLayout from "../components/layout/Entry";
import Link from "../components/next/Link";
import { register } from "../lib/api/auth";
import { Page } from "../types";
YupPassword(Yup);

const RegisterPage: Page = function (props) {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");
  const { handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required").email(),
      password: Yup.string()
        .minLowercase(1, "At least one lowercase character")
        .minUppercase(1, "At least one uppercase character")
        .minNumbers(1, "At least one number")
        .minSymbols(1, "At least one symbol")
        .min(8, "At least 8 characters")
        .max(20, "At most 20 characters")
        .required("Required"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values, actions) => {
      register(values)
        .then(() => {
          router.push("/login");
        })
        .catch((err) => {
          if (err.data) {
            setErrorMsg(err.data.message);
          }
          actions.setSubmitting(false);
        });
    },
  });

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      {errorMsg && (
        <Alert my={2} status="error">
          <AlertIcon />
          <AlertDescription>{errorMsg}</AlertDescription>
        </Alert>
      )}
      <VStack w="full" spacing="4">
        <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Display name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          ></Input>
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
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
        <FormControl isInvalid={!!(touched.password && errors.password)} isRequired>
          <FormLabel>Password</FormLabel>
          <PasswordInput name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!(touched.confirm_password && errors.confirm_password)} isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <PasswordInput
            name="confirm_password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirm_password}
            placeholder="Enter password again"
          />
          <FormErrorMessage>{errors.confirm_password}</FormErrorMessage>
        </FormControl>
        <VStack w="full">
          <Button isLoading={isSubmitting} type="submit" colorScheme="brand" isFullWidth>
            Register
          </Button>
          <HStack w="full">
            <Text fontSize="xs" color="gray.500">
              Already have an account?{" "}
              <Link href="/login" color="brand.500">
                Login here
              </Link>
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </form>
  );
};

RegisterPage.layout = EntryLayout;

export default RegisterPage;
