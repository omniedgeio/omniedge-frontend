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
          <Icon boxSize={10} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
        color={useColorModeValue(`${props.color}.600`, `${props.color}.100`)}
        bg={useColorModeValue(`${props.color}.100`, `${props.color}.600`)}
      >
        <Icon boxSize={10} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
    <Box py={12} rounded="xl">
      <Box mx="auto" px={{ base: 4, lg: 8 }}>
        <Box textAlign={{ lg: "center" }}>
          <chakra.h2 color="brand.600" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide">
          {t('FeaturePage-title')}
        
          </chakra.h2>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color="gray.900"
          >
            {t('FeaturePage-subtitle')}
            
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
        </Box>

        <Box mt={10}>
          <Stack
            spacing={{ base: 10, md: 0 }}
            display={{ md: "grid" }}
            gridTemplateColumns={{ md: "repeat(2,1fr)" }}
            gridColumnGap={{ md: 8 }}
            gridRowGap={{ md: 10 }}
          >
            <Feature title={t('crossplatform')} icon={<FaConnectdevelop size="2lg" />}>
              {t('crossplatform-desc')}
            </Feature>
            <Feature title={t('dashboard')} icon={<FiSettings size="2lg" />}>
            {t('dashboard-desc')}
            </Feature>
            <Feature title={t('speed')}icon={<FaRocket size="2lg" />}>
            {t('speed-desc')}
            </Feature>
            <Feature title={t('security')} icon={<AiOutlineSafety size="2lg" />}>
            {t('security-desc')}
              
            </Feature>
            <Feature title={t('setup')} icon={<GiPeanut size="2lg" />}>
            {t('setup-desc')}
            </Feature>
            <Feature title={t('maintenanceless')} icon={<GiAutoRepair size="2lg" />}>
            {t('maintenanceless-desc')} 
            </Feature>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const Featureheros = (props: any) => (
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
  return (
    <Box px={8} py={24} mx="auto">
      <Box w={{ base: "full", md: 11 / 12, xl: 9 / 12 }} mx="auto" textAlign={{ base: "left", md: "center" }}>
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          All your{" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, brand.500,purple.500)"
            fontWeight="extrabold"
          >
            connectivity
          </Text>{" "}
          in one single click.
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color={useColorModeValue("gray.600", "gray.300")}
        >
          We’re on a mission to provide reliable, secure, and painless connectivity solutions for anyone who wants to
          have access to their devices, anywhere, anytime.
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
              Get Started
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
      <Download_feature />
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
      <VStack padding="4" spacing="4" alignItems="center">
        <chakra.h2
            color="brand.600"
            textTransform="uppercase"
            mt={2}
            fontSize={{ base: "4xl", sm: "3xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
          {t('comparetitle')} {" "}
        </chakra.h2>
        <Text textAlign="center">{t('comparedesc')}{" "}</Text>
        <Image width="60%" src="/assets/OmniEdgeComparison.gif" alt="OmniEdge " />
      </VStack>
    </>
  );
}

export function Featureslist() {
  const {t, i18n} = useTranslation('features')
  return (
    <Flex w="auto" justifyContent="center" alignItems="center" >
      <Box px={4} py={20} mx="auto">
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            textTransform="uppercase"
          >
            {t('featureslisttitle')}
            
          </chakra.p>
          <chakra.p mt={4} maxW="2xl" fontSize="xl" mx={{ lg: "auto" }}>
          {t('featureslistsubtitle')}
          </chakra.p>
        </Box>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacingX={{ base: 16, lg: 24 }} spacingY={20} mt={6}>
          <Featurelist color="red" title={t('flvn')} icon={<FiGlobe size="2lg" />}>
          {t('flvn-desc')}
          </Featurelist>

          <Featurelist color="pink" title={t('flrm')} icon={<AiOutlineControl size="2lg" />}>
          {t('flrm-desc')}
          </Featurelist>

          <Featurelist color="yellow" title={t('flcr')} icon={<FaConnectdevelop size="2lg" />}>
          {t('flcr-desc')}
          </Featurelist>
          <Featurelist color="green" title={t('flsb')}icon={<MdRouter size="2lg" />}>
            {t('flsb-desc')}
          </Featurelist>
          <Featurelist color="purple" title={t('flbd')}icon={<BiTransfer size="2lg" />}>
          {t('flbd-desc')}
          </Featurelist>
          <Featurelist color="blue" title={t('flmu')} icon={<FiUsers size="2lg" />}>
          {t('flmu-desc')}
          </Featurelist>
          <Featurelist color="brand" title={t('flsk')} icon={<FiKey size="2lg" />}>
          {t('flsk-desc')}
          </Featurelist>
          <Featurelist color="purple" title={t('flp2p')} icon={<MdEnhancedEncryption size="2lg" />}>
          {t('flp2p-desc')}
          </Featurelist>
          <Featurelist color="pink" title={t('fliot')} icon={<AiFillRobot size="2lg" />}>
          {t('fliot-desc')}
          </Featurelist>
          <Featurelist color="red" title={t('flzc')}icon={<GiClick size="2lg" />}>
          {t('flzc-desc')}
          </Featurelist>

          <Featurelist color="green" title={t('flokta')} icon={<BiCheckShield size="2lg" />}>
          {t('flokta-desc')}
          </Featurelist>
          <Featurelist color="blue" title={t('flapi')}icon={<AiTwotoneApi size="2lg" />}>
          {t('flapi-desc')}
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
