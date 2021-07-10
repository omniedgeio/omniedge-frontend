import {
  Box,
  BoxProps,
  Button,
  Code,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaAndroid, FaApple, FaLinux, FaWindows } from "react-icons/fa";
import { FiDatabase, FiMonitor, FiServer } from "react-icons/fi";
import DefaultLayout from "../components/layout/Default";
import Logo from "../components/Logo";
import { Page } from "../types";

interface StepProps {
  step: number;
  title: string;
}
interface StepIconFrameProps {
  icon: JSX.Element;
}

const StepIconFrame: React.FC<BoxProps & StepIconFrameProps> = ({ icon, ...props }) => {
  return (
    <Box backgroundColor="brand.50" color="brand.500" p="3" borderRadius="md" fontSize={["xl", "2xl"]} {...props}>
      {icon}
    </Box>
  );
};

const StepVirtualNetwork: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box pt="3" {...props}>
      <Box pos="relative" borderRadius="md" borderColor="brand.50" borderWidth="2px" borderStyle="solid" p="2">
        <Text
          fontSize="xs"
          display="inline-block"
          backgroundColor="brand.50"
          color="brand.500"
          px="2"
          py="0.5"
          pos="absolute"
          top="-3"
          borderRadius="sm"
        >
          Virtual Network
        </Text>
        <Box mt="2">{children}</Box>
      </Box>
    </Box>
  );
};

const Step: React.FC<StepProps> = ({ step, title, children }) => {
  return (
    <VStack alignItems="flex-start">
      <HStack>
        <Text
          backgroundColor="brand.500"
          h={["8", "10"]}
          w={["8", "10"]}
          mr="2"
          fontSize={["sm", "md"]}
          lineHeight={["2rem", "2.5rem"]}
          borderRadius="md"
          color="white"
          textAlign="center"
        >
          {step}
        </Text>
        <Text fontWeight="semibold">{title}</Text>
      </HStack>
      {children}
    </VStack>
  );
};

const Home: Page = (props) => {
  return (
    <VStack spacing={["8", "12"]} alignItems="stretch">
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
      <VStack spacing="4" alignItems="center">
        <Heading as="h2">How Omniedge works?</Heading>
        <Text textAlign="center">
          We made VPN easier to setup and so you can connect without <br /> concern at any where and anytime.
        </Text>
        <Stack spacing="8" direction={["column", "row"]} alignItems="flex-start">
          <VStack maxW="md" spacing="4">
            <Heading fontWeight="semibold" size="md">
              What we do for you?
            </Heading>
            <VStack
              p="4"
              borderRadius="md"
              border="1px"
              borderColor="gray.200"
              backgroundColor="white"
              alignItems="stretch"
              spacing="6"
            >
              <Step step={1} title="Connect to omniedge service">
                <HStack w="full" alignItems="center">
                  <StepIconFrame icon={<FiMonitor />} />
                  <Box w="full" textAlign="center">
                    <Text>Exchange Peer Information</Text>
                    <Skeleton mx="2" h="0.5" startColor="brand.500" endColor="teal.500"></Skeleton>
                    <Text>&nbsp;</Text>
                  </Box>
                  <Logo h="12" />
                </HStack>
              </Step>
              <Step step={2} title="Join a virtual network">
                <HStack alignItems="center">
                  <StepIconFrame icon={<FiMonitor />} />
                  <Box w={["36", "48"]} textAlign="center">
                    <Text>Assigning IP</Text>
                    <Skeleton mx="2" my="1" h="0.5" startColor="brand.500" endColor="teal.500"></Skeleton>
                    <Code backgroundColor="white">100.100.1.111</Code>
                  </Box>
                  <StepVirtualNetwork>
                    <SimpleGrid spacing="2" columns={3}>
                      <StepIconFrame p={["1.5", "3"]} icon={<FiMonitor />}></StepIconFrame>
                      <StepIconFrame p={["1.5", "3"]} icon={<FiServer />}></StepIconFrame>
                      <StepIconFrame p={["1.5", "3"]} icon={<FiMonitor />}></StepIconFrame>
                      <StepIconFrame p={["1.5", "3"]} icon={<FiDatabase />}></StepIconFrame>
                      <StepIconFrame p={["1.5", "3"]} icon={<FiMonitor />}></StepIconFrame>
                      <StepIconFrame p={["1.5", "3"]} icon={<FiDatabase />}></StepIconFrame>
                    </SimpleGrid>
                  </StepVirtualNetwork>
                </HStack>
              </Step>
              <Step step={3} title="Initialize Connection">
                <StepVirtualNetwork w="full">
                  <HStack>
                    <StepIconFrame icon={<FiMonitor />} />
                    <Box w="full" textAlign="center">
                      <Text>Exchange Peer Information</Text>
                      <Skeleton mx="2" h="0.5" startColor="brand.500" endColor="teal.500"></Skeleton>
                      <Text>&nbsp;</Text>
                    </Box>
                    <StepIconFrame icon={<FiServer />} />
                  </HStack>
                </StepVirtualNetwork>
              </Step>
            </VStack>
          </VStack>

          <VStack maxW="md" spacing="4">
            <Heading fontWeight="semibold" size="md">
              Try it now
            </Heading>
            <VStack
              p="4"
              borderRadius="md"
              border="1px"
              borderColor="gray.200"
              backgroundColor="white"
              alignItems="stretch"
              spacing="6"
            >
              <Step step={1} title="Download Omniedge">
                <Text>We currently support various platforms. You can download them here.</Text>
                <HStack spacing="4" color="gray.500">
                  <HStack>
                    <FaLinux />
                    <Text>Linux</Text>
                  </HStack>
                  <HStack>
                    <FaWindows />
                    <Text>Windows</Text>
                  </HStack>
                  <HStack>
                    <FaApple />
                    <Text>Mac</Text>
                  </HStack>
                  <HStack>
                    <FaAndroid />
                    <Text>Android</Text>
                  </HStack>
                </HStack>
              </Step>
              <Step step={2} title="Login to omniedge.io">
                <Text>We support email login and Google login</Text>
              </Step>
              <Step step={3} title="Create a virtual network">
                <Text>
                  We already created a default virtual network for you. However, you can create your own virtual network
                  in just a minute.
                </Text>
              </Step>
              <Step step={4} title="Connect in one click">
                <Text>Click connect button on our client application</Text>
              </Step>
            </VStack>
          </VStack>
        </Stack>
      </VStack>
      <Box as="section" textAlign="center" py="16">
        <Heading mb="8">Why choose us?</Heading>
        <SimpleGrid columns={[1, 3]} spacing={["4", "8", "24"]}>
          <VStack justifyContent="center">
            <Box
              h="24"
              w="full"
              backgroundImage="url('/icons/lightning.png')"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              backgroundPosition="center"
            ></Box>
            <Heading size="md">Low Latency</Heading>
            <Text>
              Fast Connection: With the technology of peer-to-peer connection, your will have low latency and private
              network for your own.
            </Text>
          </VStack>

          <VStack justifyContent="center">
            <Box
              h="24"
              w="full"
              backgroundImage="url('/icons/lock.png')"
              backgroundRepeat="no-repeat"
              backgroundSize="contain"
              backgroundPosition="center"
            ></Box>
            <Heading size="md">Security First</Heading>
            <Text>Every packet transfered is encrypted on the device itself.</Text>
          </VStack>
          <VStack justifyContent="center">
            <Box
              h="24"
              w="full"
              backgroundImage="url('/icons/connect.png')"
              backgroundRepeat="no-repeat"
              backgroundSize="30%"
              backgroundPosition="center"
            ></Box>
            <Heading size="md">Painless Setup</Heading>
            <Text>Setup Omniedge just in minutes with our apps on various platforms.</Text>
          </VStack>
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

Home.layout = DefaultLayout;

export default Home;
