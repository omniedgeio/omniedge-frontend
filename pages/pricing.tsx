import { Stack,Button, Heading, HStack, Icon, Text, VStack,Table,
  Thead,
  Tbody,
  Tfoot,
  Box,
  Tr,
  Th,
  Td,
  TableCaption,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  useColorModeValue,
 } from "@chakra-ui/react";
import { FiCheck, FiX } from "react-icons/fi";
import { string } from "yup/lib/locale";
import DefaultLayout from "../components/layout/Default";
import Link from "../components/next/Link";
import { Page } from "../types";
import React from 'react';


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
    <Box
        rounded="lg"
        // shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        width="3xl"
      >
    <AccordionButton _expanded={{ bg: "brand.500", color: "white" }}>
      <Box flex="1" textAlign="left">
        <Text fontWeight="semibold" fontSize="md" >{title}</Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
  <AccordionPanel pb={4}>
    {text}
  </AccordionPanel>
  </Box>
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
      <Heading fontWeight="semibold" fontSize="2xl">
        Pricing
      </Heading>
      <Text>Start for free, then grow with us</Text>
<VStack spacing="4" alignItems="center">
<Stack spacing="8" direction={["column", "row"]} alignItems="flex-start">
<VStack borderRadius="xl" p={6} border="solid 1px" borderColor="gray.200">
          <Text>Free</Text>
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
          <VStack pt={2} alignItems="start">
            <FeatureText>Unlimited data transfer</FeatureText>
            <FeatureText>Encrypted, peer-to-peer connection</FeatureText>
            <FeatureText>1 virtual network</FeatureText>
            <FeatureText>20 devices</FeatureText>
            <FeatureText>1 user</FeatureText>
            <FeatureText active={false}>Hardware and Iot integration</FeatureText>
            <FeatureText active={false}>Specialist Support</FeatureText>
          </VStack>
        </VStack>
    
        <VStack borderRadius="xl" p={6} border="solid 1px" borderColor="gray.200">
          <Text>Enterprise</Text>
          <HStack height="2.5rem" spacing={1} alignItems="center">
            <Text fontWeight="medium">Pay based on your needs</Text>
          </HStack>
          <Link href="mailto:hi@omniedge.io" w="full">
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
            <FeatureText>Hardware and Iot integration</FeatureText>
            <FeatureText>Specialist Support</FeatureText>
          </VStack>
        </VStack>
      </Stack>
    </VStack>
    </VStack>
    <br></br>
    <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="3xl"
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
  <FeatureTextnumber title="Virtual Network" free="1" pro="5" team="20" enterprise="Unlimited" />
  <FeatureTextnumber title="Devices" free="20" pro="50" team="200" enterprise="Unlimited" />
  <FeatureTextnumber title="Users" free="1" pro="10" team="30" enterprise="Unlimited" />
  <FeatureTextnumber title="Security Keys" free="0" pro="20" team="100" enterprise="Unlimited" />
            <FeatureDesc>Unlimited data transfer</FeatureDesc>
            <FeatureDesc>Encrypted, peer-to-peer connection</FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>Hardware and Iot integration</FeatureDesc>
            <FeatureDesc free={false} pro={true}>Email Support</FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false} >Special Support</FeatureDesc>
            </Tbody>
            </Table>
            </Box>
<br></br>
            <Box
        mx="auto"
        rounded="lg"
        shadow="md"
        bg={useColorModeValue("white", "gray.800")}
        maxW="3xl"
      >
            <VStack spacing="4" alignItems="center">
            <Heading fontWeight="semibold" fontSize="2xl">
        FAQ
      </Heading>
      <Text>Frequent Asked Questions</Text>
      
      <Accordion allowToggle={false}>
            <FAQText 
            title="How long does it take to set up OmniEdge?"
            text="OmniEdge can be set up in 5 minutes or less, by installing an OmniEdge Apps for your devices on iOS, Android, Windows, macOS, and Linux platforms."
            />
            <FAQText 
            title="Is my privacy secure with OmniEdge?" 
            text=" We take privacy security very seriously. please read our Privacy Policy for Details. " 
            />
            <FAQText
            title="How do I change my existing subscription plan?"
            text="If you already have a OmniEdge plan, please contact us to change your plan or your billing period, or you can do it by yourself at the dashboard."
            />
            <FAQText
            title="When will I be billed?"
            text="Our plans are generally prepaid, so you pay for them in advance. Annual Enterprise plans can be invoiced with net 30 payment terms upon request."
            />
            <FAQText
            title="What payment methods do you offer?"
            text="We support payment by credit card through Stripe. Customers with Enterprise plans can request payment by other methods, such as wire or ACH. At this time, we can only receive payment in US Dollars ($)."
            />
            <FAQText
            title="Where can I find your terms of service and privacy policy?"
            text="View the OmniEdge Terms of Service and Privacy Policy."
            />
            <FAQText
            title="How can I learn more about OmniEdge?"
            text="Learn more about OmniEdge by reading documentation."
            />
            {/* <FAQText
            title=""
            text=""
            /> */}

</Accordion>

</VStack>
</Box>

              </>
    
  );
};

PricingPage.layout = DefaultLayout;

export default PricingPage;
