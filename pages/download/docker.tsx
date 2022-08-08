import React from 'react'
import DownloadPage from './DownloadPage'
import { Seo } from '../../components/Seo';
export function Download() {
  return (
    <>
          <Seo 
      title="Run OmniEdge in container" 
      description="Bring container into intranet" 
      image="/assets/OmniEdgeall0.5.png" />
      <DownloadPage platform='docker'/>
    
    </>
  )
}

export default Download;
