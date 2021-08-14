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
} from "@chakra-ui/react";
import React from "react";
import DefaultLayout from "../components/layout/Default";
import { Page } from "../types";
import {FeaturePage,How,Heros,Users, Whyus} from "../components/Features";

const Home: Page = (props) => {
  return (
    <>
      <Box as="header" py={["6", "12", "36"]} position="relative">
        <Stack
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
        >
          <VStack alignItems="flex-start">
            <Heading as="h6" fontWeight="medium" size="sm" color="gray.500">
              MADE VPN EASY
            </Heading>
            <Heading maxW="xl" as="h1" size="xl" lineHeight="1.5em">
              Connect all devices without concern at any platform, any time and any where.
            </Heading>
            <Text maxW="2xl" color="gray.700" py="4">
              {`Omniedge's distrubuted VPN solutions is not only a great and affordable network solution for small team,
              but also for big companies with thousands of devices all around the world.`}
            </Text>
            <Button colorScheme="brand">Get Started</Button>
          </VStack>
          <VStack pt={["12", "12", "0"]} alignItems="flex-start" pointerEvents="none">
            <Button colorScheme="brand">+ Virtual Network</Button>
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
                <Button colorScheme="brand">Create</Button>
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
      <How />
      <FeaturePage />
      <Users />
      <Whyus />
      <Heros />
      </>
    
  );
};

Home.layout = DefaultLayout;

export default Home;
