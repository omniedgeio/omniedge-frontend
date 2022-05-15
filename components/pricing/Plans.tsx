import { Button, ButtonProps, HStack, Icon, Spacer, StackProps, Text, Tooltip, VStack } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FiCheck } from "react-icons/fi";
import Link from "../next/Link";

const PlanContainer = ({ children, ...props }: StackProps) => {
  return (
    <VStack
      {...props}
      alignItems="left"
      p={6}
      borderRadius={16}
      borderStyle="solid"
      borderWidth=".1rem"
      borderColor="gray.200"
    >
      {children}
    </VStack>
  );
};

export interface PlanFeatures {
  label: string;
  hint: string;
}

export interface PlanFeaturesProps {
  features: PlanFeatures[];
}

const PlanTitle = ({ title }: { title: string }) => {
  return <Text fontSize="lg">{title}</Text>;
};

const PlanFeatures = ({ features }: PlanFeaturesProps) => {
  return (
    <VStack alignItems="flex-start">
      {features.map((feature) => (
        <Tooltip key={feature.label} hasArrow label={feature.hint}>
          <HStack alignItems="flex-start">
            <Icon mt={1} as={FiCheck} color="green.500"></Icon>
            <Text>{feature.label}</Text>
          </HStack>
        </Tooltip>
      ))}
    </VStack>
  );
};

const PlanDescription = ({ description }: { description: string }) => {
  return <Text>{description}</Text>;
};

const PlanPrice = ({ price }: { price: string }) => {
  const { t, i18n } = useTranslation("pricing");
  return (
    <>
      {typeof price != "string" ? (
        <Text fontSize="3xl" fontWeight="bold">
          {" "}
          $ {price}{" "}
          <Text display="inline" verticalAlign="middle" fontSize="lg" fontWeight="normal">
            / {t("permonth")}
          </Text>
        </Text>
      ) : (
        <>
          <Text fontSize="3xl" fontWeight="bold">
            {" "}
            {price}{" "}
          </Text>
        </>
      )}
    </>
  );
};

const PlanActionButton: React.FC<{ plan: string } & ButtonProps> = ({ plan, ...props }) => {
  const { t } = useTranslation("pricing");
  return (
    <Link href="/dashboard/billing">
      <Button isFullWidth colorScheme="gray" mt={4} {...props}>
        {t("getstarted")}
      </Button>
    </Link>
  );
};

interface PlanProps extends StackProps {
  actionButton?: React.ReactElement;
}

export const FreePlan: React.FC<PlanProps> = ({ actionButton, ...props }) => {
  const { t } = useTranslation("pricing", { keyPrefix: "plans.free" });

  return (
    <PlanContainer {...props}>
      <PlanTitle title={t("title")} />
      <Text fontSize="3xl" fontWeight="bold">
        {t("price")}
      </Text>
      <PlanDescription description={t("description")} />
      <PlanFeatures features={t("features", { returnObjects: true })} />
      <Spacer />
      {actionButton ? actionButton : <PlanActionButton plan="free" />}
    </PlanContainer>
  );
};

export const ProPlan: React.FC<PlanProps> = ({ actionButton, ...props }) => {
  const { t } = useTranslation("pricing", { keyPrefix: "plans.pro" });

  return (
    <PlanContainer {...props}>
      <PlanTitle title={t("title")} />
      <PlanPrice price={t("price")} />
      <PlanDescription description={t("description")} />
      <PlanFeatures features={t("features", { returnObjects: true })} />
      <Spacer />
      {actionButton ? actionButton : <PlanActionButton plan="pro" />}
    </PlanContainer>
  );
};

export const TeamsPlan: React.FC<PlanProps> = ({ actionButton, ...props }) => {
  const { t } = useTranslation("pricing", { keyPrefix: "plans.teams" });

  return (
    <PlanContainer {...props}>
      <PlanTitle title={t("title")} />
      <PlanPrice price={t("price")} />
      <PlanDescription description={t("description")} />
      <PlanFeatures features={t("features", { returnObjects: true })} />
      <Spacer />
      {actionButton ? actionButton : <PlanActionButton plan="teams" />}
    </PlanContainer>
  );
};

export const EnterprisePlan: React.FC<PlanProps> = ({ actionButton, ...props }) => {
  const { t } = useTranslation("pricing", { keyPrefix: "plans.enterprise" });
  const { t: t2 } = useTranslation("pricing");

  return (
    <PlanContainer {...props}>
      <PlanTitle title={t("title")} />
      <PlanPrice price={t("price")} />
      <PlanDescription description={t("description")} />
      <PlanFeatures features={t("features", { returnObjects: true })} />
      <Spacer />

      {actionButton ? (
        actionButton
      ) : (
        <Link href="/contactus">
          <Button isFullWidth variant="outline" mt={4} colorScheme="teal">
            {t2("contact")}
          </Button>
        </Link>
      )}
    </PlanContainer>
  );
};
