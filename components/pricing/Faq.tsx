import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import { useTranslation } from "react-i18next";

interface FaqQuestion {
  question: string;
  answer: string;
}

export default function Faq() {
  const { t } = useTranslation("pricing");

  return (
    <VStack my={10} mx="auto" spacing={4} maxW="600px">
      <Text fontSize={{ base: "1xl", md: "3xl" }} fontWeight="bold">
        {t("faq.title")}
      </Text>
      <Text>{t("faq.subtitle")}</Text>
      <Accordion w="full" borderLeft="solid .1rem" borderRight="solid .1rem" borderColor="gray.200">
        {(t("faq.questions", { returnObjects: true }) as FaqQuestion[]).map((question, ind) => (
          <AccordionItem key={`faq-${ind}`}>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {question.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Markdown>{question.answer}</Markdown>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
}
