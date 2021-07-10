import { Button, Center, Divider, Heading, Spinner, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FcGoogle } from "react-icons/fc";
import { useUser } from "../../lib/hook/useUser";
import Logo from "../Logo";

const EntryLayout: React.FC = function ({ children }) {
  const router = useRouter();
  const { isLoading, user } = useUser(null);

  if (user) {
    router.push("/dashboard/virtual-networks");
  }

  return (
    <Center mt="4" py="4">
      <VStack w={["full", "80"]} px={[8, 0]} spacing="4">
        <Logo h="12"></Logo>
        <Heading fontWeight="semibold" fontSize="xl">
          OmniEdge
        </Heading>
        <Text textAlign="center">
          Connect without concern at <br />
          any platform, anytime, anywhere.
        </Text>
        {isLoading || user ? (
          <Spinner />
        ) : (
          <>
            <Button leftIcon={<FcGoogle />} variant="outline" isFullWidth>
              Continue with Google
            </Button>
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
