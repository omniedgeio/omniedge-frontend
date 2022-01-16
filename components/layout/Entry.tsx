import { Center, Divider, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { loginByGoogle, notifyAuthSession } from "../../lib/api/auth";
import { showError, showSuccess } from "../../lib/helpers/toast";
import { useUser } from "../../lib/hook/useUser";
import GoogleLogin from "../auth/GoogleLogin";
import Logo from "../Logo";
import Link from "../next/Link";
import { Seo } from "../Seo";

const EntryLayout: React.FC = function ({ children }) {
  const router = useRouter();
  const { isLoading, user } = useUser(null);

  if (user) {
    let auth_session_uuid = router.query["auth_session_uuid"]?.toString();
    if (auth_session_uuid) {
      notifyAuthSession({ auth_session_uuid });
    }
    router.push("/dashboard/virtual-networks");
  }

  return (
    <Center mt="4" py="4">
      <Seo title={"Login"} description="Omniedge Dashboard" />
      <VStack w={["full", "80"]} px={[8, 0]} spacing="4">
        <Link href="/">
          <VStack spacing="4">
            <Logo h="12"></Logo>
            <Heading fontWeight="semibold" fontSize="xl">
              OMNIEDGE
            </Heading>
          </VStack>
        </Link>
        <Text textAlign="center">
          Bring intranet on the internet, <br />
          with P2P Secure Connection, Any Time, Any Where.
        </Text>
        {isLoading || user ? (
          <Spinner />
        ) : (
          <>
            <GoogleLogin
              onFailure={(e) => {
                showError("Login with Google", "Unexpected error occured when login with google.");
              }}
              onSuccess={(e) => {
                loginByGoogle({
                  id_token: e.getAuthResponse().id_token,
                  auth_session_uuid: router.query["auth_session_uuid"]?.toString(),
                })
                  .then(() => {
                    showSuccess(
                      "Login with Google",
                      `Successfully login with your google account : ${e.getBasicProfile().getEmail()}`
                    );
                    router.push("/dashboard");
                  })
                  .catch(() => {
                    showError("Login with Google", "Unexpected error occured when login with google.");
                  });
              }}
              variant="outline"
              isFullWidth
            ></GoogleLogin>
            <Divider
              textAlign="center"
              py="2"
              _after={{
                content: "'or continue with email'",
                px: 2,
                fontSize: "sm",
                transform: "translateY(-.35rem)",
                background: "white",
                display: "inline-block",
              }}
            ></Divider>
            {children}
          </>
        )}
      </VStack>
    </Center>
  );
};

export default EntryLayout;
