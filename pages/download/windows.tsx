import { NextSeo } from 'next-seo'
import React from 'react'
import { Page } from "../../types";
import DownloadPage from './DownloadPage'
import DefaultLayout from "../../components/layout/Default";

export function Download() {
  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          url: 'https://omniedge.io/download/windows',
          title: 'OmniEdge Windows - Download',
          description:
            'OmniEdge Windows - download OmnieEdge now!',
        }}
      />
      <DownloadPage platform='windows'/>
    </>
  )
}
Download.layout = DefaultLayout;

export default Download;