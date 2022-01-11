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
import { activatePasswordLogin } from "../../lib/api/user";
import { showError } from "../../lib/helpers/toast";
YupPassword(Yup);

interface IChangePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ActivatePasswordModal: React.FC<IChangePasswordModalProps> = function ({ isOpen, onClose, onSuccess }) {
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting, handleBlur } = useFormik({
    initialValues: { password: "", confirm_password: "" },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .required("Required")
        .minLowercase(1, "At least one lowercase character")
        .minUppercase(1, "At least one uppercase character")
        .minNumbers(1, "At least one number")
        .minSymbols(1, "At least one symbol")
        .min(8, "At least 8 characters")
        .max(20, "At most 20 characters"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values, actions) => {
      activatePasswordLogin(values)
        .then((res) => {
          actions.setSubmitting(false);
          actions.resetForm();
          onClose();
          onSuccess && onSuccess();
        })
        .catch((err) => {
          if (err.data) {
            showError("Activate Password Login failed", err.data.message);
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
          <ModalHeader>Change Password</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FormControl isInvalid={!!(touched.password && errors.password)}>
                <FormLabel>New password</FormLabel>
                <Input
                  name="password"
                  value={values.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  autoComplete=""
                  type="password"
                  placeholder="secret passphrase"
                ></Input>
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!(touched.confirm_password && errors.confirm_password)}>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  name="confirm_password"
                  value={values.confirm_password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  autoComplete=""
                  type="password"
                  placeholder="password confirmation"
                ></Input>
                <FormErrorMessage>{errors.confirm_password}</FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="brand" isLoading={isSubmitting}>
              Activate
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default ActivatePasswordModal;
