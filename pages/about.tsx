import {
  chakra,
  Box,
  SimpleGrid,
  Flex,
  Stack,
  Icon,
  VStack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaLinkedin,FaGithub,FaTwitter} from "react-icons/fa";
import React from "react";
import DefaultLayout from "../components/layout/Default";
import { Page } from "../types";
import Markdown from "markdown-to-jsx";
import {Seo} from "../components/Seo";
import {useTranslation} from "react-i18next";

const Feature = (props:any) => {
  return (
    <Box padding="4"> 
      <chakra.h3
        mb={3}
        fontSize="xl"
        lineHeight="shorter"
        fontWeight="bold"
        color="gray.900"
      >
        {props.title}
      </chakra.h3>
      <chakra.h3
        mb={3}
        fontSize="xs"
        lineHeight="shorter"
        fontWeight="bold"
        color="gray.600"
      >
        {props.position}
      </chakra.h3>
      <Stack
          display="flex"
          direction={"row"}
          justifyContent={"center" }
          color="gray.600"
        >
      <Link href={props.linkedin}><Icon
        boxSize={8}
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        color="brand.500"
      >
        {props.icon1}
      </Icon>
      </Link>
      <Link href={props.twitter}><Icon
        boxSize={8}
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        color="brand.500"
      >
        {props.icon2}
        
      </Icon>
        </Link>
      <Link href={props.github}><Icon
        boxSize={8}
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
        color="brand.500"
      >
        {props.icon3}
      </Icon>
      </Link>
      </Stack>
      <chakra.p
        lineHeight="tall"
        color={useColorModeValue("gray.600", "gray.400")}
        textAlign="left"
      >
        {props.children}
      </chakra.p>
      <br></br>
    </Box>
  );
};

const About: Page = (props) => {
  return (
    <>
          <Seo title="Simplifying the usage flow of product​." description="No Public IP, No Port Forward 
Zero Config, Zero Firewall Rules,OmniEdge rebuilds the intranet on the internet setup easier, without concern." image="/assets/OmniEdgeall0.5.png" />
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
          Simplifying the usage flow of product​.
          
        </chakra.h1>
        <br></br>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        ><Markdown>
          While people talk about #nocode, we prefer to offer #noconf service to our customers. They deserved to have more time with their families.​ We found OmniEdge totally from Twitter, with a team from 6 countries, in the post-pandemic era, we embrace remote work to create painless, maintenance-less, secure, and affordable products.</Markdown>
        </chakra.p>
</Box>
    </VStack>
    
    <VStack mt={10}>
    <Box
        // textAlign={{ base: "center", md: "center" }}
        mx="auto"
        padding="4"
      >
    <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("gray.900", "gray.100")}
          lineHeight="shorter"
          textAlign={"center" }
        >
          Who are OmniEdge Looking For?
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        ><Markdown>
          We are looking for talented people who are trying to help others to have a great work-life balance by creating great products while enjoying their own work-life balance. We are currently not hiring, but are happy to hear from talents. Send us an email [hi@omniedge.io](mailto:hi@omniedge.io) if you are interested in us.​
          </Markdown>
        </chakra.p>
</Box>
    </VStack>
      </>
    
  );
};

About.layout = DefaultLayout;

export default About;
