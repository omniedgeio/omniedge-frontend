import { Button, Container, Flex, HStack, IconButton, Skeleton, Stack, useBoolean } from "@chakra-ui/react";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useUser } from "../../lib/hook/useUser";
import { Brand } from "../Brand";
import Link from "../next/Link";
import Footer from "./Footer";

const DefaultLayout: React.FC<{}> = (props) => {
  const [isNavBarOpen, setNavBarOpen] = useBoolean(false);
  const { user, isLoading, isError } = useUser(null);

  return (
    <Container maxW="container.xl" px={["0", "4"]}>
      <nav>
        <Flex
          display={["flex", "none"]}
          alignItems="center"
          p="4"
          justifyContent="space-between"
          borderBottom="1px"
          borderBottomColor="gray.100"
        >
          <Link href="/">
            <Brand />
          </Link>
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
          alignItems="center"
          justifyContent="space-between"
          borderBottom={["1px", "0"]}
          borderBottomColor="gray.100"
          display={[isNavBarOpen ? "flex" : "none", "flex"]}
        >
          <Link display={["none", "block"]} href="/" _hover={{ color: "inherit" }}>
            <Brand />
          </Link>
          <Stack
            spacing={["2", "5"]}
            mb={["4", "0"]}
            alignItems={["flex-start", "center"]}
            direction={["column", "row"]}
          >
            <Link href="/pricing">Pricing</Link>
            <Link href="/download">Download</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/blog">Blog</Link>
          </Stack>
          <HStack>
            {isLoading && <Skeleton h="8" w="20"></Skeleton>}
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
      <main>{props.children}</main>
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
