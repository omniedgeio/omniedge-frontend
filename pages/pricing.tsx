import { Stack, Tab, TabList, TabPanel, TabPanels, TabProps, Tabs, Text, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import DefaultLayout from "../components/layout/Default";
import ComparisonTable from "../components/pricing/ComparisonTable";
import Faq from "../components/pricing/Faq";
import { EnterprisePlan, FreePlan, ProPlan, TeamsPlan } from "../components/pricing/Plans";
import { Seo } from "../components/Seo";
import { Page } from "../types";

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
      <VStack my={10}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          {t("title")}
        </Text>
        <Text>{t("subtitle")}</Text>
      </VStack>
      <Tabs variant="unstyled" mx="auto">
        <TabList justifyContent="center" columnGap={4}>
          <PricingTab>{t("personal")}</PricingTab>
          <PricingTab>{t("business")}</PricingTab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack justifyContent="center" direction={{ base: "column", sm: "row" }}>
              <FreePlan maxW={80} />
              <ProPlan maxW={80} />
            </Stack>
          </TabPanel>
          <TabPanel>
            <Stack justifyContent="center" direction={{ base: "column", sm: "row" }}>
              <TeamsPlan maxW={80} />
              <EnterprisePlan maxW={80} />
            </Stack>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <ComparisonTable />
      <Faq />
    </>
  );
};

PricingPage.layout = DefaultLayout;

export default PricingPage;
