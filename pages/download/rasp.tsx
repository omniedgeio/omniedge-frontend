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
          url: 'https://omniedge.io/download/rasp',
          title: 'OmniEdge Raspberry PI - Download',
          description:
            'OmniEdge Raspberry PI - download OmnieEdge now!',
        }}
      />
      <DownloadPage platform='rasp'/>
    </>
  )
}
Download.layout = DefaultLayout;

export default Download;