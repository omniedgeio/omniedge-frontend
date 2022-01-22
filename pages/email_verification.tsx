import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Spinner,
  VStack
} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import DefaultLayout from "../components/layout/Default";
import {activateAccount,  resendVerifyEmail} from "../lib/api/auth";
import {useFormik} from "formik";
import * as Yup from "yup";

export default function EmailVerificationPage() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [isVerified, setVerified] = useState(false);

  useEffect(() => {
    if (router.query && router.query.token) {
      activateAccount(router.query.token as string)
        .then((data) => {
          setLoading(false);
          setVerified(true);
        })
        .catch((err) => {
          setLoading(false);
          setVerified(false);
          setError(err.data);
        });
    }
  }, []);

  const {handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting} = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Required").email(),
    }),
    onSubmit: (values, actions) => {
      resendVerifyEmail(values.email)
        .then(() => {
          router.push("/");
        })
        .catch((err) => {
          if (err.data) {
            setError(err.data.message);
          }
          actions.setSubmitting(false);
        });
    },
  });

  return (
    <DefaultLayout>
      <Center flexDirection="column">
        {isLoading && <Spinner/>}
        {!isLoading && isVerified && (
          <>
            <Heading fontSize="1.5rem" pt={[32]} textAlign="center">
              Your email has verified successfully.
            </Heading>
            <Heading fontSize="1.25rem" fontWeight="normal" mt={4} textAlign="center">
              Thank you for joining us.
            </Heading>
          </>
        )}
        {!isLoading && !isVerified && (
          <>
            <Heading fontSize="1.5rem" pt={[32]} textAlign="center">
              {error?.message}
            </Heading>
            <Heading fontSize="1.25rem" fontWeight="normal" mt={4} textAlign="center">
              Thank you for joining us.
            </Heading>

            <VStack w="30%" spacing="4">
              <form style={{width: "100%"}} onSubmit={handleSubmit}>
                <VStack w="full" spacing={4} alignItems="flex-start">
                  <Heading fontWeight="semibold" fontSize="lg">
                  </Heading>
                  <FormControl isInvalid={!!(touched.email && errors.email)} isRequired>
                    <Input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="mail@host"
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <Button type="submit" isLoading={isSubmitting} colorScheme="brand">
                    ReSend Verification Email
                  </Button>
                </VStack>
              </form>
            </VStack>

          </>
        )}
      </Center>
    </DefaultLayout>
  );
}
