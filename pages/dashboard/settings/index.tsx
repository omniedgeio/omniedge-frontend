import {
  Button,
  Code,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Spinner,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
import { useEffect, useState } from "react";
import { FiCheck, FiLock, FiMoreVertical, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import * as Yup from "yup";
import ActivatePasswordModal from "../../../components/auth/ActivatePasswordModal";
import ChangePasswordModal from "../../../components/auth/ChangePasswordModal";
import GoogleLogin from "../../../components/auth/GoogleLogin";
import ConfirmModal from "../../../components/ConfirmModal";
import DashboardLayout from "../../../components/layout/Dashboard";
import { listInvitations, updateInvitation } from "../../../lib/api/invitations";
import { InvitationStatusEnum } from "../../../lib/api/request";
import { IInvitationResponse } from "../../../lib/api/response";
import { activateGoogleLogin, updateProfile } from "../../../lib/api/user";
import { showError, showSuccess } from "../../../lib/helpers/toast";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";

const UpdateUserProfileForm: React.FC = function (props) {
  const { user, refetch, isLoading } = useUser("/login");

  const { handleChange, handleBlur, handleSubmit, values, setValues, touched, errors, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string().required("Required").email(),
    }),
    onSubmit: (values, actions) => {
      updateProfile(values).then(() => {
        refetch();
        actions.setSubmitting(false);
      });
    },
  });

  useEffect(() => {
    setValues({ name: user?.name || "", email: user?.email || "" });
  }, [user]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack maxW="sm" w="full" alignItems="flex-start" spacing={4}>
        <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            placeholder="Display name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          ></Input>
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!(touched.email && errors.email)} isRequired>
          <FormLabel>Email</FormLabel>
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
        <Button type="submit" isLoading={isSubmitting} colorScheme="brand">
          Update
        </Button>
      </VStack>
    </form>
  );
};

const Invitations: React.FC = function (props) {
  const { data, isLoading, isError, refetch } = useQuery(["invitations"], listInvitations);
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });

  const confirmModal = useDisclosure();
  const [invitationToReject, setInvitationToReject] = useState<IInvitationResponse>();

  return (
    <>
      <Heading mt={4} fontWeight="medium" size="md">
        Invitations
      </Heading>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Virtual Network"
        onConfirm={() => {
          updateInvitation(invitationToReject?.uuid as string, { status: InvitationStatusEnum.Rejected }).then(() => {
            refetch();
            confirmModal.onClose();
          });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to reject invitation from <Code>{invitationToReject?.virtual_network}</Code>?
      </ConfirmModal>
      <Table w="full" maxW="container.sm">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "Invitation" : "Virtual Network"}</Th>
            <Th display={["none", "table-cell"]}>Invited at</Th>
            <Th display={["none", "table-cell"]}>Invited by</Th>
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
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
            </Tr>
          ) : (
            data?.map((invitation) => {
              const VirtualNetworkName = () => <Text>{invitation.virtual_network}</Text>;
              const InvitedBy = () => <Text fontSize={["sm", "md"]}>{invitation.invited_by}</Text>;
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
                      onClick={() => {
                        updateInvitation(invitation.uuid as string, {
                          status: InvitationStatusEnum.Accepted,
                        }).then(() => {
                          refetch();
                        });
                      }}
                      icon={<FiCheck />}
                    >
                      Accept
                    </MenuItem>
                    <MenuItem
                      color="red.500"
                      onClick={() => {
                        setInvitationToReject(invitation);
                        confirmModal.onOpen();
                      }}
                      icon={<FiX />}
                    >
                      Reject
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={invitation.uuid}>
                  <Td px="0">
                    {!isPhone ? (
                      <VirtualNetworkName />
                    ) : (
                      <HStack justifyContent="space-between">
                        <VStack spacing="1" alignItems="flex-start">
                          <VirtualNetworkName />
                          <HStack alignItems="center">
                            <InvitedAt />
                            <Text>•</Text>
                            <InvitedBy />
                          </HStack>
                        </VStack>
                        <ActionMenu />
                      </HStack>
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <InvitedAt />
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <InvitedBy />
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

const ChangePassword: React.FC = function (props) {
  const { user, refetch } = useUser("/login");
  const changePasswordModal = useDisclosure();
  const activatePasswordModal = useDisclosure();
  const isPasswordEnabled = !!user?.identities.find(({ provider }) => provider == "password")?.enabled;

  return (
    <>
      <ChangePasswordModal
        onSuccess={refetch}
        isOpen={changePasswordModal.isOpen}
        onClose={changePasswordModal.onClose}
      />
      <ActivatePasswordModal
        onSuccess={refetch}
        isOpen={activatePasswordModal.isOpen}
        onClose={activatePasswordModal.onClose}
      />
      <VStack spacing={2} alignItems="flex-start">
        <Heading fontWeight="medium" size="md">
          Password
        </Heading>
        {isPasswordEnabled ? (
          <>
            <Text>Changing your password regularly reduces your risk of exposure and avoids a number of dangers.</Text>
            <Button leftIcon={<FiLock />} onClick={changePasswordModal.onOpen}>
              Change Password
            </Button>
          </>
        ) : (
          <>
            <Text>Activate Password login if you need a more traditional way to login.</Text>
            <Button leftIcon={<FiLock />} onClick={activatePasswordModal.onOpen}>
              Activate Password Login
            </Button>
          </>
        )}
      </VStack>
    </>
  );
};

const LinkWithGoogle: React.FC = function (props) {
  const { user, refetch } = useUser("/login");
  const showErr = () =>
    showError("Link with Google", "Unexpected error when linked with your google accounts. Please try again later.");
  const provider = user?.identities.find(({ provider }) => provider == "google");
  return (
    <VStack spacing={2} alignItems="flex-start">
      <Heading fontWeight="medium" size="md">
        Link with Google
      </Heading>
      {provider?.enabled ? (
        <Text>
          Your account has already been{" "}
          <Text as="span" display="inline" color="green.500">
            successfully linked
          </Text>{" "}
          with google account. <Code>{provider?.metadata?.email}</Code>
        </Text>
      ) : (
        <>
          <Text>Using Google Account to login is more secure and convenient. Link it now</Text>
          <GoogleLogin
            onSuccess={(e) => {
              activateGoogleLogin({
                id_token: e.getAuthResponse().id_token,
              })
                .then(() => {
                  showSuccess(
                    "Link with Google",
                    `Successfully link with your google account : ${e.getBasicProfile().getEmail()}`
                  );
                  refetch();
                })
                .catch(() => {
                  showErr();
                });
            }}
            onFailure={(err) => {
              showErr();
            }}
          />
        </>
      )}
    </VStack>
  );
};

const SettingsPage: Page = function (props) {
  return (
    <>
      <Heading fontWeight="semibold" size="md">
        Settings
      </Heading>
      <Tabs variant="enclosed" colorScheme="brand" mt="2">
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Security</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0}>
            <UpdateUserProfileForm />
            <Invitations />
          </TabPanel>
          <TabPanel px={0}>
            <VStack spacing="8" maxW="lg" alignItems="flex-start">
              <ChangePassword />
              <LinkWithGoogle />
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

SettingsPage.layout = DashboardLayout;

export default SettingsPage;
