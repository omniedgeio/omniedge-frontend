import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Skeleton,
  Stack,
  useBoolean,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useUser } from "../../lib/hook/useUser";
import Logo from "../Logo";
import Link from "../next/Link";

const DefaultLayout: React.FC<{}> = (props) => {
  const [isNavBarOpen, setNavBarOpen] = useBoolean(false);
  const { user, isLoading, isError } = useUser(null);

  return (
    <Container maxW="container.xl" px={["0", "4"]}>
      <nav>
        <Flex
          display={["flex", "none"]}
          p="4"
          justifyContent="space-between"
          borderBottom="1px"
          borderBottomColor="gray.100"
        >
          <HStack>
            <Logo height="8" />
            <Heading fontWeight="semibold" size="md" as="h6">
              OmniEdge
            </Heading>
          </HStack>
          <IconButton
            aria-label="menu"
            borderRadius="md"
            fontSize="lg"
            onClick={setNavBarOpen.toggle}
            icon={isNavBarOpen ? <FiX /> : <FiMenu />}
          ></IconButton>
        </Flex>
        <Flex
          py="4"
          px={["4", "0"]}
          direction={["column", "row"]}
          alignContent="center"
          justifyContent="space-between"
          borderBottom={["1px", "0"]}
          borderBottomColor="gray.100"
          display={[isNavBarOpen ? "flex" : "none", "flex"]}
        >
          <HStack display={["none", "flex"]}>
            <Logo height="8" />
            <Heading fontWeight="semibold" size="md" as="h6">
              OmniEdge
            </Heading>
          </HStack>
          <Stack
            spacing={["2", "5"]}
            mb={["4", "0"]}
            alignItems={["flex-start", "center"]}
            direction={["column", "row"]}
          >
            <Link href="/">Quickstart</Link>
            <Link href="/">Docs</Link>
            <Link href="/">Blog</Link>
            <Link href="/">About us</Link>
          </Stack>
          <HStack>
            {isLoading && <Skeleton h="8"></Skeleton>}
            {!isLoading && user && (
              <Link href="/dashboard">
                <Button colorScheme="brand">Dashboard</Button>
              </Link>
            )}
            {!isLoading && !user && (
              <>
                <Link href="/register">
                  <Button colorScheme="brand">Get Started</Button>
                </Link>
                <Link href="/login">
                  <Button>Login</Button>
                </Link>
              </>
            )}
          </HStack>
        </Flex>
      </nav>
      <main>
        <Box px={["4", "0"]}>{props.children}</Box>
      </main>
    </Container>
  );
};

export default DefaultLayout;
