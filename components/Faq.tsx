import { Heading, Text, VStack,
  Box,chakra,
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
    <AccordionButton _expanded={{ bg: "brand.500", color: "white" }}>
    <chakra.h1
          mb={6}
          fontSize={{ base: "sm", md: "xl" }}
          fontWeight="bold"
          lineHeight="none"
        >
        {title}
        <AccordionIcon fontSize="xl" />
      </chakra.h1>
      
    </AccordionButton>
  <AccordionPanel width={{base:"auto",md:"xl"}} maxW={{base:"2xl",md:"4xl"}}>
  <Markdown>
  {text}
  </Markdown>
  </AccordionPanel>
</AccordionItem>
);
};

export const Faq: Page = () => {
  return (<>
     <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.800")}
        max="auto"
      >
            <VStack spacing="4">
            <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >
        FAQ
      </chakra.h1>
      
      <Accordion pb={4} defaultIndex={[0]} allowToggle={false}>
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
            title="Where are the term of service and privacy policy?"
            text="View the OmniEdge [Terms of Service](/terms) and [Privacy Policy](/privacy)."
            />
            <FAQText
            title="How can I learn more about OmniEdge?"
            text="Learn more about OmniEdge by reading [documentation](/doc)."
            />

</Accordion>

</VStack>
</Box>
              </>
    
  );
};

