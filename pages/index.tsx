import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import DefaultLayout from "../components/layout/Default";
import { Page } from "../types";
import {Customersmap} from "../components/Customersmap"
import {FeaturePage,How,Heros,Users, Whyus, Compare} from "../components/Features";
import CookieConsent from "react-cookie-consent";
const Home: Page = (props) => {
  return (<>
      <Box padding="4" as="header" py={["6", "12", "36"]} position="relative">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
        >
          <VStack alignItems="flex-start">
            <Heading as="h6" fontWeight="medium" size="sm" color="gray.500">
            MADE COMMUNICATION EASY AND SAFE
            </Heading>
            <Heading maxW="xl" as="h1" size="xl" lineHeight="1.5em">
            Bring intranet on the internet.
            {/* With P2P Secure Connection, Any Time, Any Where. */}
            </Heading>
            <Text maxW="2xl" color="gray.700" py="4">
              {`Omniedge's distrubuted VPN solutions is not only a great and affordable network solution for small team,
              but also for big companies with thousands of devices all around the world.`}
            </Text>
            <Link href="/register" w="full">
            <Button colorScheme="brand">Get Started</Button>
            </Link>
          </VStack>
          <VStack pt={["12", "12", "0"]} alignItems="flex-start" pointerEvents="none" >
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
                <Link href="/register" w="full">
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
      <Compare />
      <How />
      <FeaturePage />
      <Users />
      <Heros />
      <Customersmap />
      <CookieConsent
  location="bottom"
  buttonText="I Agree"
  cookieName="OmniEdge"
  style={{ background: "#4859ED" }}
  buttonStyle={{ color: "#4859ED", fontSize: "13px" }}
  expires={150}
  enableDeclineButton
  >
  We use cookies to ensure you get the best experience on our website <Link href="/privacy">Learn more</Link>.{" "}

</CookieConsent>

      
      </>
    
  );
};

Home.layout = DefaultLayout;

export default Home;
