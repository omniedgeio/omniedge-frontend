import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Button, ButtonProps, Container, SimpleGrid, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ConfirmModal from "../../../components/ConfirmModal";
import Link from "../../../components/next/Link";
import { EnterprisePlan, FreePlan, ProPlan, TeamsPlan } from "../../../components/pricing/Plans";
import { createCheckoutSession } from "../../../lib/api/billing";
import { showError } from "../../../lib/helpers/toast";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";

const ChoosePlanPage: Page = (props) => {
  const { t } = useTranslation("dashboard");
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
    user?.subscription.slug === plan ? (
      <Button isLoading={isLoading} isDisabled isFullWidth colorScheme="gray" mt={4} {...props}>
        {t("billing.currentplan")}
      </Button>
    ) : (
      <Button
        isLoading={isLoading}
        onClick={() => {
          if (user?.subscription.slug === "free") {
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
        {user?.subscription.slug === "free" ? "Upgrade" : plan === "free" ? t("billing.revert") : t("billing.change")}
      </Button>
    );

  return (
    <>
      <ConfirmModal
        title={t("warning")}
        onCancel={confirmModal.onClose}
        onConfirm={() => {
          checkout(planChosen as string);
        }}
        isOpen={confirmModal.isOpen}
      >
        {planChosen === "free" ? t("cancelnotify") : t("changenotify")}
      </ConfirmModal>
      <Container maxW="container.xl" p={4}>
        <Link href="/dashboard/billing">
          <Button leftIcon={<ChevronLeftIcon />} variant="link" _hover={{ textDecor: "none" }}>
            {t("billing.backtobilling")}
          </Button>
        </Link>
        <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} mt={10} spacing={4}>
          <FreePlan actionButton={<ChoosePlanButton plan="free" />}></FreePlan>
          {/* <StartProPlan>
            <ChoosePlanButton plan="free" />
          </StartProPlan> */}
          <ProPlan actionButton={<ChoosePlanButton plan="pro" colorScheme="cyan" color="white" />}></ProPlan>
          <TeamsPlan actionButton={<ChoosePlanButton plan="teams" />}></TeamsPlan>
          <EnterprisePlan
            actionButton={
              <Link href="mailto:hi@omniedge.io?subject=Mail from OmniEdge website">
                <Button isFullWidth variant="outline" mt={4} colorScheme="teal">
                  {t("billing.contact")}
                </Button>
              </Link>
            }
          ></EnterprisePlan>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ChoosePlanPage;
