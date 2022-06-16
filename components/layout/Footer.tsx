import {
  chakra,
  HStack,
  Box,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  VStack,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaDiscord, FaGithub, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";
import { Brand } from "../Brand";
import Link from "../next/Link";
import CookieConsent from "react-cookie-consent";
import {useTranslation} from "react-i18next";

export const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
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
  const {t, i18n} = useTranslation('footer')
  return (
    <>
    <Box>
      <HStack spacing='270px'>
    <Box w='275px' gap="16px">
        <VStack textAlign="center">
            <Link href="/" _hover={{ color: "inherit" }}>
              <Brand />
            </Link>
            <Text fontSize="sm">
              {t('copyright')}<br />
              {/* Presented from<br /> */}
              {/* US | AU | CN | DE | MY */}
            </Text>
            <Stack direction={"row"} spacing={3}>
              <SocialButton label={"Twitter"} href="https://twitter.com/omniedgeio">
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href="https://www.youtube.com/channel/UCe6OYOyfWDkSkN7LQ3Rp8_g">
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Github"} href="https://github.com/omniedgeio">
                <FaGithub />
              </SocialButton>
              <SocialButton label={"Medium"} href="https://omniedge.medium.com/">
                <FaMedium />
              </SocialButton>
              <SocialButton label={"Discord"} href="https://discord.gg/FY6Yd6jcPu">
                <FaDiscord />
              </SocialButton>
            </Stack>
          </VStack>
      </Box>
    <Box gap="240px" w='687px' display={{ base: "none", md: "flex" }}>
        <VStack alignItems="center" paddingTop="44px" paddingBottom="44px">
      <Stack direction={["column", "row"]} alignItems="flex-start">
              <HStack spacing="240px" color="gray.600" fontSize="14px" fontWeight="500" lineHeight="20px">
                <VStack>
                  <Link href="/about">{t('about')}</Link>
            <Link href="/docs">{t('docs')}</Link>
            <Link href="/contactus">{t('contact')}</Link>
            <Link href="https://forms.gle/a1h3pYb7H4jvZPQU9"> {t('survey')}</Link>
                </VStack>
                <VStack>
          
                  <Link href="/terms">{t('tos')}</Link>
            <Link href="/privacy">{t('privacy')}</Link>
            <Link href="/docs/article/Opensource">{t('opensource')}</Link>
                </VStack>

              </HStack>

      </Stack>
    </VStack>
            
      </Box>
  </HStack>

    </Box>
      <CookieConsent>{t('cookie')}<br /></CookieConsent>
    </>
  );
}
