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
          url: 'https://omniedge.io/download/linuxgui',
          title: 'OmniEdge Linux GUI - Download',
          description:
            'OmniEdge Linux GUI - download OmnieEdge now!',
        }}
      />
      
      <DownloadPage platform='linuxgui'/>
    </>
  )
}
Download.layout = DefaultLayout;

export default Download;