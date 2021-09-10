import {
  SimpleGrid,
  Text,
  VStack,
  Center,
  chakra,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react';
import {DownloadDescription} from './Downloadutil';
import Icon from './Icon';
import { useRouter } from 'next/router';
const downloadMetaLink = '/assets/download/download-link.json'
const platforms = ['macos', 'ios', 'windows', 'android', 'linuxcli', 'linuxgui','rasp', 'synology','router']

interface realplatform {
  platform:string
}

export const DownloadPage:React.FC<realplatform> = function ({ platform: selectedPlatform }) {
  const router = useRouter()
  const [data, setData] = useState({ status: 'LOADING' })
  
  function routePlatform(text?:string) {
    router.push(`/download/${text ?? ''}`)
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
  }, [data])

  return (<>
<VStack padding="4" alignItems="center">
<VStack mt={10}>
    <chakra.h1
          mb={6}
          fontSize={{ base: "4xl", md: "6xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color={useColorModeValue("gray.900",'gray.100')}
        >
      Download
      </chakra.h1>
      <Text>
      Click on the preferred icon for download. <br></br>
    OmniEdge evaluation version is still in beta, and has not received an independent security audit, <br></br>
    should be considered experimental software. The protocol is developed based on <a href="https://github.com/ntop/n2n" target="_blank" rel="noreferrer">n2n</a>.
    <br></br> OmniEdge evaluation version is now open source on <a href="https://github.com/omniedgeio" target="_blank" rel="noreferrer">GitHub</a>
      </Text>
      <br></br>
<SimpleGrid columns={[3, null, 9]} spacing="10px">
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
  
  <VStack mt={12}>
  {data.status === 'ERROR' && (
    <Text>
      Could not connect. Please find information manually at
      <Link to={downloadMetaLink}>{downloadMetaLink}</Link>
      or contact support.</Text>
  )}
  {data.status === 'LOADING' && <div>Loading...</div>}
  {data.status === 'LOADED' && <div>Loaded</div>  &&
    platforms.map((platform,i) => (
      <DownloadDescription key={i} desc={data[platform]} active={platform==selectedPlatform}/>
    ))}
</VStack>

</Center>
</VStack>
        </VStack>
        </>
  )
}
export default DownloadPage;
