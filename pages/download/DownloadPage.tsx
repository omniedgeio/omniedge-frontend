import { Center, chakra, Link, SimpleGrid, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DefaultLayout from "../../components/layout/Default";
import { DownloadDescription } from "./Downloadutil";
import Icon from "./Icon";
import {useTranslation} from "react-i18next";
const downloadMetaLink = "/assets/download/download-link.json";
const platforms = ["macos", "ios", "windows", "android", "linuxcli", "synology", "rasp", "embedded", "nvidia"];
// const platforms = ['macos', 'ios', 'windows', 'android', 'linuxcli', 'linuxgui','rasp', 'synology','router']

interface realplatform {
  platform: string;
}

export const DownloadPage: React.FC<realplatform> = function ({ platform: selectedPlatform }) {
  const router = useRouter();
  const [data, setData] = useState({ status: "LOADING" });
  const {t, i18n} = useTranslation('download')

  function routePlatform(text?: string) {
    router.push(`/download/${text ?? ""}`);
  }

  // load data dynamically everytime this page is visited
  useEffect(() => {
    fetch(downloadMetaLink)
      .then((response) => response.json())
      .then((meta) => {
        setData({ status: "LOADED", ...meta });
      })
      .catch((error) => {
        console.error(error);
        setData({ status: "ERROR" });
      });
  }, [data]);

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
              <SimpleGrid columns={[3, null, 10]} spacing="16px">
                {platforms.map((platform, index) => (
                  <Icon
                    key={index}
                    variant={platform}
                    selected={selectedPlatform}
                    onClick={() => routePlatform(platform)}
                  />
                ))}
              </SimpleGrid>
              <Center>
                <VStack maxW="1000" spacing="4">
                  {data.status === "ERROR" && (
                    <Text>
                      Could not connect. Please find information manually at
                      <Link href={downloadMetaLink}>{downloadMetaLink}</Link>
                      or contact support.
                    </Text>
                  )}
                  {data.status === "LOADING" && <div>Loading...</div>}
                  {data.status === "LOADED" && <div>Loaded</div> &&
                    platforms.map((platform, i) => (
                      <DownloadDescription key={i} desc={data[platform]} active={platform == selectedPlatform} />
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
