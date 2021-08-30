import {
  chakra,
  HStack,
  IconButton,
  Input,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BiMailSend } from "react-icons/bi";
import { FaGithub, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";
import { Brand } from "../Brand";
import Link from "../next/Link";

const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
      <Stack
        py={8}
        borderTop="solid .05rem"
        borderTopColor="gray.100"
        direction={["column", "row"]}
        alignContent={{ base: "left", md: "center" }}
        justifyContent="space-between"
      >
        <HStack>
          <VStack alignItems="flex-start" spacing={4}>
            <Link href="/" _hover={{ color: "inherit" }}>
              <Brand />
            </Link>
            <Text>
              © 2021 OmniEdge Inc. All rights reserved <br />
            </Text>
            <Text fontSize="sm">
              Presented from
              <br />
              US | AU | CN | DE | MY
            </Text>
            <Stack direction={"row"} spacing={3}>
              <SocialButton label={"Twitter"} href="https://twitter.com/omniedgeio">
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href="https://www.youtube.com/channel/UCe6OYOyfWDkSkN7LQ3Rp8_g">
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Github"} href="https://github.com/omniedgeio/omniedge/discussions">
                <FaGithub />
              </SocialButton>
              <SocialButton label={"Medium"} href="https://omniedge.medium.com/">
                <FaMedium />
              </SocialButton>
            </Stack>
          </VStack>
        </HStack>
        <VStack color="gray.600" display={["none", "flex"]}>
          <Stack align={"flex-start"}>
            <Link href="/about">About us</Link>
            <Link href="/docs">Docs</Link>
            <Link href="/contactus">Contact us</Link>
          </Stack>
        </VStack>
        <VStack color="gray.600" display={["none", "flex"]}>
          <Stack align={"flex-start"}>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </Stack>
        </VStack>
        <VStack textAlign={{ base: "left", md: "center" }}>
          <Stack>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("brand.500", "brand.900")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </VStack>
      </Stack>
    </>
  );
}
