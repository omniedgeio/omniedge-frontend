import Logo from "./Logo";
import React from "react";
import {
  Heading, HStack,
  chakra,
  Box,
  Flex,
  Icon,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

import {FaTwitter,FaGithub,FaMedium,FaYoutube } from "react-icons/fa";
import {MdEmail } from "react-icons/md";

export const Brand: React.FC = function () {
  return (
    <HStack>
      <Logo h={[6, 8]}></Logo>
      <Heading fontWeight="semibold" fontSize={["md", "1.2rem"]} as="h5">
        OmniEdge
      </Heading>
    </HStack>
  );
};

export const Social:React.FC = function () {
  return (
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="270px"
          fit="cover"
          objectPosition="center"
          src="./background-network.png"
          alt="avatar"
        />
        <Flex alignItems="center" px={6} py={3} bg="brand.500">
          <chakra.h1 mx={3} color="white" fontWeight="bold" fontSize="lg">
            KEEP IN TOUCH
          </chakra.h1>
        </Flex>

        <Box py={4} px={6}>
        FOLLOW OMNIEDGE
          <Flex
            alignItems="center"
            mt={4}
            color={useColorModeValue("gray.700", "gray.200")}
          >
              <a
              className="w-7 mr-4"
              target="_blank"
              rel="noreferrer"
              href="mailto:hi@omniedge.io"
            >
            <Icon as={MdEmail} h={6} w={6} mr={2} />
            </a>
              <a
              className="w-7 mr-4"
              target="_blank"
              rel="noreferrer"
              href="https://omniedge.medium.com/"
            >
            <Icon as={FaMedium} h={6} w={6} mr={2} />
            </a>
            <a
              className="w-7 mr-4"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/omniedgeio"
            >
            <Icon as={FaTwitter} h={6} w={6} mr={2} />
            </a>
            <a
              className="w-7 mr-4 text-primary"
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCe6OYOyfWDkSkN7LQ3Rp8_g"
            >
            <Icon as={FaYoutube} h={6} w={6} mr={2} />
            </a>
            <a
              className="w-7 mr-4 text-primary"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/omniedgeio"
            >
            <Icon as={FaGithub} h={6} w={6} mr={2} />
            </a>
          </Flex>
        </Box>
      </Box>
  );
};


