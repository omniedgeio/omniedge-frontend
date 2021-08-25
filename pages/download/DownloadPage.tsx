import {
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from 'react'
import {DownloadDescription,DownloadDescriptioninfo} from './Downloadutil'
import Icon from './Icon'
import { useRouter } from 'next/router'
const downloadMetaLink = '/assets/download/download-link.json'
const platforms = ['macos', 'ios', 'windows', 'android', 'linuxcli', 'linuxgui','rasp', 'synology','router']

interface realplatform {
  platform:string
  // selectedPlatform:string;
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

    <VStack padding="4" mt={10}>
      <Heading fontWeight="semibold" fontSize="2xl">
      OmniEdge Downloads
      </Heading>
      <Text>
      Click on the preferred icon for download. <br></br>
    OmniEdge evaluation version is still in beta, and has not received an independ security audit, <br></br>
    should be considered experimental software.The protocol is developed based on <a href="https://github.com/ntop/n2n" target="_blank" rel="noreferrer">n2n</a>.
    <br></br> OmniEdge evaluation version is now open source on <a href="https://github.com/omniedgeio" target="_blank" rel="noreferrer">github</a>
      </Text>
      <br></br>
<SimpleGrid columns={[2, null, 5]} spacing="px">
  {platforms.map((platform, index) => (
    <Icon
      key={index}
      variant={platform}
      selected={platform}
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
  {data.status === 'LOADED' && <div>Loaded</div>  &&
    platforms.map((platform,i) => (
      <>
      <DownloadDescription desc={data[platform]} active={platform==selectedPlatform}/>
      </>

    ))}
</div>

</Center>

        </VStack>
        </>
  )
}
export default DownloadPage;
