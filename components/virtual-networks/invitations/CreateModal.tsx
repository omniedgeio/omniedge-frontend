import {
  Button,
  FormControl,
  FormErrorMessage,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import * as Yup from "yup";
import { createInvitationForVirtualNetwork } from "../../../lib/api/virtualNetwork";
import { showError, showSuccess } from "../../../lib/helpers/toast";

interface ICreateInvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
  virtualNetworkId: string;
}

const CreateInvitationModal: React.FC<ICreateInvitationModalProps> = function ({ virtualNetworkId, onClose, isOpen }) {
  const [emails, setEmails] = useState<string[]>([]);
  const [isSubmitting, setSubmitting] = useState(false);
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Required").email(),
    }),
    onSubmit: (values, actions) => {
      setEmails([values.email, ...emails].filter((value, index, self) => self.indexOf(value) === index));
      actions.resetForm();
    },
  });

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Invite user</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack w="full">
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Stack direction={["column", "row"]} w="full" alignItems="flex-start">
                <FormControl flex="1" isInvalid={!!(touched.email && errors.email)} isRequired>
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
                <IconButton aria-label="add" type="submit" isLoading={isSubmitting} icon={<FiPlus />}></IconButton>
              </Stack>
            </form>
            <VStack w="full">
              {emails.map((email, index) => {
                return (
                  <HStack justifyContent="space-between" w="full" key={index}>
                    <Text>{email}</Text>
                    <IconButton
                      onClick={() => {
                        setEmails(emails.filter((value) => value != email));
                      }}
                      aria-label="remove"
                      icon={<FiX />}
                      size="xs"
                      colorScheme="red"
                      borderRadius="sm"
                    ></IconButton>
                  </HStack>
                );
              })}
            </VStack>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            isLoading={isSubmitting}
            colorScheme="brand"
            onClick={() => {
              setSubmitting(true);
              createInvitationForVirtualNetwork(virtualNetworkId, { emails })
                .then(() => {
                  showSuccess("Invite successfully");
                  setEmails([]);
                  onClose();
                })
                .catch((err) => {
                  showError("Invite failed", err?.data?.message);
                })
                .then(() => setSubmitting(false));
            }}
          >
            Invite
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateInvitationModal;
