import { NextSeo } from 'next-seo';
import React, { useEffect, useState } from 'react';
import platform from 'platform-detect';
import DownloadPage from './DownloadPage';
import DefaultLayout from "../../components/layout/Default";
import { Page } from "../../types";


const Download: Page = (props) => {

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
  }, [platform])

  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://omniedge.io/download',
          title: 'OmniEdge - Download',
          description: 'OmniEdge Downloads - download OmnieEdge now for macOS, windows,instance cloud, linux, raspberry Pi, FreeNAS, Synology!',
        }}
      />
      <DownloadPage platform={clientPlatform} />
    </>
  )
}

Download.layout = DefaultLayout;

export default Download;