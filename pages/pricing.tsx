import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ButtonProps,
  chakra,
  HStack,
  Icon,
  SimpleGrid,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import { Faq } from "../components/Faq";
import { Heros } from "../components/Features";
import DefaultLayout from "../components/layout/Default";
import Link from "../components/next/Link";
import { EnterprisePlan, FreePlan, ProPlan, TeamsPlan } from "../components/Plans";
import { Seo } from "../components/Seo";
import { Page } from "../types";

interface FAQText {
  title: string;
  text: string;
}
interface FeatureTextnumber {
  title: string;
  free: string;
  pro: string;
  team: string;
  enterprise: string;
}

interface Tips {
  text: string;
}
const Tips: React.FC<Tips> = ({ text }) => {
  return (
    <Tooltip hasArrow label={text} placement="auto-start">
      <InfoOutlineIcon />
    </Tooltip>
  );
};

const FAQText: React.FC<FAQText> = ({ title, text }) => {
  return (
    <AccordionItem>
      <AccordionButton _expanded={{ bg: "brand.500", color: "white" }}>
        <Box flex="1" textAlign="left">
          <Text fontWeight="semibold" fontSize="md">
            {title}
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Markdown>{text}</Markdown>
      </AccordionPanel>
    </AccordionItem>
  );
};

const FeatureText: React.FC<{ active?: boolean; tooltip?: string }> = (props) => {
  let active = props.active || props.active === undefined;
  return (
    <HStack>
      <Icon color={active ? "brand.500" : "gray.500"} as={active ? FiCheck : FiX}></Icon>
      <Text color={active ? "black" : "gray.500"}>{props.children}</Text>
    </HStack>
  );
};

const FeatureTextnumber: React.FC<FeatureTextnumber> = ({ title, free, pro, team, enterprise }) => {
  return (
    <Tr>
      <Td>{title}</Td>
      <Td align="center">{free}</Td>
      <Td align="center">{pro}</Td>
      <Td align="center">{team}</Td>
      <Td align="center">{enterprise}</Td>
    </Tr>
  );
};

const FeatureDesc: React.FC<{ free?: boolean; pro?: boolean; team?: boolean; enterprise?: boolean }> = (props) => {
  let free = props.free || props.free === undefined;
  let pro = props.pro || props.pro === undefined;
  let team = props.team || props.team === undefined;
  let enterprise = props.enterprise || props.enterprise === undefined;
  return (
    <Tr>
      <Td>{props.children}</Td>
      <Td>
        <Icon color={free ? "brand.500" : "gray.500"} as={free ? FiCheck : FiX}></Icon>
      </Td>
      <Td>
        <Icon color={pro ? "brand.500" : "gray.500"} as={pro ? FiCheck : FiX}></Icon>
      </Td>
      <Td>
        <Icon color={team ? "brand.500" : "gray.500"} as={team ? FiCheck : FiX}></Icon>
      </Td>
      <Td>
        <Icon color={enterprise ? "brand.500" : "gray.500"} as={enterprise ? FiCheck : FiX}></Icon>
      </Td>
    </Tr>
  );
};
export function Plans() {
  const ChoosePlanButton: React.FC<{ plan: string } & ButtonProps> = ({ plan, ...props }) => (
    <Link href="/dashboard/billing">
      <Button isFullWidth colorScheme="gray" mt={4} {...props}>
        Get Started
      </Button>
    </Link>
  );
  return (
      <VStack mt={10} rounded="xl" backgroundColor={"gray.50"}>
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("brand.900", "brand.100")}
        >
          Pricing
        </chakra.h1>
        <Text>Start for free, then grow with us</Text>
        <SimpleGrid py={8} columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
          <FreePlan>
            <ChoosePlanButton plan="free" />
          </FreePlan>
            <ProPlan>
              <ChoosePlanButton plan="pro" />
            </ProPlan>
          <Box bgColor="brand.500" borderRadius="xl" color="white" px={4}>
          <TeamsPlan>
            <ChoosePlanButton plan="teams"  colorScheme="cyan" color="white"/>
          </TeamsPlan>
          </Box>
          <EnterprisePlan>
            <Link href="/contactus">
              <Button isFullWidth variant="outline" mt={4} colorScheme="teal">
                Contact us
              </Button>
            </Link>
          </EnterprisePlan>
        </SimpleGrid>
      </VStack>
      
);
}
const PricingPage: Page = () => {
  const ChoosePlanButton: React.FC<{ plan: string } & ButtonProps> = ({ plan, ...props }) => (
    <Link href="/dashboard/billing">
      <Button isFullWidth colorScheme="gray" mt={4} {...props}>
        Get Started
      </Button>
    </Link>
  );

  return (
    <>
      <Seo
        title="Start for free, then grow with us"
        description="Unlimited Computers In Your Private Network With Zero Config."
        image="/assets/OmniEdgeall0.5.png"
      />
      <VStack mt={10}>
        <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900", "gray.100")}
        >
          Pricing
        </chakra.h1>
        <Text>Start for free, then grow with us</Text>
        <SimpleGrid py={8} columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
          <FreePlan>
            <ChoosePlanButton plan="free" />
          </FreePlan>
            <ProPlan>
              <ChoosePlanButton plan="pro" />
            </ProPlan>
          <Box bgColor="brand.500" borderRadius="xl" color="white" px={4}>
          <TeamsPlan>
            <ChoosePlanButton plan="teams"  colorScheme="cyan" color="white"/>
          </TeamsPlan>
          </Box>
          <EnterprisePlan>
            <Link href="/contactus">
              <Button isFullWidth variant="outline" mt={4} colorScheme="teal">
                Contact us
              </Button>
            </Link>
          </EnterprisePlan>
        </SimpleGrid>
      </VStack>

      <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="3xl"
        display={{ base: "none", md: "flex" }}
      >
        <Table variant="simple">
          <TableCaption></TableCaption>
          <Thead>
            <Tr>
              <Th>Features</Th>
              <Th>Starter</Th>
              <Th>Professional</Th>
              <Th>Team</Th>
              <Th>Enterprise</Th>
            </Tr>
          </Thead>
          <Tbody>
            <FeatureTextnumber title="Virtual Network" free="1" pro="5" team="10" enterprise="Unlimited" />
            <FeatureTextnumber title="Devices" free="20" pro="25" team="25" enterprise="Unlimited" />
            <FeatureTextnumber title="Users" free="1" pro="5" team="10" enterprise="Unlimited" />
            <FeatureDesc>Security Keys</FeatureDesc>
            <FeatureDesc>Subroute</FeatureDesc>
            <FeatureDesc>Unlimited data transfer</FeatureDesc>
            <FeatureDesc>Encrypted, peer-to-peer connection</FeatureDesc>
            <FeatureDesc>Desktop, Cli & Mobile Apps</FeatureDesc>
             <FeatureDesc free={false} pro={true} team={true}>
               Sharing Virtual Network
             </FeatureDesc>
             <FeatureDesc free={false} pro={true} team={true}>
               Customize Supernode
             </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              Identity provider integration
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              Hardware and Iot integration
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              API
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              Admin API
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
               White label
             </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              Special Support
            </FeatureDesc>
            <FeatureDesc free={false} pro={true}>
              Email Support
            </FeatureDesc>
          </Tbody>
        </Table>
      </Box>
      <Faq />
      <Heros />
    </>
  );
};

PricingPage.layout = DefaultLayout;

export default PricingPage;
