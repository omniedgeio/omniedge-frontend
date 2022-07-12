import {
  Button,
  Flex,
  HStack,
  IconButton,
  Skeleton,
  Stack,
  useBoolean,
  Select,
  Alert,
  AlertIcon,
  useDisclosure,
  CloseButton,
  Box,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import {FaGithub } from "react-icons/fa";
import { useUser } from "../../lib/hook/useUser";
import { Brand } from "../Brand";
import Link from "../next/Link";
import {useTranslation} from "react-i18next";
import {availableLanguages} from "../../i18n/i18n";


export function Header() {
  const [isNavBarOpen, setNavBarOpen] = useBoolean(false);
  const { user, isLoading, isError } = useUser(null);
  const {t, i18n} = useTranslation("header")
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return (
    <>
   {!isVisible && <Alert status='info'>
      <AlertIcon />
      <Box width="full">
        <AlertDescription> First time users only: get <strong>12 months free</strong> with promo code <a href="https://github.com/omniedgeio/omniedge"><strong>OPENSOURCE</strong></a> for 7 days from 1st,July to 7th,July 2022 ! <br></br>Give our <a href="https://github.com/omniedgeio/omniedge">repo</a> a star if you find it useful.</AlertDescription>
          
      </Box>
      <CloseButton
        alignSelf='right'
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>}
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
            <Link href="/docs/article/Opensource">{t('opensource')}</Link>
            {/* <Link href="/blog">{t('blog')}</Link> */}
          </Stack>
          <HStack>
          <Select 
          variant='unstyled'
          defaultValue={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
          {availableLanguages.map((language) => (
            <option key={language}>{language}</option>
          ))}
        </Select>
            {isLoading && <Skeleton h="8" w="20"></Skeleton>}
            {!isLoading && user && (
              <Link href="/dashboard/virtual-networks">
                <Button colorScheme="brand">{t('dashboard')}</Button>
              </Link>
              
            )}
            {!isLoading && !user && (
              <>
                {/* <Link href="/register">
                  <Button colorScheme="brand">{t('getstarted')}</Button>
                </Link> */}
                <Link href="/login">
                  <Button>{t('login')}</Button>
                </Link>
              </>
            )}
          </HStack>
        </Flex>
      </nav>
</>
  )
}