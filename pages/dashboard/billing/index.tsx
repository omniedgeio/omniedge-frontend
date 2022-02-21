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
import { MdCheckCircle } from "react-icons/md";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import { PlanProps, PLANS } from "../../../components/Plans";
import { createPortalSession } from "../../../lib/api/billing";
import { showError } from "../../../lib/helpers/toast";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";

const BillingPage: Page = (props) => {
  const { user, isLoading } = useUser("/login");

  console.log(user);
  const plan: PlanProps = user?.subscription ? PLANS[user?.subscription.slug as string] : null;

  return (
    <VStack alignItems="flex-start" spacing="4">
      <Heading size="md" fontWeight="semibold">
        Billing
      </Heading>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <Box w="full" maxW="500px" p={6} border="1px" borderColor="gray.200" borderRadius="xl">
          <HStack>
            <Heading size="md">{plan.title} Plan</Heading>
            <Badge colorScheme="green">{user?.subscription.slug === "free" ? "Free" : "Paid"}</Badge>
          </HStack>
          <Text mt={2}>
            Billing Monthly
            {user?.subscription.slug !== "free" &&
              `• 
              ${format(new Date(user?.subscription.start_at as Date), "MMM dd")} to
              ${format(new Date(user?.subscription.end_at as Date), "MMM dd")}
            `}
          </Text>
          {user?.subscription.cancel_at && (
            <Alert status="warning" my={2} borderRadius="md" alignItems="flex-start" p={4}>
              <AlertIcon />
              Your subscription will revert back to Free Plan on{" "}
              {format(new Date(user?.subscription.cancel_at as Date), "MMM dd")}
            </Alert>
          )}
          <HStack mt={3}>
            <Link href="/dashboard/billing/choose-plan">
              <Button colorScheme="brand">{user?.subscription.slug === "free" ? "Upgrade Plan" : "Change Plan"}</Button>
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
                Manage
              </Button>
            )}
          </HStack>
          <Box mt={4}>
            <Text fontWeight="medium">Features</Text>
            <List>
              {plan?.features.map(({ label }) => (
                <ListItem key={label}>
                  <ListIcon verticalAlign="middle" as={MdCheckCircle} color="green.500" />
                  {label}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box mt={4}>
            <Text fontWeight="medium">Current Usage</Text>
            <SimpleGrid columns={2}>
              {user?.usage_limits &&
                Object.entries(user?.usage_limits).map(([key, value]) => (
                  <>
                    <Text>{startCase(key)}</Text>
                    <Text>
                      <Text fontFamily="mono" d="inline">
                        {value.usage}
                      </Text>{" "}
                      out of{" "}
                      <Text fontFamily="mono" d="inline">
                        {value.limit}
                      </Text>
                    </Text>
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
