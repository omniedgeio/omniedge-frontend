import platform from 'platform-detect';
import { Page } from "../../types";
import { Seo } from '../../components/Seo';
import { Center, chakra,SimpleGrid,Box,useColorModeValue,VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
const platforms = ["macos", "ios", "windows", "android", "linuxcli","synology","rasp","embedded","nvidia"];
// const platforms = ['macos', 'ios', 'windows', 'android', 'linuxcli', 'linuxgui','rasp', 'synology','router']

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
    }
  }, [])

  return (
    <>
          <Seo 
      title="OmniEdge - Download" 
      description=" Click on the preferred icon for download. " 
      image="/assets/OmniEdgeall0.5.png" />
      <DownloadPage platform={clientPlatform} />
    </>
  )
}


const DownloadPage: React.FC<realplatform> = function ({ platform: selectedPlatform }) {
  const router = useRouter();

  function routePlatform(text?: string) {
    router.push(`/download/${text ?? ""}`);
  }

  return (
    <Box py={8} rounded="xl" backgroundColor={"gray.100"}>
      <Center>
        <chakra.p fontSize="xl" color={useColorModeValue("gray.700", "gray.500")}>
          Available for:
          </chakra.p>
          </Center>
        <VStack mt={5}>
          <SimpleGrid columns={[3, null, 9]}  maxChildWidth='800px'
           spacing="16px">
            {platforms.map((platform, index) => (
              <Icon
                key={index}
                variant={platform}
                selected={selectedPlatform}
                onClick={() => routePlatform(platform)}
              />
            ))}
          </SimpleGrid>
        </VStack>
        <br></br>
        </Box>
        
  );
};

export default Download_feature;