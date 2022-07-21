import { Stack, Tab, TabProps, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../components/layout/Default";
import ComparisonTable from "../components/pricing/ComparisonTable";
import Faq from "../components/pricing/Faq";
import { EnterprisePlan, FreePlan, ProPlan, TeamsPlan } from "../components/pricing/Plans";
import { Seo } from "../components/Seo";
import { Page } from "../types";
import {Heros } from "../components/Features";

const PricingTab = (props: TabProps) => (
  <Tab
    {...props}
    border="solid 1px"
    borderColor="gray.200"
    borderRadius={4}
    w={{ sm: "10rem" }}
    _selected={{ color: "white", bg: "brand.500", borderColor: "brand.500" }}
  />
);

const PricingPage: Page = () => {
  const { t } = useTranslation("pricing");

  return (
    <>
      <Seo
        title="Start for free, then grow with us"
        description="Unlimited Computers In Your Private Network With Zero Config."
        image="/assets/OmniEdgeall0.5.png"
      />
      <VStack my={10} maxWidth="1264px" paddingTop="60px">
        <Text fontSize={{ base: "36px", md: "36px" }} fontWeight="700" lineHeight="40px">
          {t("title")}
        </Text>
        <Text fontSize={{ base: "14x", md: "14px" }} fontWeight="500" lineHeight="20px">{t("subtitle")}</Text>
      
      <Stack justifyContent="center" direction={{ base: "column", sm: "row" }} paddingTop="36px">
              <FreePlan maxW={80} />
              {/* <ProPlan maxW={80} /> */}
              <TeamsPlan maxW={80} />
              <EnterprisePlan maxW={80} />
            </Stack>
            </VStack>
      <ComparisonTable />
      <Faq />
    </>
  );
};

PricingPage.layout = DefaultLayout;

export default PricingPage;
