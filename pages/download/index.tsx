import React, { useEffect, useState } from 'react';
import platform from 'platform-detect';
import DownloadPage from './DownloadPage';
import DefaultLayout from "../../components/layout/Default";
import { Page } from "../../types";
import { Seo } from '../../components/Seo';

const Download: Page = (props) => {

  const [clientPlatform, setClientPlatform] = useState('')

  useEffect(() => {
    if (platform?.ios) {
      setClientPlatform('ios')
    } else if (platform?.linux) {
      setClientPlatform('linuxgui')
    } else if (platform?.windows) {
      setClientPlatform('windows')
    } else if (platform?.android) {
      setClientPlatform('android')
    } else if (platform?.macos) {
      setClientPlatform('macos')
    }
  }, [platform])

  return (
    <>
          <Seo 
      title="OmniEdge - Download" 
      description=" Click on the preferred icon for download. OmniEdge evaluation version is still in beta, and has not received an independent security audit, should be considered experimental software." 
      image="/assets/OmniEdgeall0.5.png" />
      <DownloadPage platform={clientPlatform} />
    </>
  )
}

Download.layout = DefaultLayout;

export default Download;