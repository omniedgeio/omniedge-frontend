import React from 'react'
import DownloadPage from './DownloadPage'
import DefaultLayout from "../../components/layout/Default";
import { Seo } from '../../components/Seo';
export function Download() {
  return (
    <>
        <Seo 
      title="OmniEdge Windows - Download" 
      description=" Click on the preferred icon for download. " 
      image="/assets/OmniEdgeall0.5.png" />
      <DownloadPage platform='windows'/>
    </>
  )
}
Download.layout = DefaultLayout;

export default Download;