import {
  Button,
  Code,
  FormControl,
  FormErrorMessage,
  Heading,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
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
  SkeletonText,
  Stack,
  Tab,
  Table,
  TableCaption,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
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
import { formatDistanceToNow } from "date-fns";
import { useFormik } from "formik";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { FiMoreVertical, FiPlus, FiX } from "react-icons/fi";
import { useQuery, UseQueryResult } from "react-query";
import * as Yup from "yup";
import ConfirmModal from "../../../../components/ConfirmModal";
import DashboardLayout from "../../../../components/layout/Dashboard";
import Link from "../../../../components/next/Link";
import {
  IInvitationResponse,
  IVirtualNetworkDeviceResponse,
  IVirtualNetworkResponse,
  IVirtualNetworkUserResponse,
} from "../../../../lib/api/response";
import {
  createInvitationsInVirtualNetwork,
  listInvitationsInVirtualNetwork,
  removeDeviceFromVirtualNetwork,
  removeUserFromVirtualNetwork,
  retrieveVirtualNetwork,
  revokeInvitationInVirtualNetwork,
} from "../../../../lib/api/virtualNetwork";
import { showError, showSuccess } from "../../../../lib/helpers/toast";
import { useUser } from "../../../../lib/hook/useUser";
import { Page } from "../../../../types";

const VirtualNetworkInvitationsTable: React.FC<{
  uuid: string;
  isLoading: boolean;
  isError: boolean;
  data: IInvitationResponse[] | undefined | null;
  refetch: any;
}> = function ({ uuid, isLoading, isError, data, refetch }) {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });

  const confirmModal = useDisclosure();
  const [invitationToRemove, setInvitationToRemove] = useState<IInvitationResponse>();

  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Virtual Network"
        onConfirm={() => {
          revokeInvitationInVirtualNetwork(uuid as string, invitationToRemove?.uuid as string).then(() => {
            refetch();
            confirmModal.onClose();
          });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to revoke invitation to <Code>{invitationToRemove?.user.name}</Code>?
      </ConfirmModal>
      <Table w="full" maxW="container.sm">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "Email" : "Email"}</Th>
            <Th display={["none", "table-cell"]}>Invited at</Th>
            <Th display={["none", "table-cell"]}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading || isError ? (
            <Tr>
              <Td pl="0">
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
            data?.map((invitation) => {
              const Email = () => <Text>{invitation.user.email}</Text>;
              const InvitedAt = (props: TextProps) => (
                <Text fontSize={["sm", "md"]} color={["gray.600", "black"]} {...props}>
                  {formatDistanceToNow(new Date(invitation.invited_at))}
                </Text>
              );

              const ActionMenu = () => (
                <Menu placement="bottom-end">
                  <MenuButton
                    variant={variant}
                    borderRadius="md"
                    as={IconButton}
                    size="sm"
                    icon={<FiMoreVertical />}
                  ></MenuButton>
                  <MenuList py="1.5">
                    <MenuItem
                      color="red.500"
                      onClick={() => {
                        setInvitationToRemove(invitation);
                        confirmModal.onOpen();
                      }}
                      icon={<FiX />}
                    >
                      Remove
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={invitation.uuid}>
                  <Td px="0">
                    {!isPhone ? (
                      <Email />
                    ) : (
                      <HStack justifyContent="space-between">
                        <VStack spacing="1" alignItems="flex-start">
                          <Email />
                          <InvitedAt />
                        </VStack>
                        <ActionMenu />
                      </HStack>
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <InvitedAt />
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <ActionMenu />
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

const CreateInvitationModal: React.FC<{
  uuid: string;
  onClose: () => void;
  isOpen: boolean;
}> = function ({ uuid, onClose, isOpen }) {
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
              createInvitationsInVirtualNetwork(uuid, { emails })
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

const VirtualNetworkInvitationsSection: React.FC<{ uuid: string }> = function ({ uuid }) {
  const createInvitationModal = useDisclosure();
  const { data, isLoading, isError, refetch } = useQuery(["virtual-network-invitations", uuid], () =>
    uuid ? listInvitationsInVirtualNetwork(uuid) : null
  );

  return (
    <VStack w="full" maxW="container.sm" alignItems="flex-start" mt={[4, 8]}>
      <HStack w="full" alignItems="center" justifyContent="space-between">
        <Heading fontSize="md" fontWeight="semibold">
          Invitation
        </Heading>
        <Button onClick={createInvitationModal.onOpen} size="sm">
          Invite
        </Button>
      </HStack>
      <VirtualNetworkInvitationsTable
        refetch={refetch}
        data={data}
        isLoading={isLoading}
        isError={isError}
        uuid={uuid}
      />
      <CreateInvitationModal
        uuid={uuid}
        isOpen={createInvitationModal.isOpen}
        onClose={() => {
          refetch();
          createInvitationModal.onClose();
        }}
      />
    </VStack>
  );
};

const VirtualNetworkUsersTable: React.FC<UseQueryResult<IVirtualNetworkResponse | null | undefined>> = function ({
  isError,
  isLoading,
  data,
  refetch,
}) {
  const router = useRouter();
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });
  const uuid = data?.uuid || null;

  const confirmModal = useDisclosure();
  const [userToRemove, setUserToRemove] = useState<IVirtualNetworkUserResponse>();
  const { user } = useUser("/login");
  const isAdmin = !!(data?.users.find(({ uuid }) => user?.uuid == uuid)?.role == "admin");

  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Virtual Network"
        onConfirm={() => {
          removeUserFromVirtualNetwork(uuid as string, userToRemove?.uuid as string).then(() => {
            if (userToRemove?.uuid == user?.uuid) {
              router.push("/dashboard");
            } else {
              refetch();
              confirmModal.onClose();
            }
          });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to remove user <Code>{userToRemove?.name}</Code> from this virtual network?
      </ConfirmModal>
      <Table w="full" maxW="container.sm">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "User" : "Name"}</Th>
            <Th display={["none", "table-cell"]}>Email</Th>
            {isAdmin && data?.users && data?.users?.length > 1 && <Th display={["none", "table-cell"]}>Action</Th>}
          </Tr>
        </Thead>
        <Tbody>
          {isLoading || isError ? (
            <Tr>
              <Td pl="0">
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
            data?.users?.map((vnUser) => {
              const Name = () => (
                <Text>
                  {vnUser.name}
                  {vnUser.role == "admin" && (
                    <Tag ml={2} size="sm" colorScheme="green">
                      {vnUser.role}
                    </Tag>
                  )}
                </Text>
              );
              const Email = () => (
                <Text fontSize={["sm", "md"]} color={["gray.600", "black"]}>
                  {vnUser.email}
                </Text>
              );

              const ActionMenu = () => (
                <Menu placement="bottom-end">
                  <MenuButton
                    variant={variant}
                    borderRadius="md"
                    as={IconButton}
                    size="sm"
                    icon={<FiMoreVertical />}
                  ></MenuButton>
                  <MenuList py="1.5">
                    <MenuItem
                      color="red.500"
                      onClick={() => {
                        setUserToRemove(vnUser);
                        confirmModal.onOpen();
                      }}
                      icon={<FiX />}
                    >
                      {user?.uuid == vnUser.uuid ? "Leave" : "Remove"}
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={vnUser.uuid}>
                  <Td px="0">
                    {!isPhone ? (
                      <Name />
                    ) : (
                      <HStack justifyContent="space-between">
                        <VStack spacing="1" alignItems="flex-start">
                          <Name />
                          <Email />
                        </VStack>
                        <ActionMenu />
                      </HStack>
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <Email />
                  </Td>
                  {isAdmin && data.users.length > 1 && (
                    <Td display={["none", "table-cell"]}>
                      <ActionMenu />
                    </Td>
                  )}
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
      {isAdmin && <VirtualNetworkInvitationsSection uuid={uuid as string} />}
    </>
  );
};

const VirtualNetworkDevicesTable: React.FC<UseQueryResult<IVirtualNetworkResponse | null | undefined>> = function ({
  isLoading,
  isError,
  refetch,
  data,
}) {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });
  const uuid = data?.uuid || null;

  const confirmModal = useDisclosure();
  const [deviceToRemove, setDeviceToRemove] = useState<IVirtualNetworkDeviceResponse>();
  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Virtual Network"
        onConfirm={() => {
          removeDeviceFromVirtualNetwork(uuid as string, deviceToRemove?.uuid as string).then(() => {
            refetch();
            confirmModal.onClose();
          });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to remove device <Code>{deviceToRemove?.name}</Code> from this virtual network?
      </ConfirmModal>
      <Table w="full">
        <TableCaption>
          <Link href="/download" color="brand.500">
            Download
          </Link>{" "}
          apps now to enjoy our service
        </TableCaption>
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "Device" : "Name"}</Th>
            <Th display={["none", "table-cell"]}>IP</Th>
            <Th display={{ base: "none", md: "table-cell" }}>OS</Th>
            <Th display={["none", "table-cell"]}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading || isError ? (
            <Tr>
              <Td pl="0">
                <Skeleton h="4" />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
              <Td display={{ base: "none", md: "table-cell" }}>
                <Skeleton h="4" />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
            </Tr>
          ) : (
            data?.devices?.map((device) => {
              const Name = () => <Text>{device.name}</Text>;
              const VirtualIP = () => (
                <Code fontSize={["xs", "sm"]} px="0" bg="white">
                  {device.virtual_ip}
                </Code>
              );
              const OS = () => <Text fontSize="sm">Unknown</Text>;

              const ActionMenu = () => (
                <Menu placement="bottom-end">
                  <MenuButton
                    variant={variant}
                    borderRadius="md"
                    as={IconButton}
                    size="sm"
                    icon={<FiMoreVertical />}
                  ></MenuButton>
                  <MenuList py="1.5">
                    <MenuItem
                      color="red.500"
                      onClick={() => {
                        setDeviceToRemove(device);
                        confirmModal.onOpen();
                      }}
                      icon={<FiX />}
                    >
                      Remove
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={device.uuid}>
                  <Td px="0">
                    {!isPhone ? (
                      device.name
                    ) : (
                      <HStack justifyContent="space-between">
                        <VStack spacing="1" alignItems="flex-start">
                          <Name />
                          <HStack spacing="1">
                            <VirtualIP />
                            <Text>•</Text>
                            <OS />
                          </HStack>
                        </VStack>
                        <ActionMenu />
                      </HStack>
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <VirtualIP />
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    <OS />
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <ActionMenu />
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
const VirtualNetworkDetailPage: Page = function (props) {
  const router = useRouter();
  const { uuid } = router.query;

  const result = useQuery(["virtual-network", uuid], () => (uuid ? retrieveVirtualNetwork(uuid as string) : null));

  return (
    <VStack alignItems="flex-start" spacing="4">
      <Heading size="md" fontWeight="semibold">
        <SkeletonText isLoaded={!result.isLoading || !result.isError}>{result.data?.name}</SkeletonText>
      </Heading>
      <Tabs variant="enclosed" colorScheme="brand" w="full">
        <TabList>
          <Tab>Devices</Tab>
          <Tab>Users</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0}>
            <VirtualNetworkDevicesTable {...result} />
          </TabPanel>
          <TabPanel px={0}>
            <VirtualNetworkUsersTable {...result} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

VirtualNetworkDetailPage.layout = DashboardLayout;

export default VirtualNetworkDetailPage;
