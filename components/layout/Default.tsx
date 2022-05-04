import {
  Box,
  Button,
  chakra,
  Container,
  Flex,
  HStack,
  Icon,
  IconButton,
  Skeleton,
  Stack,
  useBoolean,
  useColorModeValue,
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoMdAlert } from "react-icons/io";
import { useUser } from "../../lib/hook/useUser";
import { Brand } from "../Brand";
import Link from "../next/Link";
import Footer from "./Footer";
import {useTranslation} from "react-i18next";
import {availableLanguages} from "../../i18n/i18n";

const Ma = () => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Flex w="full" mx="auto" bg={useColorModeValue("white", "gray.800")} shadow="md" rounded="lg" overflow="hidden">
        <Flex justifyContent="center" alignItems="center" w={12} bg="yellow.500">
          <Icon as={IoMdAlert} color="white" boxSize={6} />
        </Flex>

        <Box mx={-3} py={2} px={4}>
          <Box mx={3}>
            <chakra.span color={useColorModeValue("yellow.400", "yellow.300")} fontWeight="bold">
              Warning
            </chakra.span>
            <chakra.p color={useColorModeValue("gray.600", "gray.200")} fontSize="sm">
              <Markdown>
                {`We are going to release version 0.2.0 on January, 15, 2022. This site is under developing. If you need the service from OmniEdge, go and visit
                [OmniEdge.io](https://omniedge.io/download) to download the version 0.1.x. `}
              </Markdown>
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

const DefaultLayout: React.FC<{}> = (props) => {
  const [isNavBarOpen, setNavBarOpen] = useBoolean(false);
  const { user, isLoading, isError } = useUser(null);
  const {t, i18n} = useTranslation("header")
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
            <Link href="/pricing">{t('pricing')}</Link>
            <Link href="/download">{t('download')}</Link>
            <Link href="/docs">{t('docs')}</Link>
            <Link href="/blog">{t('blog')}</Link>
          </Stack>
          <HStack>
            {isLoading && <Skeleton h="8" w="20"></Skeleton>}
            {!isLoading && user && (
              <Link href="/dashboard/virtual-networks">
                <Button colorScheme="brand">{t('dashboard')}</Button>
              </Link>
              
            )}
            {!isLoading && !user && (
              <>
                <select defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
          {availableLanguages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </select>
                <Link href="/register">
                  <Button colorScheme="brand">{t('getstarted')}</Button>
                </Link>
                <Link href="/login">
                  <Button>{t('login')}</Button>
                </Link>
              </>
            )}
          </HStack>
        </Flex>
      </nav>
      <main
        style={{
          minHeight: "calc(100vh - 72px - 166px)",
        }}
      >
        {props.children}
      </main>
      <Footer />
    </Container>
  );
};

export default DefaultLayout;
