import platform from 'platform-detect';
import { Page } from "../../types";
import {chakra,SimpleGrid,Box,VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
const platforms = ["macos", "ios", "windows", "android", "linuxcli","synology","docker","githubaction"];
import {useTranslation} from "react-i18next";

interface realplatform {
  platform: string;
}

export const Download_feature: Page = (props) => {

  const [clientPlatform, setClientPlatform] = useState('')
  
  useEffect(() => {
    if (platform?.ios) {
      setClientPlatform('ios')
    } else if (platform?.linux) {
      setClientPlatform('linuxgui')
    } else if (platform?.windows) {
      setClientPlatform('windows')
    } else if (platform?.android) {
      setClientPlatform('android')
    } else if (platform?.macos) {
      setClientPlatform('macos')
    }else if (platform?.arm) {
      setClientPlatform('arm')
    }
  }, [])

  return (
      <DownloadPage platform={clientPlatform} />
  )
}
export const Downloadlist: Page = (props) => {
    const router = useRouter();
   const {t, i18n} = useTranslation('download')
   function routePlatform(text?: string) {
    router.push(`/download/${text ?? ""}`);
  }
  return (
    <>
    <Box py={8} maxW='1232px' border-radius="12px" backgroundColor={"gray.100"} justify-content="center" >
        <VStack >
        <chakra.p fontSize="20px" color="gray.900">
        {t('available')}
          </chakra.p>
          <SimpleGrid columns={[3, null, 8]} spacing="16px">
            {platforms.map((platform, index) => (
              <Icon
                key={index}
                variant={platform}
                onClick={() => routePlatform(platform)}
                displaystatus={true}
              />
            ))}
          </SimpleGrid>
        </VStack>
        </Box>
        </>
  )
}


const DownloadPage: React.FC<realplatform> = function ({ platform: selectedPlatform }) {
  const router = useRouter();
  function routePlatform(text?: string) {
    router.push(`/download/${text ?? ""}`);
  }
  const {t, i18n} = useTranslation('download')
  return (
    <>
    <Box py={8} maxW='1232px' maxH="204px" border-radius="12px" backgroundColor={"gray.100"} justify-content="center" >
        <VStack >
        <chakra.p fontSize="20px" color="gray.900">
        {t('available')}
          </chakra.p>
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
        </VStack>
        </Box>
        </>
        
  );
};


export default Download_feature;