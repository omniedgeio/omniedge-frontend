import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Stack,
  Text,
  VStack,
  chakra,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from 'next/router'
import { Customersmap } from "../components/Customersmap";
import { Compare, FeaturePage, Featureslist, Featureheros, Heros } from "../components/Features";
import { Downloadlist } from "./download/download_feature";
import DefaultLayout from "../components/layout/Default";
import { Seo } from "../components/Seo";
import { Page } from "../types";

import {useTranslation} from "react-i18next";
import {availableLanguages} from "../i18n/i18n";
import { FaGithub } from "react-icons/fa";
import Markdown from "markdown-to-jsx";
import { setReferralCodeCookie } from '../lib/api/referral';



const Home: Page = (props) => {
  const { t, i18n } = useTranslation('index')
  const router = useRouter();

  React.useEffect(() => {
    if (typeof router.query.referral_code === 'string') {
      setReferralCodeCookie(router.query.referral_code);
    }
  }, [router.query.referral_code])

  return (
    <>
      <Seo
        title={t('title')}
        description={t('description')}
        image="/assets/OmniEdgeall0.5.png"
      />
      <Box padding="4" as="header" py={["2", "8", "24"]} position="relative">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start" }}
          spacing='24px'
        >
          <VStack alignItems="flex-start" paddingTop='31px'>
            <Heading maxW="full" as="h1" size="xl" lineHeight="1.5em" >
              <chakra.h1
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                lineHeight="none"
                letterSpacing={{ base: "normal", md: "tight" }}
              >{t('slogan-1')} {" "}
                <Text
                  display={{ base: "block", lg: "inline" }}
                  w="full"
                  bgClip="text"
                  bgGradient="linear-gradient(183deg, rgba(103, 103, 103, 1), rgba(211, 211, 211, 1));"
                  fontWeight="extrabold"
                >
                  {t('slogan-2')} {" "}
                </Text>
                {t('slogan-3')}
              </chakra.h1>
            </Heading>
            <Text maxW="2xl" color="gray.700" py="4" fontSize="14px">
              <Markdown>{t('slogan-description')}</Markdown>
            </Text>
            <HStack>
              <Link href="/register">
                <Button colorScheme="blue" borderRadius="4px" >{t('getstartedfree')} </Button>
              </Link>
              <Button color="white" borderRadius="4px" backgroundColor="black"> <Text color="orange" fontSize="20px" paddingRight="7px">></Text> docker pull omniedge/omniedge:latest</Button>
            </HStack>
            <Featureheros>{t('getstart-subtitle')}</Featureheros>
          </VStack>
          <Image maxW={{ md: "601px" }} top='1px' src="/assets/OmniEdge-clients.png" alt="OmniEdge" />
        </Stack>
        <Box
          position="absolute"
          w="5000px"
          h="500px"
          top={["25%", "5%"]}
          right="0"
          zIndex="-1"
          backgroundImage="url('/background-network.png')"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          backgroundPosition="right"
        ></Box>
      </Box>
      <Downloadlist />
      <Compare />
      <Featureslist />
      <FeaturePage />
      <Customersmap />
      <Heros />
    </>
  );
};

Home.layout = DefaultLayout;

export default Home;
