import {
  Box,
  BoxProps,
  Button,
  Center,
  chakra,
  Code,
  Flex,
  GridItem,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Skeleton,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillRobot, AiOutlineControl, AiOutlineSafety, AiTwotoneApi } from "react-icons/ai";
import { BiCheckShield, BiTransfer } from "react-icons/bi";
import { FaAndroid, FaApple, FaBuilding, FaConnectdevelop, FaLinux, FaRocket, FaWindows,FaMobile } from "react-icons/fa";
import { FiDatabase, FiGlobe, FiKey, FiMonitor, FiServer, FiSettings, FiUsers } from "react-icons/fi";
import {
  GiAutoRepair,
  GiBank,
  GiCargoCrate,
  GiClick,
  GiFactory,
  GiHospital,
  GiMissileLauncher,
  GiPeanut,
  GiTreeGrowth,
} from "react-icons/gi";
import { MdEnhancedEncryption, MdRouter } from "react-icons/md";
import Logo from "../components/Logo";
import { Page } from "../types";
import {Download_feature} from "../pages/download/download_feature";
import {useTranslation} from "react-i18next";
import {availableLanguages} from "../i18n/i18n";

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
export function Whyus() {
  return (
    <Box padding="4" as="section" textAlign="center" py="16">
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
}

export function How() {
  const {t, i18n} = useTranslation('features')
  return (
    <VStack padding="4" spacing="4" alignItems="center">
      <Heading as="h2">{t('how')}</Heading>
      <Text textAlign="center">
      {t('how-desc')} <br />{t('how-desc-1')}
      </Text>
      <Stack spacing="8" direction={["column", "row"]} alignItems="flex-start">
        <VStack maxW="md" spacing="4">
          <Heading fontWeight="semibold" size="md">
          {t('what')}
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
            <Step step={1} title={t('connect')}>
              <HStack w="full" alignItems="center">
                <StepIconFrame icon={<FiMonitor />} />
                <Box w="full" textAlign="center">
                  <Text>{t('exchange')}</Text>
                  <Skeleton mx="2" h="0.5" startColor="brand.500" endColor="teal.500"></Skeleton>
                  <Text>&nbsp;</Text>
                </Box>
                <Logo h="12" />
              </HStack>
            </Step>
            <Step step={2} title={t('join')}>
              <HStack alignItems="center">
                <StepIconFrame icon={<FiMonitor />} />
                <Box w={["36", "48"]} textAlign="center">
                  <Text>{t('assigning')}</Text>
                  <Skeleton mx="2" my="1" h="0.5" startColor="brand.500" endColor="teal.500"></Skeleton>
                  <Code backgroundColor="white">10.100.1.111</Code>
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
            <Step step={3} title={t('init')}>
              <StepVirtualNetwork w="full">
                <HStack>
                  <StepIconFrame icon={<FiMonitor />} />
                  <Box w="full" textAlign="center">
                    <Text>{t('exchange')}</Text>
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
          {t('try')}
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
            <Step step={1} title={t('download')}>
              <Text>{t('download-desc')}</Text>
              <HStack spacing="4" color="gray.500">
                <HStack>
                  <FaWindows />
                  <Link href="/download/windows" w="full">
                    <Text>Windows</Text>
                  </Link>
                </HStack>
                <HStack>
                  <FaApple />
                  <Link href="/download/macos" w="full">
                    <Text>Mac</Text>
                  </Link>
                </HStack>
                <HStack>
                  <FaLinux />
                  <Link href="/download/linuxcli">
                    <Text>Linux</Text>
                  </Link>
                </HStack>
                <HStack>
                  <FaMobile />
                  <Link href="/download" w="full">
                    <Text>Mobile</Text>
                  </Link>
                </HStack>
              </HStack>
            </Step>
            <Step step={2} title={t('login')}>
              <Text>
              {t('login-desc-1')} <Link href="/login">{t('login-desc-2')}</Link>
              </Text>
            </Step>
            <Step step={3} title={t('create')}>
              <Text>
              {t('create-desc')}
              </Text>
            </Step>
            <Step step={4} title={t('connectin')}>
              <Text>{t('connectin-desc')}</Text>
            </Step>
          </VStack>
        </VStack>
      </Stack>
    </VStack>
  );
}

export const Feature = (props: any) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex alignItems="center" justifyContent="center" h={12} w={12} rounded="md" color="brand.500">
          <Icon boxSize={14} fill="none" viewBox="0 0 24 24" aria-hidden="true">
            {props.icon}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt fontSize="lg" fontWeight="medium" lineHeight="6" color="gray.900">
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

const Featurelist = (props: any) => {
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        w={16}
        h={16}
        mb={4}
        rounded="full"
        // color={useColorModeValue(`${props.color}.600`, `${props.color}.100`)}
        // bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
      >
        <Icon boxSize={16}  fill="none" viewBox="0 0 48 48" aria-hidden="true">
          {props.icon}
        </Icon>
      </Flex>
      <chakra.h3 mb={2} fontWeight="semibold" lineHeight="shorter">
        {props.title}
      </chakra.h3>
      <chakra.p fontSize="sm" color={useColorModeValue("gray.500", "gray.400")}>
        {props.children}
      </chakra.p>
    </Box>
  );
};

export const FeaturePage: Page = () => {
  const {t, i18n} = useTranslation('features')
  return (

      <VStack padding="4" spacing="4" alignItems="center">
          <Button backgroundColor="#E3E6FC" borderRadius="28px"> <Text color="brand.500" >{t('FeaturePage-title')}</Text> </Button>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color="gray.900"
          >
             {t('FeaturePage-subtitle')}{" "}
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            {t('FeaturePage-desc')}
          </chakra.p>


    <Box maxW="826px" py={12} rounded="xl" alignItems="center" justifyContent="center">

        <Box mt={10}>
          <Stack
            spacing={{ base: 10, md: 0 }}
            display={{ md: "grid" }}
            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
            gridColumnGap={{ md: 8 }}
            gridRowGap={{ md: 10 }}
          >
            <Feature title={t('crossplatform')} icon={<svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 29.778H8.368C5.956 29.778 4 27.822 4 25.41V10.368C4 7.956 5.956 6 8.368 6H29.634C32.044 6 34 7.956 34 10.368V20" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.4004 29.78L23.1804 36" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.1804 29.78L15.4004 36" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.2803 36H25.2803" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34 20H40C42.21 20 44 21.79 44 24V38C44 40.21 42.21 42 40 42H34C31.79 42 30 40.21 30 38V24C30 21.79 31.79 20 34 20Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M35.5 37.5H38.5" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
              {t('crossplatform-desc')}
            </Feature>
                     <Feature title={t('maintenanceless')} icon={<svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.6699 30L33.6699 40C35.3259 41.656 38.0139 41.656 39.6699 40C41.3259 38.344 41.3259 35.656 39.6699 34L29.6699 24" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M41.8318 11.694C41.8798 11.74 41.9158 11.8 41.9338 11.864C42.8738 14.998 42.1458 18.524 39.6698 21C37.1678 23.502 33.5938 24.218 30.4358 23.234L13.7418 39.928C12.1158 41.554 9.46383 41.676 7.78183 40.108C6.01383 38.462 5.97783 35.694 7.66983 34L24.4358 17.234C23.4518 14.076 24.1678 10.502 26.6698 8C29.1458 5.524 32.6718 4.796 35.8058 5.736C35.8698 5.756 35.9298 5.79 35.9758 5.838L36.2998 6.162C36.4558 6.318 36.4558 6.572 36.2998 6.728L31.0298 12L35.6698 16.64L40.9418 11.368C41.0978 11.212 41.3518 11.212 41.5078 11.368L41.8318 11.694V11.694Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.86584 8.58599L7.21384 12.632C7.48584 13.45 8.24984 14 9.11184 14H13.6698V9.44199C13.6698 8.58199 13.1198 7.81599 12.3018 7.54399L8.25584 6.19599C7.89584 6.07599 7.49984 6.16999 7.23184 6.43799L6.10784 7.56199C5.83984 7.82999 5.74584 8.22599 5.86584 8.58599V8.58599Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.6797 14L20.6797 21" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
            {t('maintenanceless-desc')} 
            </Feature>
            
            <Feature title={t('speed')}icon={<svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.8802 22.12L11.7402 36.26" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.2659 25.998L6.33991 24.362C5.57791 24.182 5.30991 23.236 5.86191 22.682L11.3699 17.174C11.7399 16.804 12.2419 16.592 12.7679 16.588L18.9779 16.534" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M39.7581 17.95L41.3741 10.174C41.8141 8.058 39.9421 6.186 37.8261 6.626L30.0501 8.242C27.7601 8.718 25.6601 9.852 24.0081 11.506L17.6281 17.884C15.1941 20.318 13.6101 23.474 13.1101 26.88L13.0881 27.026C12.7721 29.2 13.5001 31.394 15.0521 32.948C16.6041 34.5 18.8001 35.228 20.9741 34.91L21.1201 34.888C24.5261 34.39 27.6821 32.804 30.1161 30.37L36.4941 23.992C38.1481 22.34 39.2821 20.24 39.7581 17.95V17.95Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.7998 9.42799C31.4218 12.58 35.4198 16.578 38.5718 21.2" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 34.734L23.636 41.66C23.816 42.422 24.762 42.69 25.316 42.138L30.824 36.63C31.194 36.26 31.406 35.758 31.41 35.232L31.464 29.022" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
            {t('speed-desc')}
            </Feature>
            <Feature title={t('security')} icon={<svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40 26C40 34.836 32.836 42 24 42C15.164 42 8 34.836 8 26V13.824C8 12.798 8.776 11.922 9.8 11.842C14.718 11.454 19.194 9.49601 22.726 6.46601C23.45 5.84601 24.552 5.84601 25.274 6.46601C28.806 9.49601 33.282 11.456 38.2 11.842C39.224 11.922 40 12.798 40 13.824V26Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.6383 20.682L22.3423 28.978L17.3643 24" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
            {t('security-desc')}
              
            </Feature>
            <Feature title={t('setup')} icon={<svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 6H38.572C40.464 6 42 7.536 42 9.428V16" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 42H9.428C7.536 42 6 40.464 6 38.572V30" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.324 8.07C5.886 8.402 4 10.47 4 13C4 15.76 6.24 18 9 18H19.998C22.208 18 23.998 16.21 23.998 14C23.998 11.79 22.208 10 19.998 10C19.998 6.686 17.312 4 13.998 4C11.364 4 9.128 5.704 8.324 8.07V8.07Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M38.854 31.392V27.926C38.854 25.758 37.096 24 34.928 24C32.76 24 31.002 25.758 31.002 27.926V31.392" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M39.4284 31.396H30.4284C29.0084 31.396 27.8564 32.548 27.8564 33.968V39.43C27.8564 40.848 29.0084 42 30.4284 42H39.4284C40.8484 42 42.0004 40.848 42.0004 39.428V33.966C41.9984 32.548 40.8464 31.396 39.4284 31.396V31.396Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
            {t('setup-desc')}
            </Feature>
   <Feature title={t('dashboard')} icon={<svg width="26" height="26" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 29.778H8.368C5.956 29.778 4 27.822 4 25.41V10.368C4 7.956 5.956 6 8.368 6H29.634C32.044 6 34 7.956 34 10.368V20" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.4004 29.78L23.1804 36" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.1804 29.78L15.4004 36" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.2803 36H25.2803" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34 20H40C42.21 20 44 21.79 44 24V38C44 40.21 42.21 42 40 42H34C31.79 42 30 40.21 30 38V24C30 21.79 31.79 20 34 20Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M35.5 37.5H38.5" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>}>
            {t('dashboard-desc')}
            </Feature>
          </Stack>
        </Box>

      </Box>
      </VStack>
  );
};

export const Featureheros = (props: any) => (
  <Flex alignItems="center" bg="white" textAlign={{ base: "center", md: "center" }}>
    <Icon boxSize={4} mr={1} color="green.600" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </Icon>
    {props.children}
  </Flex>
);
export function HerosV1() {
  return (
    <Box padding="4" textAlign={{ base: "center", md: "center" }}>
      <chakra.h1
        mb={3}
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight={{ base: "bold", md: "extrabold" }}
        color={useColorModeValue("gray.900", "gray.100")}
        lineHeight="shorter"
      >
        A secure, zero-config way to connect.
      </chakra.h1>
      <chakra.p mb={6} fontSize={{ base: "lg", md: "xl" }} color="gray.500" lineHeight="base">
        We’re on a mission to provide reliable, secure, and painless connectivity solutions for anyone who wants to have
        access to their devices, anywhere, anytime.
      </chakra.p>
      <Link href="/register" w="full" mb={6}>
        <Button w="50%" colorScheme="brand">
          Get Started
        </Button>
      </Link>
      <Stack
        display="flex"
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "start", md: "center" }}
        mb={6}
        spacing={{ base: 2, md: 8 }}
        fontSize="xs"
        color="gray.600"
        alignItems={{ base: "center", md: "left" }}
      >
        <Featureheros>No credit card required</Featureheros>
        <Featureheros>Start from free</Featureheros>
        <Featureheros>Cancel anytime</Featureheros>
      </Stack>
    </Box>
  );
}

export function Heros() {
  const {t, i18n} = useTranslation('features')
  return (
    <Box px={8} py={24} mx="auto">
      <Box w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto" textAlign={{ base: "left", md: "center" }}>
        <chakra.h1
          mb={6}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          {t('herotitle-1')}{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, brand.500,purple.500)"
            fontWeight="extrabold"
          >
            {t('herotitle-2')}
            
          </Text>{" "}
          {t('herotitle-3')}
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          {t('herosubtitle')}
        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <Link href="/register">
            <Button
              as="a"
              variant="solid"
              colorScheme="brand"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              w={{ base: "full", sm: "auto" }}
              mb={{ base: 2, sm: 0 }}
              size="lg"
              cursor="pointer"
            >
              {t('getstarted')}
              <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </Icon>
            </Button>
          </Link>
          
        </Stack>
      </Box>
      
    </Box>
  );
}

const Featureusers = (props: any) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex alignItems="center" justifyContent="center" h={12} w={12} rounded="md" color="brand.500">
          <Icon boxSize={10} fill="none" viewBox="0 0 32 32" stroke="currentColor" aria-hidden="true">
            {props.icon}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt fontSize="lg" fontWeight="bold" lineHeight="6" color="gray.900">
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
    <Box padding="4" bg={useColorModeValue("white", "gray.800")} mx="auto">
      <SimpleGrid
        // alignItems="center"
        columns={{ base: 1, lg: 3 }}
      >
        <Box alignSelf="start">
          <chakra.h2 color="brand.500" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide">
            OmniEdge in the enterprise
          </chakra.h2>
          <chakra.h2
            mb={3}
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="extrabold"
            color="black"
            lineHeight="shorter"
            letterSpacing="tight"
          >
            We build for you.
          </chakra.h2>
          <chakra.p mb={6} fontSize={{ base: "lg", md: "xl" }} color={useColorModeValue("gray.600", "gray.500")}>
            High security, High, speed, High performance, for everyone, everywhere.
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
            <Featureusers title="Manufacturers" icon={<GiFactory size="2lg" />}>
              Industry 4.0 suppliers, Machine vendors, Simplification of M2M connectivity. OmniEdge is lightweight and
              compatible with most industrial gateways.{" "}
            </Featureusers>
            <Featureusers title="Banks" icon={<GiBank size="2lg" />}>
              Security for existing apps, Remote employee access to internal networks Pain free network set up
              connecting local branches with a single click. No matter how complex the old network is, OmniEdge will
              connect your devices in a few minutes.
            </Featureusers>
            <Featureusers title="Hospitals" icon={<GiHospital size="2lg" />}>
              {" "}
              Pain free network set up connecting sites, departments and equipment with a single click. Secure patient
              data exchange across both the hospital private network and remote connections using a peer-to-peer tunnel
            </Featureusers>
            <Featureusers title="Freight industry" icon={<GiCargoCrate size="2lg" />}>
              {" "}
              Connect AGVs and AMR’s from multiple suppliers including Linux-or windows-based OS Remote support
              capabilities Remote software upgrades Data streaming with fast and low latency peer-to-peer work.{" "}
            </Featureusers>
            <Featureusers title="Enterprise" icon={<FaBuilding size="2lg" />}>
              {" "}
              Reduce the enterprise-level VPN setup from weeks to minutes, Minimize setup time, resources, costs and
              maintenance Connect different sites and devices with just a click.
            </Featureusers>
            <Featureusers title="Startups, Geeks." icon={<GiMissileLauncher size="2lg" />}>
              {" "}
              Access your NAS, Raspberry Pi, Cloud instances, Securely share your network with friends&apos;s devices.
              Access all the device&apos;s data remotely, Play LAN games, monitor your home cameras, and more.{" "}
            </Featureusers>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}

export function Compare() {
  const {t, i18n} = useTranslation('features')
  return (
    <>
      <VStack maxW={{md: "1264px" }} padding="2" spacing="4" alignItems="center" paddingTop="20">
        <chakra.h2
            color="#0F172A"
            mt={2}
            fontSize={{ base: "24px", sm: "24px" }}
            lineHeight="32px"
            fontWeight="700"
            letterSpacing="tight"
          >
            {t('comparetitle')}
          
        </chakra.h2>
        <Text 
        maxW={{md: "599px" }}
        fontSize="14px"
        line-height="20px"
        textAlign="center">{t('comparedesc')}{" "}</Text>
        <Image maxW={{md: "800px" }} src="/assets/OmniEdgeComparison.gif" alt="OmniEdge " />
      </VStack>
    </>
  );
}

export function Featureslist() {
  const {t, i18n} = useTranslation('features')
  return (
    <Flex justifyContent="center" alignItems="center" >
      <Box px={4} py={20}>
        <Box textAlign={{ lg: "center" }} paddingBottom="30px">
          <chakra.p
            mt={2}
            fontSize={{ base: "2xl", sm: "3xl" }}
            lineHeight="32px"
            fontWeight="700"
            letterSpacing="tight"
          >
            {t('featureslisttitle')}
            
          </chakra.p>
        </Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacingX={{ base: 16, lg: 24 }} spacingY={20} mt={6}>
          <Featurelist color="red" title={t('flvn')} icon={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="48" height="48" rx="24" fill="#EDE9FE"/>
<path d="M13.6826 27.0414H13.76C17.5373 27.0414 20.0559 26.8254 20.0559 23.264C20.0559 19.4867 23.8333 19.4867 23.8333 16.968C23.8333 14.152 18.796 14.4494 18.796 11.9307V11.84" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M35.1666 22H31.0759C28.2693 22 26.7799 18.684 28.6439 16.5854L31.3519 13.5374" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.8337 26.6653C27.6243 26.6653 25.8337 28.456 25.8337 30.6653C24.3603 30.6653 23.167 31.8587 23.167 33.332C23.167 34.8053 24.3603 35.9987 25.8337 35.9987H33.167C35.0083 35.9987 36.5003 34.5053 36.5003 32.6653C36.5003 30.9787 35.243 29.5987 33.6177 29.3773C33.0817 27.8013 31.591 26.6653 29.8337 26.6653V26.6653Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M35.1667 22C35.1667 15.74 30.0933 10.6667 23.8333 10.6667C17.5733 10.6667 12.5 15.74 12.5 22C12.5 26.1574 14.744 29.78 18.08 31.7534" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flvn-desc')}
          </Featurelist>
<Featurelist color="brand" title={t('flsk')} icon={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" width="48" height="48" rx="24" fill="#EDE9FE"/>
<path d="M28.791 20.456C28.791 20.18 28.567 19.9573 28.291 19.9573C28.015 19.9587 27.791 20.1827 27.791 20.4587C27.791 20.7347 28.015 20.9587 28.291 20.9573C28.567 20.9573 28.791 20.7333 28.791 20.4573" stroke="#4859ED" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25.4157 27.7133L24.0423 29.0893H21.5997V31.048H19.6463V33.496L17.8143 35.3333H13.417V30.9267L21.0477 23.2787C19.973 20.4867 20.549 17.204 22.7957 14.952C25.8357 11.9053 30.765 11.9053 33.805 14.952C36.845 17.9987 36.845 22.9387 33.805 25.9867C31.5357 28.2587 28.2183 28.832 25.4157 27.7133Z" stroke="#4859ED" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flsk-desc')}
          </Featurelist>
          <Featurelist color="purple" title={t('flp2p')} icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#EDE9FE"/>
<path d="M26.0359 22.8333V21.036C26.0359 19.912 25.1239 19 23.9999 19C22.8759 19 21.9639 19.912 21.9639 21.036V22.8333" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.333 22.8347H21.6663C20.9303 22.8347 20.333 23.432 20.333 24.168V27C20.333 27.736 20.9303 28.3333 21.6663 28.3333H26.333C27.069 28.3333 27.6663 27.736 27.6663 27V24.168C27.6663 23.432 27.069 22.8347 26.333 22.8347Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M34.6663 22.9893C34.6663 28.8133 30.457 34.272 24.693 35.904C24.2423 36.032 23.757 36.032 23.3063 35.904C17.5423 34.2733 13.333 28.8133 13.333 22.9893V17.6186C13.333 16.536 13.9877 15.56 14.9903 15.1506L21.4757 12.4973C23.0943 11.8346 24.9077 11.8346 26.525 12.4973L33.0103 15.1506C34.0117 15.56 34.6663 16.536 34.6663 17.6186V22.9893Z" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flp2p-desc')}
          </Featurelist>

          <Featurelist color="pink" title={t('flrm')} icon={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.25" width="48" height="48" rx="24" fill="#EDE9FE"/>
<path d="M30.917 16.028C32.3903 16.028 33.5837 17.2213 33.5837 18.6947" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M32.25 12.028C35.1967 12.028 37.5833 14.4147 37.5833 17.3613" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33.5833 22.6947V29.3613C33.5833 30.8347 32.39 32.028 30.9167 32.028H14.9167C13.4433 32.028 12.25 30.8347 12.25 29.3613V18.6947C12.25 17.2213 13.4433 16.028 14.9167 16.028H26.9167" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.583 36.0267H28.2497" stroke="#4859ED" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flrm-desc')}
          </Featurelist>
<Featurelist color="purple" title={t('flbd')}icon={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="48" height="48" rx="24" fill="#D1FAE5"/>
<path d="M29.833 12H34.2143C35.4757 12 36.4997 13.024 36.4997 14.2853V18.6667" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.1667 36H14.7853C13.524 36 12.5 34.976 12.5 33.7147V26.6667" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33.2264 29.4547H26.4384C24.6304 29.4547 23.165 30.92 23.165 32.728C23.1664 34.5347 24.6317 36 26.4397 36H33.2277C35.0344 36 36.4997 34.5347 36.4997 32.7267C36.4997 30.92 35.0344 29.4547 33.2264 29.4547Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33.2719 32.7267H29.7119" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.5092 32.68C26.5359 32.7067 26.5359 32.748 26.5092 32.7747C26.4825 32.8013 26.4412 32.8013 26.4145 32.7747C26.3879 32.748 26.3879 32.7067 26.4145 32.68C26.4399 32.6547 26.4825 32.6547 26.5092 32.68Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36.4897 32.4627L36.0244 26.4613C35.9164 25.072 34.7577 24 33.3644 24H26.3017C24.9084 24 23.7511 25.072 23.6431 26.46L23.1777 32.4613" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.3827 13.38C13.7573 13.6013 12.5 14.98 12.5 16.6667C12.5 18.508 13.9933 20 15.8333 20H23.1667C24.64 20 25.8333 18.8067 25.8333 17.3333C25.8333 15.86 24.64 14.6667 23.1667 14.6667C23.1667 12.4573 21.376 10.6667 19.1667 10.6667C17.4093 10.6667 15.9187 11.8027 15.3827 13.38Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flbd-desc')}
          </Featurelist>
<Featurelist color="green" title={t('flsb')}icon={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" width="48" height="48" rx="24" fill="#D1FAE5"/>
<path d="M26.083 13.6573C28.2923 11.448 31.8737 11.448 34.083 13.6573" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28.083 16.324C29.187 15.22 30.979 15.22 32.083 16.324" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.083 30.6667H18.083" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.0366 30.7133C30.0099 30.6867 30.0099 30.6453 30.0366 30.6187C30.0633 30.592 30.1046 30.592 30.1313 30.6187C30.1579 30.6453 30.1579 30.6867 30.1313 30.7133C30.1046 30.74 30.0619 30.74 30.0366 30.7133" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.083 25.3333V20" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.4167 25.3333H34.0833C35.5567 25.3333 36.75 26.5267 36.75 28V33.3333C36.75 34.8067 35.5567 36 34.0833 36H15.4167C13.9433 36 12.75 34.8067 12.75 33.3333V28C12.75 26.5267 13.9433 25.3333 15.4167 25.3333Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
            {t('flsb-desc')}
          </Featurelist>
          <Featurelist color="pink" title={t('fliot')} icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#D1FAE5"/>
<path fillRule="evenodd" clipRule="evenodd" d="M35.9013 29.332V18.668C35.9013 17.7147 35.3933 16.8347 34.568 16.3587L25.3333 11.0267C24.508 10.5507 23.492 10.5507 22.6666 11.0267L13.432 16.3587C12.6066 16.8347 12.0986 17.716 12.0986 18.668V29.3307C12.0986 30.284 12.6066 31.164 13.432 31.64L22.6666 36.9733C23.492 37.4493 24.508 37.4493 25.3333 36.9733L34.568 31.6413C35.3933 31.1653 35.9013 30.284 35.9013 29.332V29.332Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.2266 24.84L20.2266 27.16" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.4561 17.3347L24.0001 24L35.5441 17.3347" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24 37.3333V24" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.2266 20.6667L30.1332 13.8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('fliot-desc')}
          </Featurelist>
<Featurelist color="green" title={t('flokta')} icon={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.25" width="48" height="48" rx="24" fill="#D1FAE5"/>
<path d="M34.9163 22.9093C34.9163 28.964 30.3657 34.6253 24.2497 36C18.1337 34.6253 13.583 28.964 13.583 22.9093V18.1533C13.583 17.0707 14.2377 16.0947 15.2403 15.6853L21.907 12.9573C23.4083 12.3427 25.091 12.3427 26.5923 12.9573L33.259 15.6853C34.2617 16.096 34.9163 17.0707 34.9163 18.1533V22.9093V22.9093Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28.583 21.5L23.583 26.5L20.583 23.5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flokta-desc')}
          </Featurelist>

          
          
          
          <Featurelist color="blue" title={t('flmu')} icon={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" width="48" height="48" rx="24" fill="#DBEAFE"/>
<path d="M27.1663 14.6667H32.4997C33.973 14.6667 35.1663 15.86 35.1663 17.3334V34.6667C35.1663 36.14 33.973 37.3334 32.4997 37.3334H16.4997C15.0263 37.3334 13.833 36.14 13.833 34.6667V17.3334C13.833 15.86 15.0263 14.6667 16.4997 14.6667H21.833" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.6213 22.212C27.7929 23.3836 27.7929 25.2831 26.6213 26.4546C25.4497 27.6262 23.5503 27.6262 22.3787 26.4546C21.2071 25.2831 21.2071 23.3836 22.3787 22.212C23.5503 21.0404 25.4497 21.0404 26.6213 22.212Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.2937 33.3334C29.0604 32.748 28.7004 32.2227 28.2377 31.7947C27.455 31.0694 26.4284 30.6667 25.3617 30.6667H23.639C22.5724 30.6667 21.5457 31.0694 20.763 31.7947C20.3004 32.2227 19.9404 32.748 19.707 33.3334" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M25.833 17.3334H23.1663C22.4303 17.3334 21.833 16.736 21.833 16V12C21.833 11.264 22.4303 10.6667 23.1663 10.6667H25.833C26.569 10.6667 27.1663 11.264 27.1663 12V16C27.1663 16.736 26.569 17.3334 25.833 17.3334Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flmu-desc')}
          </Featurelist>
          
          <Featurelist color="blue" title={t('flapi')}icon={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.75" width="48" height="48" rx="24" fill="#DBEAFE"/>
<path d="M21.1943 16.8893C21.1943 14.9253 22.7863 13.3333 24.7503 13.3333C26.7143 13.3333 28.3063 14.9253 28.3063 16.8893C28.3063 18.8533 26.7143 20.4453 24.7503 20.4453C22.7863 20.444 21.1943 18.852 21.1943 16.8893Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.5752 31.1107C12.5752 29.1467 14.1672 27.5547 16.1312 27.5547C18.0952 27.5547 19.6872 29.1467 19.6872 31.1107C19.6859 33.0747 18.0952 34.6667 16.1312 34.6667C14.1672 34.6667 12.5752 33.0747 12.5752 31.1107V31.1107Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.8145 31.1107C29.8145 29.1467 31.4065 27.5547 33.3705 27.5547C35.3345 27.5547 36.9265 29.1467 36.9265 31.1107C36.9265 33.0747 35.3345 34.6667 33.3705 34.6667C31.4051 34.6667 29.8145 33.0747 29.8145 31.1107V31.1107Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29.9368 30.2267H19.5635" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.6699 19.88L31.8299 27.92" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.6699 27.92L22.8299 19.88" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flapi-desc')}
          </Featurelist>
          
          <Featurelist color="red" title={t('flzc')}icon={<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="24" fill="#DBEAFE"/>
<path d="M23.7803 28L30.4469 34.6667C31.5509 35.7707 33.3429 35.7707 34.4469 34.6667C35.5509 33.5627 35.5509 31.7707 34.4469 30.6667L27.7803 24" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M35.8879 15.796C35.9199 15.8267 35.9439 15.8667 35.9559 15.9093C36.5826 17.9987 36.0972 20.3493 34.4466 22C32.7786 23.668 30.3959 24.1453 28.2906 23.4893L17.1612 34.6187C16.0772 35.7027 14.3092 35.784 13.1879 34.7387C12.0092 33.6413 11.9852 31.796 13.1132 30.6667L24.2906 19.4893C23.6346 17.384 24.1119 15.0013 25.7799 13.3333C27.4306 11.6827 29.7812 11.1973 31.8706 11.824C31.9132 11.8373 31.9532 11.86 31.9839 11.892L32.1999 12.108C32.3039 12.212 32.3039 12.3813 32.1999 12.4853L28.6866 16L31.7799 19.0933L35.2946 15.5787C35.3986 15.4747 35.5679 15.4747 35.6719 15.5787L35.8879 15.796V15.796Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9102 13.724L12.8089 16.4213C12.9902 16.9667 13.4996 17.3333 14.0742 17.3333H17.1129V14.2947C17.1129 13.7213 16.7462 13.2107 16.2009 13.0293L13.5036 12.1307C13.2636 12.0507 12.9996 12.1133 12.8209 12.292L12.0716 13.0413C11.8929 13.22 11.8302 13.484 11.9102 13.724V13.724Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.1201 17.3333L21.7868 22" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flzc-desc')}
          </Featurelist>

          
          
          <Featurelist color="yellow" title={t('flcr')} icon={<svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.25" width="48" height="48" rx="24" fill="#DBEAFE"/>
<path d="M28.2503 27.852H13.829C12.221 27.852 10.917 26.548 10.917 24.94V14.912C10.917 13.304 12.221 12 13.829 12H28.0063C29.613 12 30.917 13.304 30.917 14.912V21.3333" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.1836 27.8533L23.7036 32" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0366 27.8533L18.5166 32" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.1035 32H25.1035" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30.9167 21.3333H34.9167C36.39 21.3333 37.5833 22.5267 37.5833 24V33.3333C37.5833 34.8067 36.39 36 34.9167 36H30.9167C29.4433 36 28.25 34.8067 28.25 33.3333V24C28.25 22.5267 29.4433 21.3333 30.9167 21.3333Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M31.917 33H33.917" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
}>
          {t('flcr-desc')}
          </Featurelist>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}

export function HighFeatures() {
  const Feature = (props: any) => {
    return (
      <Box>
        <Center>
          <Flex alignItems="center" justifyContent="center" h={20} w={20} rounded="md" color="brand.500">
            <Icon boxSize={16} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {props.icon}
            </Icon>
          </Flex>
        </Center>
        <chakra.h1 mb={3} fontSize="2xl" lineHeight="shorter" fontWeight="bold" py={5} textAlign="center">
          {props.title}
        </chakra.h1>
        <chakra.p lineHeight="tall" color={useColorModeValue("gray.600", "gray.400")}>
          {props.children}
        </chakra.p>
      </Box>
    );
  };
  const {t, i18n} = useTranslation('features')
  return (
    <Box rounded="xl">
      <Box mx="auto" px={{ base: 4, lg: 8 }}>
        <Box py={0} textAlign={{ lg: "center" }}>
          <chakra.h2
            color="brand.600"
            textTransform="uppercase"
            mt={2}
            fontSize={{ base: "4xl", sm: "3xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            {t('thepowerofomniedge')}
          </chakra.h2>
        </Box>

        <Flex px={{ base: 2, lg: 0 }} py={20} w="auto" justifyContent="center" alignItems="center">
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={20}
            px={{ base: 0, lg: 16, xl: 24 }}
            py={2}
            mx="auto"
          >
            <Feature title={t('highsecurity')} icon={<AiOutlineSafety size="2lg" />}>
            {t('highsecurity-desc')}
            </Feature>
            <Feature title={t('highspeed')} icon={<FaRocket size="2lg" />}>
            {t('highspeed-desc')}
            
            </Feature>

            <Feature title={t('highperformance')}icon={<GiTreeGrowth size="2lg" />}>
            {t('highperformance-desc')}
            </Feature>
          </SimpleGrid>
        </Flex>
      </Box>
    </Box>
  );
}
