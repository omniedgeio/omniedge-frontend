import { Button, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FiCheck, FiX } from "react-icons/fi";
import DefaultLayout from "../components/layout/Default";
import Link from "../components/next/Link";
import { Page } from "../types";

const FeatureText: React.FC<{ active?: boolean }> = (props) => {
  let active = props.active || props.active === undefined;
  return (
    <HStack>
      <Icon color={active ? "brand.500" : "gray.500"} as={active ? FiCheck : FiX}></Icon>
      <Text color={active ? "black" : "gray.500"}>{props.children}</Text>
    </HStack>
  );
};

const PricingPage: Page = () => {
  return (
    <VStack mt={10}>
      <Heading fontWeight="semibold" fontSize="2xl">
        Pricing
      </Heading>
      <Text>Start for free, then grow with us</Text>

      <HStack pt={4} spacing={4}>
        <VStack borderRadius="xl" p={6} border="solid 1px" borderColor="gray.200">
          <Text>Free</Text>
          <HStack height="2.5rem" spacing={1} alignItems="center">
            <Text>$</Text>
            <Text fontSize="2xl" fontWeight="semibold">
              0
            </Text>
          </HStack>
          <Link href="/register" w="full">
            <Button colorScheme="brand" w="full">
              Get Started
            </Button>
          </Link>
          <VStack pt={2} alignItems="start">
            <FeatureText>Unlimited data transfer</FeatureText>
            <FeatureText>Encrypted, peer-to-peer connection</FeatureText>
            <FeatureText>1 virtual network</FeatureText>
            <FeatureText>20 devices</FeatureText>
            <FeatureText>1 user</FeatureText>
            <FeatureText active={false}>Hardware and Iot integration</FeatureText>
            <FeatureText active={false}>Specialist Support</FeatureText>
          </VStack>
        </VStack>
        <VStack borderRadius="xl" p={6} border="solid 1px" borderColor="gray.200">
          <Text>Enterprise</Text>
          <HStack height="2.5rem" spacing={1} alignItems="center">
            <Text fontWeight="medium">Pay based on your needs</Text>
          </HStack>
          <Link href="mailto:hi@omniedge.io" w="full">
            <Button colorScheme="brand" w="full">
              Contact us
            </Button>
          </Link>
          <VStack pt={2} alignItems="start">
            <FeatureText>Unlimited data transfer</FeatureText>
            <FeatureText>Encrypted, peer-to-peer connection</FeatureText>
            <FeatureText>Unlimited virtual network</FeatureText>
            <FeatureText>Unlimited devices</FeatureText>
            <FeatureText>Unlimited user</FeatureText>
            <FeatureText>Hardware and Iot integration</FeatureText>
            <FeatureText>Specialist Support</FeatureText>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

PricingPage.layout = DefaultLayout;

export default PricingPage;
