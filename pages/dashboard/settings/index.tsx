import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useEffect } from "react";
import { FiLock } from "react-icons/fi";
import * as Yup from "yup";
import ActivatePasswordModal from "../../../components/auth/ActivatePasswordModal";
import ChangePasswordModal from "../../../components/auth/ChangePasswordModal";
import GoogleLogin from "../../../components/auth/GoogleLogin";
import DashboardLayout from "../../../components/layout/Dashboard";
import { activateGoogleLogin, updateProfile } from "../../../lib/api/user";
import { showError, showSuccess } from "../../../lib/helpers/toast";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";

const UpdateUserProfileForm: React.FC = function (props) {
  const { user, refetch } = useUser("/login");

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

  return (
    <form onSubmit={handleSubmit}>
      <VStack w="sm" alignItems="flex-start" spacing={4}>
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
  return (
    <VStack spacing={2} alignItems="flex-start">
      <Heading fontWeight="medium" size="md">
        Link with Google
      </Heading>
      {user?.identities.find(({ provider }) => provider == "google").enabled ? (
        <Text>
          Your account has already been{" "}
          <Text as="span" display="inline" color="green.500">
            successfully linked
          </Text>{" "}
          with google account.
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
