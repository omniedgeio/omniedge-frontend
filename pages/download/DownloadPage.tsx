import {
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Center,
  Flex,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react'
import {DownloadDescription} from './Downloadutil'
import Icon from './Icon'
import { useRouter } from 'next/router'
import DefaultLayout from "../../components/layout/Default";

const downloadMetaLink = '/assets/download/download-link.json'
const platforms = ['macos', 'ios', 'windows', 'android', 'linuxcli', 'linuxgui','rasp', 'synology','router']


export function DownloadPage({ platform: selectedPlatform }) {
  const router = useRouter()
  const [data, setData] = useState({ status: 'LOADING' })

  function routePlatform(platform) {
    router.push(`/download/${platform ?? ''}`)
  }

  // load data dynamically everytime this page is visited
  useEffect(() => {
    fetch(downloadMetaLink)
      .then((response) => response.json())
      .then((meta) => {
        setData({ status: 'LOADED', ...meta })
      })
      .catch((error) => {
        console.error(error)
        setData({ status: 'ERROR' })
      })
  }, [])

  return (<>
   <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="3xl"
      >
    <VStack mt={10}>
      <Heading fontWeight="semibold" fontSize="2xl">
      OmniEdge Downloads
      </Heading>
      <Text>
      Click on the preferred icon for download. <br></br>
    OmniEdge evaluation version is still in beta, and has not received an independ security audit, <br></br>
    should be considered experimental software.The protocol is developed based on <a href="https://github.com/ntop/n2n" target="_blank">n2n</a>.
    <br></br> OmniEdge evaluation version is now open source on <a href="https://github.com/omniedgeio" target="_blank">github</a>
      </Text>
      <br></br>
<SimpleGrid columns={[2, null, 5]} spacing="px">
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
<div className="mt-12">
  {data.status === 'ERROR' && (
    <div>
      Could not connect. Please find information manually at
      <a href={downloadMetaLink}> {downloadMetaLink} </a>
      or contact support.
    </div>
  )}
  {data.status === 'LOADING' && <div>Loading...</div>}
  {data.status === 'LOADED' &&
    platforms.map((platform) => (
      <DownloadDescription
        platform={platform}
        data={data[platform]}
        active={selectedPlatform === platform}
      />
    ))}
</div>
</Center>
        <br></br>
        </VStack>
        </Box>
        </Flex>
        
        </>
  )
}
DownloadPage.layout = DefaultLayout;

export default DownloadPage;
