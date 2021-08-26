import { Heading, Text, VStack,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Accordion,
  useColorModeValue,
 } from "@chakra-ui/react";
import { Page } from "../types";
import React from 'react';
import Markdown from "markdown-to-jsx";

interface FAQText {
  title:string;
  text:string;
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
  <Markdown>
  {text}
  </Markdown>
    
  </AccordionPanel>
  </Box>
</AccordionItem>
);
};

export const Faq: Page = () => {
  return (<>
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
            text="OmniEdge can be set up in 5 minutes or less, by installing an OmniEdge Apps for your devices on [iOS](/download/ios), [Android](/download/android), [Windows](/download/windows), [macOS](/download/macos), and [Linux platforms](/download/linuxcli)."
            />
            <FAQText 
            title="Is my privacy secure with OmniEdge?" 
            text=" We take privacy security very seriously. please read our [privacy Policy](/privacy) for Details. " 
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
            text="We support payment by credit card through [Stripe](https://stripe.com). Customers with Enterprise plans can request payment by other methods, such as wire or ACH. At this time, we can only receive payment in US Dollars ($)."
            />
            <FAQText
            title="Where can I find your terms of service and privacy policy?"
            text="View the OmniEdge [Terms of Service](/terms) and [Privacy Policy](/privacy)."
            />
            <FAQText
            title="How can I learn more about OmniEdge?"
            text="Learn more about OmniEdge by reading [documentation](/doc)."
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

