import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Text,
  VStack,
  chakra,
  useColorModeValue,
  Image
} from "@chakra-ui/react";
import React from "react";
import { Customersmap } from "../components/Customersmap";
import { Compare, FeaturePage, Featureslist, Heros, HighFeatures, How, Users } from "../components/Features";
import {Download_feature} from "./download/download_feature";
import DefaultLayout from "../components/layout/Default";
import { Seo } from "../components/Seo";
import { Page } from "../types";
import {Plans} from "./pricing";
import {useTranslation} from "react-i18next";
import {availableLanguages} from "../i18n/i18n";

const Home: Page = (props) => {
  const {t, i18n} = useTranslation('index')
  return (
    <>
      <Seo
        title={t('title')}
        description={t('description')}
        image="/assets/OmniEdgeall0.5.png"
      />
      <Box padding="4" as="header" py={["6", "12", "36"]} position="relative">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start" }}
        >
          <VStack alignItems="flex-start">
            <Heading as="h6" fontWeight="medium" size="sm" color="gray.500">
              {/* MADE COMMUNICATION EASY AND SAFE */}
              {t('slogan')}
            </Heading>
            <Heading maxW="full" as="h1" size="xl" lineHeight="1.5em">
 <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          {" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, brand.500,purple.500)"
            fontWeight="extrabold"
          >
            {t('unlimitedcomputers')}
          </Text>{" "}
          </chakra.h1>
          <Text>
          {t('slogan-desc-1')} <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, purple.500,brand.500)"
            fontWeight="extrabold"
          >{t('slogan-desc-2')}
          
          </Text> {t('slogan-desc-3')}
        </Text>
            </Heading>
            <Text maxW="2xl" color="gray.700" py="4">
              {t('slogan-description')}
            </Text>
            <HStack>
            <Link href="/register" w="full">
              <Button colorScheme="brand">{t('getstartedfree')} </Button>
            </Link>
            <Link href="/contactus" w="full">
              <Button colorScheme="cyan">{t('contactsalesexpert')}</Button>
            </Link>
            
            </HStack>
          </VStack>
          <VStack pt={["12", "12", "0"]} alignItems="flex-start">
            <Link href="/register" w="full">
              <Button colorScheme="brand">{t('addvirutalnetwork')}</Button>
            </Link>
            <Box
              mt="2"
              py="4"
              px="6"
              width={["full", "sm"]}
              boxShadow="md"
              border="1px"
              borderRadius="sm"
              borderColor="gray.100"
              zIndex="1"
              pos="relative"
              backgroundColor="white"
            >
              <FormControl>
                <FormLabel>{t('name')}</FormLabel>
                <Input type="text" defaultValue="My Omni Network" />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>{t('subnet')}</FormLabel>
                <Input type="text" defaultValue="100.100.0.0/24" fontFamily="'Roboto mono'" />
              </FormControl>
              <HStack mt="4" justifyContent="flex-end">
                <Button>{t('cancel')}</Button>
                <Link href="/login" w="full">
                  <Button colorScheme="brand">{t('create')}</Button>
                </Link>
              </HStack>
            </Box>
          </VStack>
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
      <Download_feature />
      <br></br>
      <HighFeatures />
      <Compare />
      <How />
      
      <FeaturePage />
      <Featureslist />
      {/* <Users /> */}
    
      <Customersmap />
    
    </>
  );
};

Home.layout = DefaultLayout;

export default Home;
