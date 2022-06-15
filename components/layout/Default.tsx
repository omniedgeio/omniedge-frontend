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
import { IoMdAlert } from "react-icons/io";
import { useUser } from "../../lib/hook/useUser";
import Footer from "./Footer";
import {Header} from "./Header";
import {useTranslation} from "react-i18next";


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
      <Header />
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
