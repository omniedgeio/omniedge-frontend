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
import ChangePasswordModal from "../../../components/auth/ChangePasswordModal";
import GoogleLogin from "../../../components/auth/GoogleLogin";
import ConfirmModal from "../../../components/ConfirmModal";
import DashboardLayout from "../../../components/layout/Dashboard";
import { listInvitations, updateInvitation } from "../../../lib/api/invitations";
import { InvitationStatus } from "../../../lib/api/request";
import { IInvitationResponse } from "../../../lib/api/response";
import { activateGoogleLogin, updateProfile } from "../../../lib/api/user";
import { showError, showSuccess } from "../../../lib/helpers/toast";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";
import {useTranslation} from "react-i18next";

const UpdateUserProfileForm: React.FC = function (props) {
  const { user, refetch, isLoading } = useUser("/login");
  const {t, i18n} = useTranslation('dashboard')
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
          <FormLabel>{t('setting.name')}</FormLabel>
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
          <FormLabel>{t('setting.email')}</FormLabel>
          <Input
            disabled
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder={t('setting.inputemail')}
          ></Input>
          <FormErrorMessage>{errors.email}</FormErrorMessage>
        </FormControl>
        <Button type="submit" isLoading={isSubmitting} colorScheme="brand">
        {t('setting.update')}
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
  const {t, i18n} = useTranslation('dashboard')
  return (
    <>
      <Heading mt={4} fontWeight="medium" size="md">
        {t('setting.invitations')}
      </Heading>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={t('setting.removevn')}
        onConfirm={() => {
          updateInvitation(invitationToReject?.id as string, { status: InvitationStatus.Rejected })
            .then(() => {
              refetch();
              confirmModal.onClose();
              showSuccess("Success", "Invitation rejected");
            })
            .catch((err) => {
              showError("Error", err.data.message);
            });
        }}
        onCancel={confirmModal.onClose}
      >
        {t('setting.removeconfirm')}<Code>{invitationToReject?.virtual_network.name}</Code>?
      </ConfirmModal>
      <Table w="full" maxW="container.sm">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? t('setting.invitation') : t('setting.virtualnetwork')}</Th>
            <Th display={["none", "table-cell"]}>{t('setting.invitedat')}</Th>
            <Th display={["none", "table-cell"]}>{t('setting.invitedby')}</Th>
            <Th display={["none", "table-cell"]}>{t('setting.action')}</Th>
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
            data?.data?.map((invitation) => {
              const VirtualNetworkName = () => <Text>{invitation.virtual_network.name}</Text>;
              const InvitedBy = () => <Text fontSize={["sm", "md"]}>{invitation.invited_by.name}</Text>;
              const InvitedAt = (props: TextProps) => (
                <Text fontSize={["sm", "md"]} color={["gray.600", "black"]} {...props}>
                  {formatDistanceToNow(new Date(invitation.created_at))}
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
                        updateInvitation(invitation.id as string, {
                          status: InvitationStatus.Accepted,
                        })
                          .then(() => {
                            refetch();
                            showSuccess("Success", "Invitation accepted");
                          })
                          .catch((err) => {
                            showError("Error", err.data.message);
                          });
                      }}
                      icon={<FiCheck />}
                    >
                      {t('setting.accept')}
                    </MenuItem>
                    <MenuItem
                      color="red.500"
                      onClick={() => {
                        setInvitationToReject(invitation);
                        confirmModal.onOpen();
                      }}
                      icon={<FiX />}
                    >
                      {t('setting.reject')}
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={invitation.id}>
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
  const {t, i18n} = useTranslation('dashboard')
  return (
    <>
      <ChangePasswordModal
        onSuccess={refetch}
        isOpen={changePasswordModal.isOpen}
        onClose={changePasswordModal.onClose}
      />
      {/* <ActivatePasswordModal
        onSuccess={refetch}
        isOpen={activatePasswordModal.isOpen}
        onClose={activatePasswordModal.onClose}
      /> */}
      <VStack spacing={2} alignItems="flex-start">
        <Heading fontWeight="medium" size="md">
          {t('setting.password')}
        </Heading>
        {/* {isPasswordEnabled ? ( */}
        <>
          <Text>{t('setting.changepassword-desc')}</Text>
          <Button leftIcon={<FiLock />} onClick={changePasswordModal.onOpen}>
          {t('setting.changepassword')}
          </Button>
        </>
        {/* ) : (
          <>
            <Text>Activate Password login if you need a more traditional way to login.</Text>
            <Button leftIcon={<FiLock />} onClick={activatePasswordModal.onOpen}>
              Activate Password Login
            </Button>
          </>
        )} */}
      </VStack>
    </>
  );
};

const LinkWithGoogle: React.FC = function (props) {
  const { user, refetch } = useUser("/login");
  const showErr = () =>
    showError("Link with Google", "Unexpected error when linked with your google accounts. Please try again later.");
  const provider = user?.identities.find(({ provider }) => provider == "google");
  const {t, i18n} = useTranslation('dashboard')
  return (
    <VStack spacing={2} alignItems="flex-start">
      <Heading fontWeight="medium" size="md">
        {t('setting.linkgoogle')}
      </Heading>
      {provider?.enabled ? (
        <Text>
          {t('setting.linkgoogle-desc-1')}{" "}
          <Text as="span" display="inline" color="green.500">
          {t('setting.linkgoogle-desc-2')}
          </Text>{" "}
          {t('setting.linkgoogle-desc-3')} <Code>{provider?.metadata?.email}</Code>
        </Text>
      ) : (
        <>
          <Text>{t('setting.linkgoogle-desc')}</Text>
          <GoogleLogin
            onSuccess={(e) => {
              activateGoogleLogin({
                id_token: e.getAuthResponse().id_token,
              })
                .then(() => {
                  showSuccess(
                    t('setting.linkgoogle'),
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
  const {t, i18n} = useTranslation('dashboard')
  return (
    <>
      <Heading fontWeight="semibold" size="md">
        {t('setting.title')}
      </Heading>
      <Tabs variant="enclosed" colorScheme="brand" mt="2">
        <TabList>
          <Tab>{t('setting.profile')}</Tab>
          <Tab>{t('setting.security')}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0}>
            <UpdateUserProfileForm />
            <Invitations />
          </TabPanel>
          <TabPanel px={0}>
            <VStack spacing="8" maxW="lg" alignItems="flex-start">
              <ChangePassword />
              {/* <LinkWithGoogle /> */}
            </VStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

SettingsPage.layout = DashboardLayout;

export default SettingsPage;
