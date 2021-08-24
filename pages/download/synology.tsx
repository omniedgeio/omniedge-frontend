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
          url: 'https://omniedge.io/download/synology',
          title: 'OmniEdge Synology - Download',
          description:
            'OmniEdge Synology - download OmnieEdge now!',
        }}
      />
      <DownloadPage platform='synology'/>
    </>
  )
}

Download.layout = DefaultLayout;

export default Download;