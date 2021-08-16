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

const Feature = (props) => {
  return (
    <Box>
      {/* <Icon
        boxSize={12}
        color={useColorModeValue("brand.700")}
        mb={4}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {props.icon}
      </Icon> */}
      <chakra.h3
        mb={3}
        fontSize="xl"
        lineHeight="shorter"
        fontWeight="bold"
        color={useColorModeValue("gray.900")}
      >
        {props.title}
      </chakra.h3>
      <chakra.h3
        mb={3}
        fontSize="xs"
        lineHeight="shorter"
        fontWeight="bold"
        color={useColorModeValue("gray.600")}
      >
        {props.position}
      </chakra.h3>
      <chakra.p
        lineHeight="tall"
        color={useColorModeValue("gray.600", "gray.400")}
        textAlign="left"
      >
        {props.children}
      </chakra.p>
      <br></br>
      <Stack
          display="flex"
          direction={{ base: "column", md: "row" }}
          justifyContent={{ base: "start", md: "center" }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          fontSize="lg"
          color="gray.600"
        >
      <Link href={props.linkedin} w="full"><Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          color="brand.500"
        >    <Icon
        boxSize={10}
        fill="none"
        viewBox="0 0 32 32"
        stroke="currentColor"
        aria-hidden="true"
      >
        {props.icon1}
      </Icon>
        </Flex></Link>
      <Link href={props.twitter} w="full"><Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          color="brand.500"
        >    <Icon
        boxSize={10}
        fill="none"
        viewBox="0 0 32 32"
        stroke="currentColor"
        aria-hidden="true"
      >
        {props.icon2}
      </Icon>
        </Flex></Link>
      <Link href={props.github} w="full"><Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          color="brand.500"
        >    <Icon
        boxSize={10}
        fill="none"
        viewBox="0 0 32 32"
        stroke="currentColor"
        aria-hidden="true"
      >
        {props.icon3}
      </Icon>
        </Flex></Link>
      </Stack>
    </Box>
  );
};

const About: Page = (props) => {
  return (
    <>
    <VStack mt={10}>
    <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "left" }}
        mx="auto"
      >
    <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("gray.900", "gray.100")}
          lineHeight="shorter"
        >
          Simplifying the usage flow of product​.
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        >
          While people talk about #nocode↘︎, we prefer to offer #noconf↘︎ service to our customers. 
They deserved to have more time with families.​ 
We found OmniEdge totally from Twitter, with a team from 4 countries, in post-pandemic era, we embrace remote work to create painless, maintenance-less, secure and affordable products.
        </chakra.p>
</Box>
    </VStack>
    <Box
        w="auto"
        textAlign={{ base: "center", md: "center" }}
        mx="auto"
      >
          <chakra.h1
          mb={3}
          fontSize={{ base: "5xl", md: "4xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("gray.900", "gray.100")}
          lineHeight="shorter"
        >
          Founder Team
        </chakra.h1>
    <Flex
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={20}
        px={{ base: 4, lg: 16, xl: 24 }}
        py={20}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        // shadow="xl"
      >
        <Feature
          title="Yong QIAN"
          position="Founder & CEO"
          linkedin="http://linkedin.com/in/yongqian/"
          icon1={<FaLinkedin size="2lg"/>}
          twitter="https://twitter.com/brucebot"
          icon2={<FaTwitter size="2lg"/>}
          github="https://github.com/omniedgeio"
          icon3={<FaGithub size="2lg"/>}
        >
         Yong QIAN is a serial entrepreneur. He used to build an IIoT startup for automation, serving cusomers from Germany, South Africa and China, and work as a robotics expert for Frimo GmBH to lead the Asia team for around 8 years remotely. He is industrial robotics Cloud platform expert.​
        </Feature>

        <Feature
          title="Dr. Dennis Schwerdel"
          position="Archtect & Protocol"
          github="https://github.com/dswd/vpncloud"
          icon3={<FaGithub size="2lg"/>}
          linkedin=""
          icon1=""
          twitter="https://twitter.com/omniedgeio"
          icon2={<FaTwitter size="2lg"/>}
          
        >
          Dr. Dennis Schwerdel is a peer-to-peer network expert. He has more than 10 years research and enterprise security architect experiece. He is also an AWS Solution Architect Professional. He is the author of opensource p2p project VPNcloud.
        </Feature>

        <Feature
          title="An Li "
          position="Co-Founder & CTO"
          linkedin="https://www.linkedin.com/in/kidylee/"
          icon1={<FaLinkedin size="2lg"/>}
          twitter="https://twitter.com/omniedgeio"
          icon2={<FaTwitter size="2lg"/>}
          github="https://github.com/omniedgeio"
          icon3={<FaGithub size="2lg"/>}
        >
          An Li is the former R&D Software Engineer at State Street Investment Bank in US, where he specialized in blockchain and trust data exchanging development. He implemented the backend of financial project to process big data.​​​​
        </Feature>
        <Feature
          title="Tex Tang "
          position="Full Stack Programmer"
          linkedin=""
          icon1=""
          twitter="https://twitter.com/omniedgeio"
          icon2={<FaTwitter size="2lg"/>}
          github="https://github.com/omniedgeio"
          icon3={<FaGithub size="2lg"/>}
        >
          Tex Tang is the core team member of OmniEdge, he contributes OmniEdge Windows Client, Backend API and Front-End.
        </Feature>
        <Feature
          title="Ivy Xue "
          position="Go Programmer"
          linkedin=""
          icon1=""
          twitter="https://twitter.com/omniedgeio"
          icon2={<FaTwitter size="2lg"/>}
          github="https://github.com/omniedgeio"
          icon3={<FaGithub size="2lg"/>}
        >
          Ivy Xue is the core team member of OmniEdge, he contributes OmniEdge Cli Client and Backend API.
        </Feature>
        <Feature
          title="Harri Huang"
          position="C++ Programmer"
          linkedin=""
          icon1=""
          twitter="https://twitter.com/omniedgeio"
          icon2={<FaTwitter size="2lg"/>}
          github="https://github.com/omniedgeio"
          icon3={<FaGithub size="2lg"/>}
        >
          Harri Huang is the core team member of OmniEdge, he contributes OmniEdge Windows Client.
        </Feature>
        <Feature
          title="Randy Dong"
          position="Android Programmer"
          linkedin=""
          icon1=""
          twitter="https://twitter.com/omniedgeio"
          icon2={<FaTwitter size="2lg"/>}
          github="https://github.com/omniedgeio"
          icon3={<FaGithub size="2lg"/>}
        >
          Randy Dong is the core team member of OmniEdge, he contributes OmniEdge Android Client.
        </Feature>
        <Feature
          title="Yi CHEN"
          position="Android Programmer"
          linkedin=""
          icon1=""
          twitter="https://twitter.com/omniedgeio"
          icon2={<FaTwitter size="2lg"/>}
          github="https://github.com/omniedgeio"
          icon3={<FaGithub size="2lg"/>}
        >
          Yi CHEN is the core team member of OmniEdge, he contributes OmniEdge Android Client.
        </Feature>
        <Feature
          title="Samuel Song"
          position="iOS Programmer"
          linkedin=""
          icon1=""
          twitter="https://twitter.com/omniedgeio"
          icon2={<FaTwitter size="2lg"/>}
          github="https://github.com/omniedgeio"
          icon3={<FaGithub size="2lg"/>}
        >
         Samuel Song is the core team member of OmniEdge, he contributes OmniEdge iOS Client.
        </Feature>
      </SimpleGrid>
    </Flex>
    </Box>
    <VStack mt={10}>
    <Box
        w={{ base: "full", md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: "left", md: "left" }}
        mx="auto"
      >
    <chakra.h1
          mb={3}
          fontSize={{ base: "3xl", md: "4xl" }}
          fontWeight={{ base: "bold", md: "extrabold" }}
          color={useColorModeValue("gray.900", "gray.100")}
          lineHeight="shorter"
        >
          Who are OmniEdge Looking For?
        </chakra.h1>
        <chakra.p
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.500"
          lineHeight="base"
        >
          We are looking for talent people who are trying to help others to have a great work life balance by creating great products while enjoying their own work life balance. We are currently not hiring, but are happy to hear from talents. Send us email <Link mailto="hi@omniedge.io">hi@omniedge.io</Link> if you are interested in us.​
        </chakra.p>
</Box>
    </VStack>
      </>
    
  );
};

About.layout = DefaultLayout;

export default About;
