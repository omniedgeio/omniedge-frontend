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
import { Heros } from "../components/Features";

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
  const { t } = useTranslation("about");
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
          {t("title-1")}
        
        </chakra.h1>
        <br></br>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        ><Markdown>
          {t("subtitle-1")}</Markdown>
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
          {t("title-2")}
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        ><Markdown>
          {t("subtitle-2")}
          
          </Markdown>
        </chakra.p>
</Box>
    </VStack>
    <Heros />
      </>
    
  );
};

About.layout = DefaultLayout;

export default About;
