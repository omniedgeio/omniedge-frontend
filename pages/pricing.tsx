import { Stack,Button, Heading, HStack, Icon, Text, VStack,Table,
  Thead,
  Tbody,
  Box,
  Tr,
  Th,
  Td,
  TableCaption,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  useColorModeValue,
  chakra,
 } from "@chakra-ui/react";
import { FiCheck, FiX,FiPlus, FiMinus} from "react-icons/fi";
import DefaultLayout from "../components/layout/Default";
import Link from "../components/next/Link";
import { Page } from "../types";
import React from 'react';
import {Heros} from "../components/Features";
import {Faq} from "../components/Faq";
import Markdown from "markdown-to-jsx";


interface FAQText {
  title:string;
  text:string;
}
interface FeatureTextnumber {
  title:string;
  free:string;
  pro:string;
  team:string;
  enterprise:string;
}

const FAQText: React.FC<FAQText> = ({ title,text }) => {
  return (
  <AccordionItem>
    <AccordionButton _expanded={{ bg: "brand.500", color: "white" }}>
      <Box flex="1" textAlign="left">
        <Text fontWeight="semibold" fontSize="md" >{title}</Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  <AccordionPanel pb={4}>
  <Markdown>
  {text}
  </Markdown>
    
  </AccordionPanel>
</AccordionItem>
);
};
const FeatureText: React.FC<{ active?: boolean }> = (props) => {
  let active = props.active || props.active === undefined;
  return (
    <HStack>
      <Icon color={active ? "brand.500" : "gray.500"} as={active ? FiCheck : FiX}></Icon>
      <Text color={active ? "black" : "gray.500"}>{props.children}</Text>
    </HStack>
  );
};

const FeatureTextnumber: React.FC<FeatureTextnumber> = ({title,free,pro,team,enterprise}) => {
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



const FeatureDesc: React.FC<{free?:boolean,pro?:boolean,team?:boolean,enterprise?:boolean }> = (props) => {
  let free = props.free || props.free === undefined;
  let pro = props.pro || props.pro === undefined;
  let team = props.team || props.team === undefined;
  let enterprise = props.enterprise || props.enterprise === undefined;
  return (
    <Tr>
    <Td>{props.children}</Td>
    <Td><Icon color={free ? "brand.500" : "gray.500"} as={free ? FiCheck : FiX}></Icon></Td>
    <Td><Icon color={pro ? "brand.500" : "gray.500"} as={pro ? FiCheck : FiX}></Icon></Td>
    <Td><Icon color={team ? "brand.500" : "gray.500"} as={team ? FiCheck : FiX}></Icon></Td>
    <Td><Icon color={enterprise ? "brand.500" : "gray.500"} as={enterprise ? FiCheck : FiX}></Icon></Td>
    </Tr>
  );
};


const PricingPage: Page = () => {
  return (<>
    <VStack mt={10}>
    <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >
        Pricing
      </chakra.h1>
      <Text>Start for free, then grow with us</Text>
<VStack spacing="4" alignItems="center">
<Stack spacing="8" direction={["column", "row"]} alignItems="flex-start">
<VStack borderRadius="xl" p={6} border="solid 1px" borderColor="gray.200">
<chakra.h2
          mb={6}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="semibold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >Free</chakra.h2>
          <HStack height="2.5rem" spacing={1} alignItems="center">
            <Text>$</Text>
            <Text fontSize="2xl" fontWeight="semibold">
              0
            </Text>
          </HStack>
          <Link href="/register" w="full">
            <Button colorScheme="brand" w="full">
              Get Started
            </Button>
          </Link>
          <VStack mx="auto" alignItems="start">
            <FeatureText>Unlimited data transfer</FeatureText>
            <FeatureText>Encrypted, peer-to-peer connection</FeatureText>
            <FeatureText>1 virtual network</FeatureText>
            <FeatureText>20 devices</FeatureText>
            <FeatureText>1 user</FeatureText>
            <FeatureText>Subroute</FeatureText>
            <FeatureText active={false}>Hardware and Iot integration</FeatureText>
            <FeatureText active={false}>Specialist Support</FeatureText>
          {/* <Accordion display={{base:"flex",md:"none"}} allowMultiple>
  <AccordionItem>
          <AccordionButton>
            <Box textAlign="left">
              Show all features
            </Box>
          </AccordionButton>
        <AccordionPanel pb={4} width="100%">
        <FeatureText>Unlimited data transfer</FeatureText>
            <FeatureText>Encrypted, peer-to-peer connection</FeatureText>
            <FeatureText>1 virtual network</FeatureText>
            <FeatureText>20 devices</FeatureText>
            <FeatureText>1 user</FeatureText>
            <FeatureText>Subroute</FeatureText>
        </AccordionPanel>
  </AccordionItem>
</Accordion> */}

          </VStack>
        </VStack>
    
        <VStack borderRadius="xl" p={6} border="solid 1px" borderColor="gray.200">
        <chakra.h2
          mb={6}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="semibold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >Enterprise</chakra.h2>
          <HStack height="2.5rem" spacing={1} alignItems="center">
            <Text fontWeight="medium">Pay based on your needs</Text>
          </HStack>
          <Link href="/contactus" w="full">
            <Button colorScheme="brand" w="full">
              Contact us
            </Button>
          </Link>
          <VStack pt={2} alignItems="start">
            <FeatureText>Unlimited data transfer</FeatureText>
            <FeatureText>Encrypted, peer-to-peer connection</FeatureText>
            <FeatureText>Unlimited virtual network</FeatureText>
            <FeatureText>Unlimited devices</FeatureText>
            <FeatureText>Unlimited user</FeatureText>
            <FeatureText>Subroute</FeatureText>
            <FeatureText>Hardware and Iot integration</FeatureText>
            <FeatureText>Specialist Support</FeatureText>
          </VStack>
        </VStack>
      </Stack>
    </VStack>
    </VStack>

    <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="3xl"
        display={{base:"none",md:"flex"}}
      >
    <Table variant="simple" >
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
  <FeatureTextnumber title="Virtual Network" free="1" pro="5" team="20" enterprise="Unlimited" />
  <FeatureTextnumber title="Devices" free="20" pro="50" team="200" enterprise="Unlimited" />
  <FeatureTextnumber title="Users" free="1" pro="10" team="30" enterprise="Unlimited" />
  <FeatureTextnumber title="Security Keys" free="0" pro="20" team="100" enterprise="Unlimited" />
  <FeatureDesc>Subroute</FeatureDesc>
            <FeatureDesc>Unlimited data transfer</FeatureDesc>
            <FeatureDesc>Encrypted, peer-to-peer connection</FeatureDesc>
            <FeatureDesc free={false} pro={false} team={true}>Identity provider integration</FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>Hardware and Iot integration</FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>API</FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>Admin API</FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false} >Special Support</FeatureDesc>
            <FeatureDesc free={false} pro={true}>Email Support</FeatureDesc>
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
