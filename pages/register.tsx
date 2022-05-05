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
import {useTranslation} from "react-i18next";

YupPassword(Yup);

const RegisterPage: Page = function (props) {
  const {t, i18n} = useTranslation('auth')
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
      name: Yup.string().required(t('required')),
      email: Yup.string().required(t('required')).email(),
      password: Yup.string()
        .minLowercase(1, t('minlowercase'))
        .minUppercase(1, t('minuppercase'))
        .minNumbers(1, t('minnumbers'))
        .minSymbols(1, t('minsymbols'))
        .min(8, t('min'))
        .max(20, t('max'))
        .required(t('required')),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], t('passwordmatch'))
        .required(t('required')),
    }),
    onSubmit: (values, actions) => {
      register(values)
        .then(() => {
          router.push("/login");
        })
        .catch((err) => {
          if (err.data) {
            if(err.data.errors && err.data.errors.email){
              setErrorMsg(t('emailexsit'));
            }else{
              setErrorMsg(err.data.message);
            }
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
        <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
          <FormLabel>{t('name')}</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder={t('displayname')}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          ></Input>
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
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
        <FormControl isInvalid={!!(touched.password && errors.password)} isRequired>
          <FormLabel>{t('password')}</FormLabel>
          <PasswordInput name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
          <FormErrorMessage>{errors.password}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!(touched.confirm_password && errors.confirm_password)} isRequired>
          <FormLabel>{t('confirmpassword')}</FormLabel>
          <PasswordInput
            name="confirm_password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirm_password}
            placeholder={t('enterpasswordagain')}
          />
          <FormErrorMessage>{errors.confirm_password}</FormErrorMessage>
        </FormControl>
        <VStack w="full">
          <Button isLoading={isSubmitting} type="submit" colorScheme="brand" isFullWidth>
            {t('register')}
          </Button>
          <HStack w="full">
            <Text fontSize="xs" color="gray.500">
              {t('logininfo')}{" "}
              <Link href="/login" color="brand.500">
                {t('login')}
              </Link>
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </form>
    <Text fontSize="xs" color="gray.500">
    {t('tosinfo')} <Link href="/terms" color="brand.500">{t('tos')}</Link>{t('and')} <Link href="/privacy" color="brand.500">{t('privacy')}.</Link>
</Text>
</>
  );
};

RegisterPage.layout = EntryLayout;

export default RegisterPage;
