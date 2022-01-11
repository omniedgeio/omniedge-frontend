import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, ButtonProps, Container, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import ConfirmModal from "../../../components/ConfirmModal";
import Link from "../../../components/next/Link";
import { EnterprisePlan, FreePlan, ProPlan, TeamsPlan } from "../../../components/Plans";
import { createCheckoutSession } from "../../../lib/api/billing";
import { showError } from "../../../lib/helpers/toast";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";

const ChoosePlanPage: Page = (props) => {
  const { user, refetch, isLoading } = useUser("/login");
  const router = useRouter();

  const checkout = (plan: string) => {
    createCheckoutSession({ plan })
      .then((res) => {
        if (res?.url) {
          window.location.href = res.url;
        } else {
          refetch().then(() => router.push("/dashboard/billing"));
        }
      })
      .catch((err) => {
        showError("Error", "Cannot generate checkout session");
      });
  };
  const confirmModal = useDisclosure();
  const [planChosen, setPlanChosen] = useState<string | undefined>("");

  const ChoosePlanButton: React.FC<{ plan: string } & ButtonProps> = ({ plan, ...props }) =>
    user?.subscription.title === plan ? (
      <Button isLoading={isLoading} isDisabled isFullWidth colorScheme="gray" mt={4} {...props}>
        Current Plan
      </Button>
    ) : (
      <Button
        isLoading={isLoading}
        onClick={() => {
          if (user?.subscription.title === "free") {
            checkout(plan);
          } else {
            setPlanChosen(plan);
            confirmModal.onOpen();
          }
        }}
        isFullWidth
        mt={4}
        colorScheme="brand"
        {...props}
      >
        {user?.subscription.title === "free" ? "Upgrade" : plan === "free" ? "Revert Plan" : "Change Plan"}
      </Button>
    );

  return (
    <>
      <ConfirmModal
        title="Warning"
        onCancel={confirmModal.onClose}
        onConfirm={() => {
          checkout(planChosen as string);
        }}
        isOpen={confirmModal.isOpen}
      >
        {planChosen === "free"
          ? "Your plan will be cancelled at the end of billing period."
          : "Change plan may cost additional charge at next billing."}
      </ConfirmModal>
      <Container maxW="container.xl" p={4}>
        <Link href="/dashboard/billing">
          <Button leftIcon={<ChevronLeftIcon />} variant="link" _hover={{ textDecor: "none" }}>
            Back to Billing
          </Button>
        </Link>
        <SimpleGrid mt={8} columns={{ base: 1, sm: 2, lg: 4 }} spacing={4}>
          <FreePlan>
            <ChoosePlanButton plan="free" />
          </FreePlan>
          <Box bgColor="brand.500" borderRadius="xl" color="white" px={4}>
            <ProPlan>
              <ChoosePlanButton plan="pro" colorScheme="cyan" color="white" />
            </ProPlan>
          </Box>
          <TeamsPlan>
            <ChoosePlanButton plan="teams" />
          </TeamsPlan>
          <EnterprisePlan>
            <Link href="mailto:hi@omniedge.io">
              <Button isFullWidth variant="outline" mt={4} colorScheme="teal">
                Contact us
              </Button>
            </Link>
          </EnterprisePlan>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ChoosePlanPage;
