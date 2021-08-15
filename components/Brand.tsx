import Logo from "./Logo";
import React from "react";
import {
  Heading, HStack,
  chakra,
  Box,
  Image,
  Flex,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

import {FaTwitter,FaGithub,FaMedium,FaYoutube } from "react-icons/fa";
import {MdEmail, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

export const Brand: React.FC = function (props) {
  return (
    <HStack>
      <Logo h={[6, 8]}></Logo>
      <Heading fontWeight="semibold" fontSize={["md", "1.2rem"]} as="h5">
        OmniEdge
      </Heading>
    </HStack>
  );
};

export const Social:React.FC = function (props) {
  return (
    <Flex
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        {/* <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          // src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        /> */}

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
              href="mailto:hi@omniedge.io"
            >
            <Icon as={MdEmail} h={6} w={6} mr={2} />
            </a>
              <a
              className="w-7 mr-4"
              target="_blank"
              href="https://omniedge.medium.com/"
            >
            <Icon as={FaMedium} h={6} w={6} mr={2} />
            </a>
            <a
              className="w-7 mr-4"
              target="_blank"
              href="https://twitter.com/omniedgeio"
            >
            <Icon as={FaTwitter} h={6} w={6} mr={2} />
            </a>
            <a
              className="w-7 mr-4 text-primary"
              target="_blank"
              href="https://www.youtube.com/channel/UCe6OYOyfWDkSkN7LQ3Rp8_g"
            >
            <Icon as={FaYoutube} h={6} w={6} mr={2} />
            </a>
            <a
              className="w-7 mr-4 text-primary"
              target="_blank"
              href="https://github.com/omniedgeio/omniedge/discussions"
            >
            <Icon as={FaGithub} h={6} w={6} mr={2} />
            </a>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};


