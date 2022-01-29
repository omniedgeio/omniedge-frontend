import React from 'react'
import DownloadPage from './DownloadPage'
import { Seo } from '../../components/Seo';
export function Download() {
  return (
    <>
      <Seo 
      title="OmniEdge for ARM based Embeded System - Download" 
      description=" Click on the preferred icon for download. " 
      image="/assets/OmniEdgeall0.5.png" />
      <DownloadPage platform='embedded'/>
    </>
  )
}

export default Download;