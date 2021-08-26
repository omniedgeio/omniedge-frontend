import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import DefaultLayout from "../components/layout/Default";
import { Page } from "../types";
import {Faq} from "../components/Faq";

const Contactus: Page = () => {
  return (
    <VStack mt={10}>
      <Heading fontWeight="semibold" fontSize="2xl">
        Contact Us
      </Heading>
      <Text>Tell us about you and your organization, <br /> our expert will contact you.</Text>
      
      <iframe src="https://marketing.omniedge.io/form/1" height="800"><p>Your browser does not support iframes.</p></iframe>

      <br></br>
      <Faq />
    </VStack>
    
  );
};

Contactus.layout = DefaultLayout;

export default Contactus;
