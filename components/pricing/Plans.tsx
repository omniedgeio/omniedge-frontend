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
  tips: string;
}

export interface PlanFeaturesProps {
  features: PlanFeatures[];
}

const PlanTitle = ({ title }: { title: string }) => {
  return <Text fontSize="14px" fontWeight="500" lineHeight="20px" color="gray.500">{title}</Text>;
};

const PlanFeatures = ({ features }: PlanFeaturesProps) => {
  return (
    <VStack alignItems="flex-start">
      {features.map((feature) => (
        <Tooltip key={feature.label} hasArrow label={feature.tips}>
          <HStack alignItems="flex-start">
            <Icon mt={1} as={FiCheck} color="blue"></Icon>
            <Text fontSize="14px" fontWeight="400" lineHeight="20px" color="gray.900">{feature.label}</Text>
          </HStack>
        </Tooltip>
      ))}
    </VStack>
  );
};

const PlanDescription = ({ description }: { description: string }) => {
  return <Text fontSize="14px" fontWeight="500" lineHeight="20px" color="gray.900">{description}</Text>;
};

const PlanPrice = ({ price }: { price: string }) => {
  const { t, i18n } = useTranslation("pricing");
  return (
    <>
      {typeof price != "string" && price < 100 ? (
        <Text fontSize="24px" fontWeight="700" lineHeight="32px" color="gray.900">
          {" "}
          $ {price}{" "}
          <Text as='sup' display="inline" verticalAlign="middle" fontSize="14px" fontWeight="400" lineHeight="20px" color="gray.500" >
             {t("permonth")}/{t("peruser")}
          </Text>
        </Text>
      ) : (
        <>
          <Text fontSize="24px" fontWeight="700" lineHeight="32px" color="gray.900">
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
      <Button isFullWidth colorScheme="brand" fontSize="14px" fontWeight="700" lineHeight="20px" mt={4} {...props}>
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
      <Text fontSize="24px" fontWeight="700" lineHeight="32px" color="gray.900">
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

export const EnterprisesmallPlan: React.FC<PlanProps> = ({ actionButton, ...props }) => {
  const { t } = useTranslation("pricing", { keyPrefix: "plans.enterprisesmall" });
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
        <Link href="https://buy.stripe.com/5kAfZKaoR3TFeys7st">
          <Button isFullWidth colorScheme="brand" fontSize="14px" fontWeight="700" lineHeight="20px">
          {t2("getstarted")}
          </Button>
        </Link>
      )}
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
          <Button isFullWidth colorScheme="gray" fontSize="14px" fontWeight="700" lineHeight="20px">
            {t2("contact")}
          </Button>
        </Link>
      )}
    </PlanContainer>
  );
};

export const CompanyPlan: React.FC<PlanProps> = ({ actionButton, ...props }) => {
  const { t } = useTranslation("pricing", { keyPrefix: "plans.Company" });
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
        <Link href="https://buy.stripe.com/28ofZK7cF2PB1LG3ce">
          <Button isFullWidth colorScheme="brand" fontSize="14px" fontWeight="700" lineHeight="20px">
          {t2("getstarted")}
          </Button>
        </Link>
      )}
    </PlanContainer>
  );
};