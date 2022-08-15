import { NextSeo } from 'next-seo'
import React from 'react'
import DownloadPage from './DownloadPage'
export function Download() {
  return (
    <>
     <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://omniedge.io/download/githubaction',
          title: 'OmniEdge for Github Action',
          description:
            'Bring Github Action into intranet, access nodes/devices from CI workflows.',
        }}
      />

      <DownloadPage platform='githubaction'/>
    
    </>
  )
}

export default Download;

