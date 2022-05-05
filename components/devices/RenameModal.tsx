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
import { useQueryClient } from "react-query";
import * as Yup from "yup";
import { updateDevice } from "../../lib/api/device";
import { IDeviceResponse } from "../../lib/api/response";
import {useTranslation} from "react-i18next";
interface IRenameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onError?: () => void;
  onSuccess?: () => void;
  device?: IDeviceResponse;
}

const RenameModal: React.FC<IRenameModalProps> = ({ onClose, onSuccess, onError, isOpen, device }) => {
  const queryClient = useQueryClient();
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      name: device?.name as string,
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
    }),
    onSubmit: (values, actions) => {
      updateDevice(device?.id as string, values)
        .then(() => {
          onSuccess && onSuccess();
          queryClient.invalidateQueries({
            predicate: (query) => query.queryKey.includes("devices"),
          });
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
          <ModalHeader>{t('device.rename')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
              <FormLabel>{t('device.name')}</FormLabel>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                placeholder="My Device"
              ></Input>
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose}>
            {t('device.close')}
            </Button>
            <Button type="submit" colorScheme="brand">
            {t('device.submit')}
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default RenameModal;
