import { NextSeo } from 'next-seo'
import React from 'react'
import DownloadPage from './DownloadPage'
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

      <DownloadPage platform='android'/>
    
    </>
  )
}

export default Download;

