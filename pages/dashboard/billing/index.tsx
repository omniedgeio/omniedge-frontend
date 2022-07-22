import {
  Alert,
  AlertIcon,
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { startCase } from "lodash";
import { useTranslation } from "react-i18next";
import { MdCheckCircle } from "react-icons/md";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import { PlanFeatures } from "../../../components/pricing/Plans";
import { createPortalSession } from "../../../lib/api/billing";
import { showError } from "../../../lib/helpers/toast";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";

const BillingPage: Page = (props) => {
  const { user, isLoading } = useUser("/login");

  const { t } = useTranslation("dashboard");
  const { t: tFeatures } = useTranslation("pricing");
  const features = tFeatures(`plans.${user?.subscription.slug}.features`, { returnObjects: true });

  return (
    <VStack alignItems="flex-start" spacing="4">
      <Heading size="md" fontWeight="semibold">
        {t("billing.title")}
      </Heading>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <Box w="full" maxW="500px" p={6} border="1px" borderColor="gray.200" borderRadius="xl">
          <HStack>
            <Heading size="md">
            {user?.subscription.slug === "free" ? t("billing.starter") : ""}
            {user?.subscription.slug === "professional" ? t("billing.professional") : ""}
            {user?.subscription.slug === "teams" ? t("billing.teams") : ""} {t("billing.plan")} 
            </Heading>
            <Badge colorScheme="green">{user?.subscription.slug === "free" ? "Free" : "Paid"}</Badge>
          </HStack>
          <Text mt={2}>
            {t("billing.monthly")}
            {user?.subscription.slug !== "free" &&
              `• 
              ${format(new Date(user?.subscription.start_at as Date), "MMM dd")} to
              ${format(new Date(user?.subscription.end_at as Date), "MMM dd")}
            `}
          </Text>
          {user?.subscription.cancel_at && (
            <Alert status="warning" my={2} borderRadius="md" alignItems="flex-start" p={4}>
              <AlertIcon />
              {t("billing.revertnotify")} {format(new Date(user?.subscription.cancel_at as Date), "MMM dd")}
            </Alert>
          )}
          <HStack mt={3}>
            <Link href="/dashboard/billing/choose-plan">
              <Button colorScheme="brand">
                {user?.subscription.slug === "free" ? t("billing.upgrade") : t("billing.change")}
              </Button>
            </Link>
            {user?.subscription.slug !== "free" && (
              <Button
                onClick={() => {
                  createPortalSession()
                    .then((data) => {
                      if (data.url) {
                        window.location.href = data.url;
                      }
                    })
                    .catch((err) => {
                      showError("Error", "Cannot open billing portal");
                    });
                }}
                colorScheme="teal"
              >
                {t("billing.manage")}
              </Button>
            )}
          </HStack>
          <Box mt={4}>
            <Text fontWeight="medium">{t("billing.features")}</Text>
            <List>
              {Array.isArray(features) &&
                (features as PlanFeatures[])?.map(({ label }) => (
                  <ListItem key={label}>
                    <ListIcon verticalAlign="middle" as={MdCheckCircle} color="green.500" />
                    {label}
                  </ListItem>
                ))}
            </List>
          </Box>
          <Box mt={4}>
            <Text fontWeight="medium">{t("billing.currentusage")}</Text>
            <SimpleGrid columns={2}>
              {user?.usage_limits &&
                Object.entries(user?.usage_limits).map(([key, value]) => (
                  <>
                    <Text>{startCase(key)}</Text>
                    <Box>
                      <Text fontFamily="mono" d="inline" color={value.usage > value.limit ? "red.500" : ""}>
                        {value.usage}
                      </Text>{" "}
                      out of{" "}
                      <Text fontFamily="mono" d="inline">
                        {value.limit}
                      </Text>
                    </Box>
                  </>
                ))}
            </SimpleGrid>
          </Box>
        </Box>
      )}
    </VStack>
  );
};

BillingPage.layout = DashboardLayout;

export default BillingPage;
