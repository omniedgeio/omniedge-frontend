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
          url: 'https://omniedge.io/download/router',
          title: 'OmniEdge for router - Download',
          description:
            'OmniEdge for router - download OmnieEdge now!',
        }}
      />
      <DownloadPage platform='router'/>
    </>
  )
}

Download.layout = DefaultLayout;

export default Download;