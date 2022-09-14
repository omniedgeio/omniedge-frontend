import { Center, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/layout/Default";
import DownloadDescription from "./Downloadutil";
import Icon from "./Icon";
import { useTranslation } from "react-i18next";
const platforms = ["macos", "ios", "windows", "android", "linuxcli", "synology","docker","githubaction","router"];
const data = {
  "windows": {
    "status": "LIVE",
    "displayName": "Windows"
  },
  "android": {
    "status": "LIVE",
    "displayName": "Android"
  },
  "linuxcli": {
    "status": "LIVE",
    "displayName": "Linux-cli"
  },
  "linuxgui": {
    "status": "COMING_SOON",
    "displayName": "Linux GUI"
  },
  "macos": {
    "status": "LIVE",
    "displayName": "macOS"
  },
  "ios": {
    "status": "LIVE",
    "displayName": "iOS"
  },
  "rasp": {
    "status": "LIVE",
    "displayName": "Raspberry"
  },
  "synology": {
    "status": "LIVE",
    "displayName": "Synology"

  },
  "docker": {
    "status": "LIVE",
    "displayName": "Docker"
  },
  "githubaction": {
    "status": "LIVE",
    "displayName": "GithubAction"
  },
  "router": {
    "status": "LIVE",
    "displayName": "router"
  },
  "template": {
    "status": "COMING_SOON",
    "displayName": "Raspberry PI"
  }
}
interface realplatform {
  platform: string;
}

export const DownloadPage: React.FC<realplatform> = function ({ platform: selectedPlatform }) {
  const router = useRouter();
  const { t, i18n } = useTranslation('download')


  function routePlatform(text?: string) {
    router.push(`/download/${text ?? ""}`);
  }



  return (
    <>
      <DefaultLayout>
        <VStack padding="4" spacing="4" alignItems="center" paddingTop="40px">
          <Stack spacing="8" direction={["column", "row"]} alignItems="flex-start">
            <VStack mt={10}>
              <Text
                fontSize="36px" fontWeight="700" lineHeight="40px" color="gray.900"
              >
                {t('title')}
              </Text>
              <Text fontSize="14px" fontWeight="500" lineHeight="20px" color="gray.500" textAlign="center" paddingBottom="60px">{t('subtitle')}</Text>
              <SimpleGrid columns={[3, null, 9]} spacing="16px">
                {platforms.map((platform, index) => (
                  <Icon
                    key={index}
                    variant={platform}
                    selected={selectedPlatform}
                    onClick={() => routePlatform(platform)}
                    displaystatus={false}
                  />
                ))}
              </SimpleGrid>
              <Center>
                <VStack maxW="1000" spacing="4">
                  {platforms.map((platform, i) => (
                    <DownloadDescription key={i} desc={data[platform]} displayName={data[platform].displayName} active={platform == selectedPlatform} />
                  ))}
                </VStack>
              </Center>
            </VStack>
          </Stack>
        </VStack>
      </DefaultLayout>
    </>
  );
};
export default DownloadPage;
