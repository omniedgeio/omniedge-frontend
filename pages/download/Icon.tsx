import React from 'react'
import styles from './Icon.module.css'
import {Image } from "@chakra-ui/react";


const macOSIcon = (isSelected:boolean) => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5855 30H7.4145C5.805 30 4.5 28.695 4.5 27.0855V8.9145C4.5 7.305 5.805 6 7.4145 6H28.584C30.195 6 31.5 7.305 31.5 8.9145V27.084C31.5 28.695 30.195 30 28.5855 30V30Z"strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
<path d="M11.25 12.75V15"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
<path d="M24 12.75V15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
<path d="M16.5 19.41H19.98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
<path d="M18.7815 6C17.334 10.0725 16.5 14.607 16.5 19.4115" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
<path d="M19.9834 19.4115C19.9834 23.07 20.3374 26.6175 21.0004 30" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
<path d="M25.5 22.125C21.3585 25.6245 14.6415 25.6245 10.5 22.125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
</svg>

)
const iOSIcon = (isSelected:boolean) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 13.6C4.5 10.2397 4.5 8.55953 5.15396 7.27606C5.7292 6.14708 6.64708 5.2292 7.77606 4.65396C9.05953 4 10.7397 4 14.1 4H21.9C25.2603 4 26.9405 4 28.2239 4.65396C29.3529 5.2292 30.2708 6.14708 30.846 7.27606C31.5 8.55953 31.5 10.2397 31.5 13.6V21.4C31.5 24.7603 31.5 26.4405 30.846 27.7239C30.2708 28.8529 29.3529 29.7708 28.2239 30.346C26.9405 31 25.2603 31 21.9 31H14.1C10.7397 31 9.05953 31 7.77606 30.346C6.64708 29.7708 5.7292 28.8529 5.15396 27.7239C4.5 26.4405 4.5 24.7603 4.5 21.4V13.6Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
<path d="M9.82396 13.2714C9.06614 13.2714 8.4707 13.8668 8.4707 14.6246C8.4707 15.3824 9.06614 15.9779 9.82396 15.9779C10.5818 15.9779 11.1772 15.3824 11.1772 14.6246C11.1772 13.8668 10.5818 13.2714 9.82396 13.2714Z"
fill={isSelected ? 'white' : 'black'}/>
<path d="M16.6404 21.7876H15.9084C14.8674 21.7876 14.0244 20.9446 14.0244 19.9036V16.0216C14.0244 14.9806 14.8674 14.1376 15.9084 14.1376H16.6404C17.6814 14.1376 18.5244 14.9806 18.5244 16.0216V19.9036C18.5244 20.9446 17.6814 21.7876 16.6404 21.7876V21.7876Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
<path d="M22.4121 20.853C22.7346 21.384 23.2881 21.75 23.9571 21.75H25.4571C26.2851 21.75 26.9571 21.078 26.9571 20.25V19.8315C26.9571 19.1865 26.5446 18.612 25.9311 18.408L23.4831 17.592C22.8711 17.388 22.4571 16.815 22.4571 16.1685V15.75C22.4571 14.922 23.1291 14.25 23.9571 14.25H25.4571C26.1231 14.25 26.6751 14.6145 26.9976 15.1425" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
<path d="M9.82422 17.8501V21.6001" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
stroke={isSelected ? 'white' : 'black'}/>
</svg>

)
const winIcon = (isSelected:boolean) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 27V9L29.5 6V30L6.5 27Z" stroke={isSelected ? 'white' : 'black'}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5 8V28" stroke={isSelected ? 'white' : 'black'}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.5 18H29.5" stroke={isSelected ? 'white' : 'black'}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)
const androidIcon = (isSelected:boolean) => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5996 4L14.6246 6.025" stroke={isSelected ? 'white' : 'black'}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.4 4L21.375 6.025" stroke={isSelected ? 'white' : 'black'}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M24.6004 26.9499H11.4004C10.5724 26.9499 9.90039 26.2779 9.90039 25.4499V13.45H26.1004V25.4499C26.1004 26.2779 25.4284 26.9499 24.6004 26.9499Z" stroke={isSelected ? 'white' : 'black'}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.1004 13.45C26.1004 8.97698 22.4734 5.34998 18.0004 5.34998C13.5274 5.34998 9.90039 8.97698 9.90039 13.45" stroke={isSelected ? 'white' : 'black'}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M30 13.375V21.625" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 13.375V21.625" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.9502 26.95V31" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0498 26.95V31" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)
const linuxguiIcon = (isSelected:boolean) => (
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 30H6C4.3425 30 3 28.65 3 27V9C3 7.335 4.3425 6 6 6H30C31.65 6 33 7.335 33 9V27C33 28.65 31.65 30 30 30Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 19.5H22.5" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12L12 15L9 18" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

)
const linuxcliIcon =(isSelected:boolean) =>(
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 30H6C4.3425 30 3 28.65 3 27V9C3 7.335 4.3425 6 6 6H30C31.65 6 33 7.335 33 9V27C33 28.65 31.65 30 30 30Z" stroke={isSelected ? 'white' : 'black'}strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 19.5H22.5" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12L12 15L9 18" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
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
      return 'macOS'
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
      return 'Beta >'
    case 'ios':
      return 'TestFlight >'
    case 'android':
      return 'Stable >'
    case 'windows':
      return 'Stable >'
    case 'rasp':
      return 'Stable >'
    case 'synology':
      return 'Beta >'
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