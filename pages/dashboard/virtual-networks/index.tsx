import {
  Button,
  Code,
  CodeProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Table,
  Tbody,
  Td,
  Text,
  TextProps,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import { FiEdit, FiMoreVertical, FiServer, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import * as Yup from "yup";
import ConfirmModal from "../../../components/ConfirmModal";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import NoSSR from "../../../components/next/NoSSR";
import { IVirtualNetworkResponse } from "../../../lib/api/response";
import { listVirtualNetworks, removeVirtualNetwork, updateVirtualNetwork } from "../../../lib/api/virtualNetwork";
import { Page } from "../../../types";

interface IRenameModalProps {
  virtualNetwork: IVirtualNetworkResponse | undefined;
  isOpen: boolean;
  onClose: () => void;
}

const RenameModal: React.FC<IRenameModalProps> = function ({ virtualNetwork, isOpen, onClose }) {
  const { handleChange, handleBlur, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      name: virtualNetwork?.name as string,
    },
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
    }),
    onSubmit: (values, actions) => {
      updateVirtualNetwork(virtualNetwork?.uuid as string, values).then(() => {
        onClose();
      });
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ModalHeader>Rename Virtual Network</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
              <FormLabel>Name</FormLabel>
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
              Close
            </Button>
            <Button type="submit" colorScheme="brand">
              Submit
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

const VirtualNetworkListTable: React.FC = function () {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });
  const [vnToRename, setVnToRename] = useState<IVirtualNetworkResponse>();
  const [vnToRemove, setVnToRemove] = useState<IVirtualNetworkResponse>();
  const renameModal = useDisclosure();
  const confirmModal = useDisclosure();

  const { data: virtualNetworks, isLoading, isError, refetch } = useQuery("virtual-networks", listVirtualNetworks);

  return (
    <>
      <RenameModal
        virtualNetwork={vnToRename}
        onClose={() => {
          refetch();
          renameModal.onClose();
        }}
        isOpen={renameModal.isOpen}
      />
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Virtual Network"
        onConfirm={() => {
          removeVirtualNetwork(vnToRemove?.uuid as string).then(() => {
            refetch();
            confirmModal.onClose();
          });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to remove virtual network <Code>{vnToRemove?.name}</Code> ?
      </ConfirmModal>
      <Table w="full">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "Virtual Network" : "Name"}</Th>
            <Th display={["none", "table-cell"]}>IP Range</Th>
            <Th display={["none", "table-cell"]}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading || isError ? (
            <Tr>
              <Td px="0">
                <Skeleton h="4" />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
            </Tr>
          ) : (
            virtualNetworks?.map((vn) => {
              const Name = (props: TextProps) => (
                <Link href={`/dashboard/virtual-networks/${vn.uuid}`} _hover={{ color: "brand.500" }}>
                  <Text {...props}>{vn.name}</Text>
                </Link>
              );
              const IPRange = (props: CodeProps) => (
                <Code fontSize={["xs", "sm"]} px="0" bg="white" {...props}>
                  {vn.ip_range}
                </Code>
              );
              const ActionMenu = () => (
                <Menu placement="bottom-end">
                  <MenuButton
                    aria-label="menu"
                    variant={variant}
                    borderRadius="md"
                    as={IconButton}
                    size="sm"
                    icon={<FiMoreVertical />}
                  ></MenuButton>
                  <MenuList py="1.5">
                    <Link href={`/dashboard/virtual-networks/${vn.uuid}`}>
                      <MenuItem display={["flex", "none"]} icon={<FiServer />}>
                        View Devices
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        setVnToRename(vn);
                        renameModal.onOpen();
                      }}
                      icon={<FiEdit />}
                    >
                      Rename
                    </MenuItem>
                    <MenuDivider my="1" />
                    <MenuItem
                      color="red.500"
                      icon={<FiX />}
                      onClick={() => {
                        setVnToRemove(vn);
                        confirmModal.onOpen();
                      }}
                    >
                      Remove
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={vn.uuid}>
                  <Td px="0">
                    {!isPhone ? (
                      <Name />
                    ) : (
                      <HStack justifyContent="space-between">
                        <VStack spacing="1" alignItems="flex-start">
                          <Name />
                          <HStack spacing="1">
                            <IPRange />
                          </HStack>
                        </VStack>
                        <ActionMenu />
                      </HStack>
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <IPRange />
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <HStack>
                      <Link href={`/dashboard/virtual-networks/${vn.uuid}`}>
                        <Button size="sm" colorScheme="brand">
                          View Devices
                        </Button>
                      </Link>
                      <ActionMenu />
                    </HStack>
                  </Td>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
    </>
  );
};

const VirtualNetworkPage: Page = function (props) {
  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          Virtual Networks
        </Heading>
        <Link href="/dashboard/virtual-networks/create">
          <Button size="sm" _hover={{ textDecoration: "none" }}>
            + Network
          </Button>
        </Link>
      </HStack>
      <NoSSR>
        <VirtualNetworkListTable />
      </NoSSR>
    </VStack>
  );
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
