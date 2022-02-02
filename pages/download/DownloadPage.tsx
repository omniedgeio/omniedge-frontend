import { Center, chakra, Link, SimpleGrid, Text, useColorModeValue, VStack,Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { DownloadDescription } from "./Downloadutil";
import DefaultLayout from "../../components/layout/Default";
import Icon from "./Icon";
const downloadMetaLink = "/assets/download/download-link.json";
const platforms = ["macos", "ios", "windows", "android", "linuxcli","synology","rasp","embedded","nvidia"];
// const platforms = ['macos', 'ios', 'windows', 'android', 'linuxcli', 'linuxgui','rasp', 'synology','router']

interface realplatform {
  platform: string;
}

export const DownloadPage: React.FC<realplatform> = function ({ platform: selectedPlatform }) {
  const router = useRouter();
  const [data, setData] = useState({ status: "LOADING" });

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
      <VStack padding="4" spacing="4" alignItems="center">
<Stack spacing="8" direction={["column", "row"]} alignItems="flex-start">
        <VStack mt={10}>
          <chakra.h1
            mb={6}
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            lineHeight="none"
            letterSpacing={{ base: "normal", md: "tight" }}
            color={useColorModeValue("gray.900", "gray.100")}
          >
            Download
          </chakra.h1>
          <Text textAlign="center">
            Click on the preferred icon for download. 
          </Text>
          <br></br>
          <SimpleGrid columns={[3, null, 5]} spacing="16px">
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
                  <Link to={downloadMetaLink}>{downloadMetaLink}</Link>
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
