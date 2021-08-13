import { NextSeo } from 'next-seo'
import React from 'react'
import DownloadPage from './DownloadPage'
import DefaultLayout from "../../components/layout/Default";

const Download: Page = (props) => {
  return (
    <>
        <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://omniedge.io/download/linuxcli',
          title: 'OmniEdge Linux CLI - Download',
          description:
            'OmniEdge Linux CLI - download OmnieEdge now!',
        }}
      />
      <DownloadPage platform='linuxcli'/>  
    </>
  )
}

Download.layout = DefaultLayout;

export default Download;
