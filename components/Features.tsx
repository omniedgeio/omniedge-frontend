import React from "react";
import {
  chakra,
  Icon,
  Box,
  BoxProps,
  GridItem,
  Button,
  Code,
  Flex,
  FormLabel,
  Heading,
  HStack,
  useColorModeValue,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Page } from "../types";
import { FaAndroid, FaApple, FaLinux, FaWindows } from "react-icons/fa";
import { FiDatabase, FiMonitor, FiServer } from "react-icons/fi";
import Logo from "../components/Logo";

interface StepIconFrameProps {
  icon: JSX.Element;
}

interface StepProps {
  step: number;
  title: string;
}

const StepIconFrame: React.FC<BoxProps & StepIconFrameProps> = ({ icon, ...props }) => {
  return (
    <Box backgroundColor="brand.50" color="brand.500" p="3" borderRadius="md" fontSize={["xl", "2xl"]} {...props}>
      {icon}
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
export const Whyus =(props) => {
  return (
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
  );
};
export const How = (props) => {
  return (
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
);
};      
export const Feature = (props) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          // bg={useColorModeValue("brand.500")}
          color="white"
        >
          <Icon
            boxSize={6}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

export const FeaturePage: Page = () => {
  return (
    <Flex
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={30}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg={useColorModeValue("white", "gray.800")} rounded="xl">
        <Box mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              color={useColorModeValue("brand.600")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              OMNIEDGE
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue("gray.900")}
            >
              Makes secure connectivity from weeks to minutes 
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color={useColorModeValue("gray.500", "gray.400")}
            >
              OmniEdge reduces the enterprise connectivity deployment from weeks to minutes, helps customers focusing on their core business, connect and mangage their devices from anywhere, anytime.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Cross Platforms"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                Users can run the product on different devices, whether the devices are on Windows, Android, iOS, macOS, Linux or routers, or on a variety of different public clouds.
              </Feature>

              <Feature
                title=" Management on one dashboard"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
               Users can manage all registered devices on one dashboard, no matter where they are located, with an end-to-end private encrypted network, allowing users to access to their own devices.
              </Feature>

              <Feature
                title="Faster Speed, Low Lantency"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
             End-to-end direct connection, compared to traditional VPN networks, can improve response by 50%.
              </Feature>

              <Feature
                title="High Security"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                P2P MESH networks, where packets interact directly between devices, use enterprise G-Suite and other authentication to achieve dual security confirmation of devices and users.
              </Feature>
              <Feature
                title="Painless Setup"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                Set up OmniEdge just in minutes with our apps on any devices, you can chosse several different method to activate your devices. 
              </Feature>
              <Feature
                title="Maintenanceless "
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                Forget about the labor intensive of the system management job, with OMNIEDGE you can focus on your own core business. 
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

const Featureheros = (props) => (
  <Flex alignItems="center" color={useColorModeValue(null, "white")}>
    <Icon
      boxSize={4}
      mr={1}
      color="green.600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </Icon>
    {props.children}
  </Flex>
);
export function Heros(){
  return (
    <Box px={4} py={32} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "center" }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("gray.900", "gray.100")}
          lineHeight="shorter"
        >
          A secure, zero-config way to connect.
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        >
          We’re on a mission to provide a reliable, secure and painless connectivity solutions for anyone who wants to have have access to their devices, anywhere, anytime.
        </chakra.p>
      
          <Button
            as={GridItem}
            w="30%"
            variant="solid"
            colSpan={{ base: "auto", lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="brand"
            cursor="pointer"
          >
            Get Started
          </Button>
        <Stack
          display="flex"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "start", md: "center" }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="xs"
          color="gray.600"
        >
          <Featureheros>No credit card required</Featureheros>
          <Featureheros>Start from free</Featureheros>
          <Featureheros>Cancel anytime</Featureheros>
          
        </Stack>
      </Box>
    </Box>
  );
};
const Featureusers = (props) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue("brand.500", "brand.300")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="bold"
          lineHeight="6"
          color={useColorModeValue("gray.900")}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

export function Users() {
  return (
    <Flex
      // bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        // shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2
              color={useColorModeValue("brand.500")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Who is happy with OmniEdge
            </chakra.h2>
            <chakra.h2
              mb={3}
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("black")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              We build for you.
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Omniedge creates a hight reliable connective system and make it universally compatible for anyone, any team who need connect their devices anywhere anytime.
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Featureusers title="Industrial 4.0">
                Industrial 4.0 suppliers, Machine Vendors, Factories can simply the deployment of the M2M connectivity. 
                OmniEdge is lightweight and compatible with most of industrial gateways.{" "}
              </Featureusers>
              <Featureusers title="Banks">
                Secure the legacy apps, services from outside to inside the banks, setup the network between banks
                without any pain, zero-config system with low maintennace cost.No matter how complexity the old network
                is, OmniEdge will connect with in a minutes. 
              </Featureusers>
              <Featureusers title="Hospitals">
                {" "}
                Connect all the computers across different network in different department within a single click installation.
                Secure exchanging the patients data only in a hospital private network in a peer-to-peer tunnel, protect the 
                privacy.
              </Featureusers>
              <Featureusers title="Transportation">
                {" "}
                Connect your AGVs no matter it is a linux-based or windows-based.Privde remote suppor, remote upgrade and data
                streaming with fast and low Lantency omniedge peer-to-peer work. {" "}
              </Featureusers>
              <Featureusers title="Enterprise">
                {" "}
                Simplify the enterprise level VPN setup from weeks to minutes, from complexity config to zero config, from high cost of 
                maintennace to low cost. Connect differenct branches devices in just a click, exchange big data securely, provate the communication 
                for travelling employees to access internal resources. 
              </Featureusers>
              <Featureusers title="Startups, Geeks.">
                {" "}
                Access your NAS, Raspberry Pi, Cloud intances or your friends' devices by sharing your network with them. Access all the devices data,
                Play LAN games, monitor your home cameras and more. {" "}
              </Featureusers>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}