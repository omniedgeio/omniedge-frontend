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
        Contact Us
      </Heading>
      <Text>Tell us about you and your organization, <br /> our expert will contact you.</Text>
      
      <iframe src="https://marketing.omniedge.io/form/1" height="500"><p>Your browser does not support iframes.</p></iframe>

      <br></br>
    </VStack>
    
  );
};

PricingPage.layout = DefaultLayout;

export default PricingPage;
