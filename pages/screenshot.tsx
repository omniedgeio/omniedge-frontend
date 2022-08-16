import {
  chakra,
  Box,
  Image,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import DefaultLayout from "../components/layout/Default";
import { Page } from "../types";
import { Heros } from "../components/Features";


const Screenshot: Page = (props) => {
  return (
    <>
    <VStack padding="4" mt={10}>
    <Box
        textAlign={{ base: "left", md: "left" }}
        mx="auto"
      >
    <chakra.h1
          fontSize={{ base: "5xl", md: "4xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("gray.900", "gray.100")}
          lineHeight="shorter"
          textAlign={'center'}
        >
          Screenshot
        </chakra.h1>
        <Image paddingTop='7px' src="/assets/OmniEdge-clients.png" alt="OmniEdge" />
</Box>
    </VStack>
  
    <Heros />
      </>
    
  );
};

Screenshot.layout = DefaultLayout;

export default Screenshot;
