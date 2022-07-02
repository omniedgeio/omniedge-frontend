import { Button } from "@chakra-ui/button";
import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { changePassword } from "../../lib/api/user";
import { showError, showSuccess } from "../../lib/helpers/toast";
import {useTranslation} from "react-i18next";
YupPassword(Yup);

interface IChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ChangePasswordModal: React.FC<IChangePasswordModalProps> = function ({ isOpen, onClose, onSuccess }) {
  const {t, i18n} = useTranslation('auth')
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur } = useFormik({
    initialValues: { old_password: "", password: "", confirm_password: "" },
    validationSchema: Yup.object().shape({
      old_password: Yup.string().required(t('required')),
      password: Yup.string()
        // .required("Required")
        // .minLowercase(1, "At least one lowercase character")
        // .minUppercase(1, "At least one uppercase character")
        // .minNumbers(1, "At least one number")
        // .minSymbols(1, "At least one symbol")
        .min(8, t('min'))
        .max(20, t('max')),
      confirm_password: Yup.string()
        .oneOf([Yup.ref(t('password')), null], t('passwordmatch'))
        .required(t('required')),
    }),
    onSubmit: (values, actions) => {
      changePassword(values)
        .then((res) => {
          actions.setSubmitting(false);
          actions.resetForm();
          showSuccess(t('success'), t('password_changed'));
          onClose();
          onSuccess && onSuccess();
        })
        .catch((err) => {
          if (err.data) {
            showError(t('password_change_failed'), err.data.message);
          }
          actions.setSubmitting(false);
        });
    },
  });
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>{t('changepassword')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FormControl isInvalid={!!(touched.old_password && errors.old_password)}>
                <FormLabel>{t('oldpassword')}</FormLabel>
                <Input
                  name="old_password"
                  value={values.old_password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  autoComplete=""
                  type="password"
                  placeholder={t('oldpassword')}
                ></Input>
                <FormErrorMessage>{errors.old_password}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!(touched.password && errors.password)}>
                <FormLabel>{t('newpassword')}</FormLabel>
                <Input
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  autoComplete=""
                  type="password"
                  placeholder={t('newpassword')}
                ></Input>
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!(touched.confirm_password && errors.confirm_password)}>
                <FormLabel>{t('confirmpassword')}</FormLabel>
                <Input
                  name="confirm_password"
                  value={values.confirm_password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  autoComplete=""
                  type="password"
                  placeholder={t('confirmpassword')}
                ></Input>
                <FormErrorMessage>{errors.confirm_password}</FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
            {t('cancel')}
            </Button>
            <Button type="submit" colorScheme="brand" isLoading={isSubmitting}>
            {t('change')}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ChangePasswordModal;
