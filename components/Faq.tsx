import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  chakra,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import React from "react";
import { Page } from "../types";
import {useTranslation} from "react-i18next";

interface FAQText {
  title: string;
  text: string;
}

const FAQText: React.FC<FAQText> = ({ title, text }) => {
  return (
    <AccordionItem>
      <AccordionButton _expanded={{ bg: "brand.500", color: "white" }}>
        <chakra.h1 mb={6} fontSize={{ base: "sm", md: "xl" }} fontWeight="bold" lineHeight="none">
          {title}
          <AccordionIcon fontSize="xl" />
        </chakra.h1>
      </AccordionButton>
      <AccordionPanel width={{ base: "auto", md: "xl" }} maxW={{ base: "2xl", md: "4xl" }}>
        <Markdown>{text}</Markdown>
      </AccordionPanel>
    </AccordionItem>
  );
};

export const Faq: Page = () => {
  const {t, i18n} = useTranslation('faq')
  return (
    <>
      <Box rounded="lg" bg={useColorModeValue("white", "gray.800")}>
        <VStack spacing="4">
          <chakra.h1
            mb={6}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: "normal", md: "tight" }}
            color={useColorModeValue("gray.900", "gray.100")}
          >
{t('title')} 
         </chakra.h1>

          <Accordion pb={4} defaultIndex={[0]} allowToggle={false}>
            <FAQText
              title={t('faq-1-q')} 
              text={t('faq-1-a')}
            />
            <FAQText
              title={t('faq-2-q')} 
              text={t('faq-2-a')}
            />
            <FAQText
              title={t('faq-3-q')}
              text={t('faq-3-a')}
            />
            <FAQText
              title={t('faq-4-q')} 
              text={t('faq-4-a')}
            />
            <FAQText
              title={t('faq-5-q')} 
              text={t('faq-5-a')}
            />
            <FAQText
              title={t('faq-6-q')} 
              text={t('faq-6-a')}
            />
            <FAQText
              title={t('faq-7-q')}
              text={t('faq-7-a')}
            />
          </Accordion>
        </VStack>
      </Box>
    </>
  );
};
