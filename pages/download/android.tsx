import { NextSeo } from 'next-seo'
import React from 'react'
import DownloadPage from './DownloadPage'
import DefaultLayout from "../../components/layout/Default";
import { Page } from "../../types";

const Download: Page = (props) => {
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
Download.layout = DefaultLayout;

export default Download;

