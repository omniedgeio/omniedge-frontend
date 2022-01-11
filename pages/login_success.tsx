import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  Center,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Logo from "../components/Logo";
import Link from "../components/next/Link";
import { useUser } from "../lib/hook/useUser";
import { Page } from "../types";

const LoginSuccessPage: Page = function (props) {
  const { user } = useUser("/login");

  return (
    <Center mt="6" py="4">
      <VStack spacing={8}>
        <VStack>
          <Link href="/">
            <VStack spacing="4">
              <Logo h="12"></Logo>
              <Heading fontWeight="semibold" fontSize="xl">
                OMNIEDGE
              </Heading>
            </VStack>
          </Link>
          <Text textAlign="center">
            Connect without concern at <br />
            any platform, anytime, anywhere.
          </Text>
        </VStack>
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          p="6"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Login successfully.
          </AlertTitle>
          <AlertDescription maxWidth="sm">Thanks for using OmniEdge. We hope you enjoy our service.</AlertDescription>
          <Link href="/dashboard">
            <Button mt="4" colorScheme="green">
              Dashboard
            </Button>
          </Link>
        </Alert>
      </VStack>
    </Center>
  );
};

export default LoginSuccessPage;
