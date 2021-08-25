import { NextSeo } from 'next-seo'
import React from 'react'
import DownloadPage from './DownloadPage'
import DefaultLayout from "../../components/layout/Default";

export function Download() {
  return (
    <>
     <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://omniedge.io/download/android',
          title: 'OmniEdge Android - Download',
          description:
            'OmniEdge Android - download OmnieEdge now!',
        }}
      />

      <DownloadPage selectedPlatform='android'/>
    
    </>
  )
}
Download.layout = DefaultLayout;

export default Download;

