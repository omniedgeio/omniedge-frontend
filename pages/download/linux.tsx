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
          url: 'https://omniedge.io/download/linux',
          title: 'OmniEdge Linux CLI - Download',
          description:
            'OmniEdge Linux CLI - download OmnieEdge now!',
        }}
      />
      
      <DownloadPage platform='linux'/>
    
    </>
  )
}
Download.layout = DefaultLayout;

export default Download;
