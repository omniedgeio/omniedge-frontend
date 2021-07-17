import { Button, FormControl, FormErrorMessage, FormLabel, Heading, VStack } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import * as Yup from "yup";
import YupPassword from "yup-password";
import PasswordInput from "../../components/input/PasswordInput";
import { resetPasswordVerify } from "../../lib/api/auth";
import { showError, showSuccess } from "../../lib/helpers/toast";
import { Page } from "../../types";
YupPassword(Yup);

const ForgotPasswordVerifyPage: Page = function (props) {
  const router = useRouter();

  const { handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting } = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object().shape({
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
      let token = router.query["sess"] as string;
      resetPasswordVerify({
        token: token,
        ...values,
      })
        .then(() => {
          router.push("/login");
          showSuccess("Reset password successfully", "We will redirect you to login page soon.");
        })
        .catch(() => {
          showError("Reset password failed", "Please send a request again.");
          actions.setSubmitting(false);
        });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} maxW="sm" alignItems="flex-start" margin="2rem auto">
        <Heading fontWeight="semibold" fontSize="lg">
          Create New Password
        </Heading>
        <FormControl isInvalid={!!(touched.password && errors.password)} isRequired>
          <FormLabel>New Password</FormLabel>
          <PasswordInput name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!(touched.confirm_password && errors.confirm_password)} isRequired>
          <FormLabel>Confirm New Password</FormLabel>
          <PasswordInput
            name="confirm_password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirm_password}
            placeholder="Enter password again"
          />
          <FormErrorMessage>{errors.confirm_password}</FormErrorMessage>
        </FormControl>
        <Button type="submit" isLoading={isSubmitting} colorScheme="brand">
          Change
        </Button>
      </VStack>
    </form>
  );
};

export default ForgotPasswordVerifyPage;
