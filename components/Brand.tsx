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
import {useTranslation} from "react-i18next";

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
  const {t, i18n} = useTranslation('index')
  return (
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        Width="768px"
        height="76px"
      >
          {t('keepintouch')}
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
        
        </Box>
  );
};


