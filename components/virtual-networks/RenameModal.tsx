import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IVirtualNetworkResponse } from "../../lib/api/response";
import { updateVirtualNetwork } from "../../lib/api/virtualNetwork";
import {useTranslation} from "react-i18next";
interface IRenameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onError?: () => void;
  onSuccess?: () => void;
  virtualNetwork?: IVirtualNetworkResponse;
}

const RenameModal: React.FC<IRenameModalProps> = ({ onClose, onSuccess, onError, isOpen, virtualNetwork }) => {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      name: virtualNetwork?.name as string,
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
    }),
    onSubmit: (values, actions) => {
      updateVirtualNetwork(virtualNetwork?.id as string, values)
        .then(() => {
          onSuccess && onSuccess();
        })
        .catch(() => {
          onError && onError();
        });
    },
  });
  const {t, i18n} = useTranslation('dashboard')
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>{t('virtualnetwork.renametitle')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
              <FormLabel>{t('virtualnetwork.name')}</FormLabel>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="My Omni Network"
              ></Input>
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
            {t('virtualnetwork.close')}
            </Button>
            <Button type="submit" colorScheme="brand">
            {t('virtualnetwork.submit')}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default RenameModal;
