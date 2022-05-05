import { Button, FormControl, FormErrorMessage, HStack, Input } from "@chakra-ui/react";
import { FormikHelpers, useFormik } from "formik";
import { FaUserPlus } from "react-icons/fa";
import * as Yup from "yup";
import {useTranslation} from "react-i18next";

export interface InvitationFormProps {
  onSubmit: (values: any, actions: FormikHelpers<any>) => void;
}

const InvitationForm: React.FC<InvitationFormProps> = ({ onSubmit }) => {
  const { handleSubmit, errors, values, handleChange, handleBlur, isSubmitting } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Required").email("Invalid email"),
    }),
    onSubmit: (values, actions) => {
      onSubmit && onSubmit(values, actions);
    },
  });
  const {t, i18n} = useTranslation('dashboard')
  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <FormControl>
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={isSubmitting}
            placeholder={t('invitations.email')}
          ></Input>
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <Button isLoading={isSubmitting} leftIcon={<FaUserPlus />}>
          {t('invitations.invite')}
        </Button>
      </HStack>
    </form>
  );
};

export default InvitationForm;
