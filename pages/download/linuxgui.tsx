import React from 'react'
import DownloadPage from './DownloadPage'
import DefaultLayout from "../../components/layout/Default";
import { Seo } from '../../components/Seo';

export function Download() {
  return (
    <>
      <Seo 
      title="OmniEdge Linux Gui - Download" 
      description=" Click on the preferred icon for download. OmniEdge evaluation version is still in beta, and has not received an independent security audit, should be considered experimental software." 
      image="/assets/OmniEdgeall0.5.png" />
      
      <DownloadPage platform='linuxgui'/>
    </>
  )
}
Download.layout = DefaultLayout;

export default Download;