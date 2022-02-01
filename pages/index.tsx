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
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import { Customersmap } from "../components/Customersmap";
import { Compare, FeaturePage, Featureslist, Heros, HighFeatures, How, Users } from "../components/Features";
import DefaultLayout from "../components/layout/Default";
import { Seo } from "../components/Seo";
import { Page } from "../types";

const Home: Page = (props) => {
  return (
    <>
      <Seo
        title="The Power of OmniEdge,High Seurity, High Speed, and High Performance."
        description="OmniEdge reduces the enterprise connectivity deployment from weeks to minutes, helps customers focusing on their core business, connects and manages their devices from anywhere, anytime."
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
              Bring intranet on the internet.
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
            Unlimited Computers
          </Text>{" "}
          </chakra.h1>
          <Text>
          In Private Network With <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, purple.500,brand.500)"
            fontWeight="extrabold"
          >Zero</Text> Config.
        </Text>
            </Heading>
            <Text maxW="2xl" color="gray.700" py="4">
              {`Omniedge's Peer-to-Peer Layer 2 VPN solutions are not only a great and affordable network solution for a small team but also for big companies with thousands of computers all around the world.`}
            </Text>
            <HStack>
            <Link href="/register" w="full">
              <Button colorScheme="brand">Get Started Free </Button>
            </Link>
            <Link href="/contactus" w="full">
              <Button colorScheme="cyan">Contact Sales Expert </Button>
            </Link>
            
            </HStack>
          </VStack>
          <VStack pt={["12", "12", "0"]} alignItems="flex-start">
            <Link href="/register" w="full">
              <Button colorScheme="brand">+ Virtual Network</Button>
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
                <FormLabel>Name</FormLabel>
                <Input type="text" defaultValue="My Omni Network" />
              </FormControl>
              <FormControl mt="4">
                <FormLabel>Subnet</FormLabel>
                <Input type="text" defaultValue="100.100.0.0/24" fontFamily="'Roboto mono'" />
              </FormControl>
              <HStack mt="4" justifyContent="flex-end">
                <Button>Cancel</Button>
                <Link href="/login" w="full">
                  <Button colorScheme="brand">Create</Button>
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
      <HighFeatures />
      <Compare />
      <How />
      <FeaturePage />
      <Featureslist />
      <Users />
      <Heros />
      <Customersmap />
      
      {/* <CookieConsent
        location="bottom"
        buttonText="I Agree"
        cookieName="OmniEdge"
        style={{ background: "#4859ED" }}
        buttonStyle={{ color: "#4859ED", fontSize: "13px" }}
        expires={150}
        enableDeclineButton
      >
        We use cookies to ensure you get the best experience on our website <Link href="/privacy">Learn more</Link>.{" "}
      </CookieConsent> */}
    
    </>
  );
};

Home.layout = DefaultLayout;

export default Home;
