import React from 'react'
import styles from './Icon.module.css'
import {Image } from "@chakra-ui/react";


const macOSIcon = (isSelected:boolean) => (
  <Image width="9"  alt="macOS" src={isSelected ? '/assets/download/macosiconwhite.png' : '/assets/download/macosicon.png'} />

)
const iOSIcon = (isSelected:boolean) => (
  <Image width="9"  alt="iOS" src={isSelected ? '/assets/download/iosiconwhite.png' : '/assets/download/iosicon.png'} />

)
const winIcon = (isSelected:boolean) => (
  <Image width="9"  alt="windows" src={isSelected ? '/assets/download/windowsiconwhite.png' : '/assets/download/windowsicon.png'} />

)
const androidIcon = (isSelected:boolean) => (
  <Image width="9"  alt="android" src={isSelected ? '/assets/download/androidiconwhite.png' : '/assets/download/androidicon.png'} />
)
const linuxguiIcon = (isSelected:boolean) => (
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 30H6C4.3425 30 3 28.65 3 27V9C3 7.335 4.3425 6 6 6H30C31.65 6 33 7.335 33 9V27C33 28.65 31.65 30 30 30Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 19.5H22.5" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12L12 15L9 18" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)
const linuxcliIcon =(isSelected:boolean) =>(
<Image width="9"  alt="linux cli" src={isSelected ? '/assets/download/linuxiconwhite.png' : '/assets/download/linuxicon.png'} />
)
const raspIcon = (isSelected:boolean) => (
<Image width="9"  alt="raspberry pi" src={isSelected ? '/assets/download/armiconwhite.png' : '/assets/download/armicon.png'} />
)
const synologyIcon = (isSelected:boolean) => (
<Image width="9"  alt="synology" src={isSelected ? '/assets/download/synologyiconwhite.png' : '/assets/download/synologyicon.png'} />

)

const routerIcon = (isSelected:boolean) => (
<Image width="9"  alt="router" src={isSelected ? '/assets/download/armiconwhite.png' : '/assets/download/armicon.png'} />
)

const emeddedIcon = (isSelected:boolean) => (

<Image width="9"  alt="embeded system" src={isSelected ? '/assets/download/armiconwhite.png' : '/assets/download/armicon.png'} />


)
const nvidiaIcon =(isSelected:boolean) => (
<Image width="9"  alt="nvidia" src={isSelected ? '/assets/download/armiconwhite.png' : '/assets/download/armicon.png'} />
)


function getText(variant:string) {
  switch (variant) {
    case 'linuxcli':
      return 'Linux'
    case 'linuxgui':
      return 'GUI'
    case 'macos':
      return 'macOS CLI'
    case 'ios':
      return 'iOS'
    case 'android':
      return 'Android'
    case 'windows':
      return 'Windows'
    case 'rasp':
      return 'Raspberry'
    case 'synology':
      return 'Synology'
    case 'router':
      return 'Router'
    case 'embedded':
      return 'ARM'
    case 'nvidia':
      return 'Nvidia'  
    default:
      return ''
  }
}

function getStatus(variant:string) {
  switch (variant) {
    case 'linuxcli':
      return 'Stable >'
    case 'linuxgui':
      return 'Developing >'
    case 'macos':
      return 'Stable >'
    case 'ios':
      return 'TestFlight >'
    case 'android':
      return 'Stable >'
    case 'windows':
      return 'Stable >'
    case 'rasp':
      return 'Stable >'
    case 'synology':
      return 'Community >'
    case 'router':
      return 'Developing >'
    case 'embedded':
      return 'Stable >'
    case 'nvidia':
      return 'Stable >'  
    default:
      return ''
  }
}

function getIcon(variant:string, isSelected:boolean) {
  switch (variant) {
    case 'linuxcli':
      return linuxcliIcon(isSelected)
    case 'linuxgui':
      return linuxguiIcon(isSelected)
    case 'macos':
      return macOSIcon(isSelected)
    case 'ios':
      return iOSIcon(isSelected)
    case 'android':
      return androidIcon(isSelected)
    case 'windows':
      return winIcon(isSelected)
    case 'rasp':
      return raspIcon(isSelected)
    case 'synology':
      return synologyIcon(isSelected)
    case 'router':
      return routerIcon(isSelected)
    case 'embedded':
      return emeddedIcon(isSelected)
    case 'nvidia':
      return nvidiaIcon(isSelected)  
    default:
  }
}

interface Downloadicon {
  variant: any;
  selected?: any;
  onClick?: () => void;
  // props:any
}

const DownloadButton: React.FC<Downloadicon> = function ({variant,selected,onClick}) {
  const isSelected = variant === selected
  return (
    <div
      className={`${styles.icon} ${isSelected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {getIcon(variant, isSelected)}
      <p className={`${styles.iconText}`}>{getText(variant)}</p>
      <p className={`${styles.iconStatus}`}>{getStatus(variant)}</p>
    </div>
  )
}



export default DownloadButton;