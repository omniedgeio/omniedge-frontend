import React from 'react'
import DownloadPage from './DownloadPage'
import { Seo } from '../../components/Seo';
export function Download() {
  return (
    <>
      <Seo 
      title="OmniEdge for Nvidia JETSON - Download" 
      description=" Click on the preferred icon for download." 
      image="/assets/OmniEdgeall0.5.png" />
      <DownloadPage platform='nvidia'/>
    </>
  )
}

export default Download;