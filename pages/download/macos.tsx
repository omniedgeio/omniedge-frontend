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
          url: 'https://omniedge.io/download/macos',
          title: 'OmniEdge macOS - Download',
          description:
            'OmniEdge macOS - download OmnieEdge now!',
        }}
      />
      <DownloadPage platform='macos'/>
    </>
  )
}

Download.layout = DefaultLayout;

export default Download;