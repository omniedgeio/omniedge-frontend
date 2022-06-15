import React from 'react'
import styles from './Icon.module.css'

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
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 9C33 7.335 31.65 6 30 6H6C4.3425 6 3 7.335 3 9V27C3 28.65 4.3425 30 6 30H30C31.65 30 33 28.65 33 27" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29 10H35Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33 16V20" stroke={isSelected ? 'white' : 'black'} strokeWidth="2"/>
<path d="M7 10H17Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29 20H35Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


)
const synologyIcon = (isSelected:boolean) => (
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 30H6C4.3425 30 3 28.65 3 27V9C3 7.335 4.3425 6 6 6H30C31.65 6 33 7.335 33 9V27C33 28.65 31.65 30 30 30Z" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 10H13Z" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 10H19Z" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 10H25Z" stroke="#0F172A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



  )

const routerIcon = (isSelected:boolean) => (
<svg width="60" height="65" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4258 3.77344C10.4258 3.09422 9.87453 2.54297 9.19531 2.54297C8.51609 2.54297 7.96484 3.09422 7.96484 3.77344V22.2305H10.4258V3.77344Z" stroke={isSelected ? 'white' : 'black'}/>
<path d="M35.0352 3.77344C35.0352 3.09422 34.4839 2.54297 33.8047 2.54297C33.1255 2.54297 32.5742 3.09422 32.5742 3.77344V22.2305H35.0352V3.77344Z" stroke={isSelected ? 'white' : 'black'}/>
<path d="M39.6289 24.6914H3.37109C1.78797 24.6914 0.5 25.9794 0.5 27.5625V34.125C0.5 35.7081 1.78797 36.9961 3.37109 36.9961H5.50391V38.2266C5.50391 38.9061 6.05483 39.457 6.73438 39.457C7.41392 39.457 7.96484 38.9061 7.96484 38.2266V36.9961H35.0352V38.2266C35.0352 38.9061 35.5861 39.457 36.2656 39.457C36.9452 39.457 37.4961 38.9061 37.4961 38.2266V36.9961H39.6289C41.212 36.9961 42.5 35.7081 42.5 34.125V27.5625C42.5 25.9794 41.212 24.6914 39.6289 24.6914ZM6.73438 32.0742C6.05483 32.0742 5.50391 31.5233 5.50391 30.8438C5.50391 30.1642 6.05483 29.6133 6.73438 29.6133C7.41392 29.6133 7.96484 30.1642 7.96484 30.8438C7.96484 31.5233 7.41392 32.0742 6.73438 32.0742ZM16.5781 32.0742C15.8986 32.0742 15.3477 31.5233 15.3477 30.8438C15.3477 30.1642 15.8986 29.6133 16.5781 29.6133C17.2577 29.6133 17.8086 30.1642 17.8086 30.8438C17.8086 31.5233 17.2577 32.0742 16.5781 32.0742ZM21.5 32.0742C20.8205 32.0742 20.2695 31.5233 20.2695 30.8438C20.2695 30.1642 20.8205 29.6133 21.5 29.6133C22.1795 29.6133 22.7305 30.1642 22.7305 30.8438C22.7305 31.5233 22.1795 32.0742 21.5 32.0742ZM26.4219 32.0742C25.7423 32.0742 25.1914 31.5233 25.1914 30.8438C25.1914 30.1642 25.7423 29.6133 26.4219 29.6133C27.1014 29.6133 27.6523 30.1642 27.6523 30.8438C27.6523 31.5233 27.1014 32.0742 26.4219 32.0742ZM31.3438 32.0742C30.6642 32.0742 30.1133 31.5233 30.1133 30.8438C30.1133 30.1642 30.6642 29.6133 31.3438 29.6133C32.0233 29.6133 32.5742 30.1642 32.5742 30.8438C32.5742 31.5233 32.0233 32.0742 31.3438 32.0742Z" stroke={isSelected ? 'white' : 'black'}/>
<path d="M15.413 12.452C17.0422 10.823 19.2039 9.92578 21.5001 9.92578C23.7962 9.92578 25.958 10.823 27.5871 12.452C27.8274 12.6923 28.1423 12.8125 28.4572 12.8125C28.772 12.8125 29.087 12.6924 29.3272 12.452C29.8077 11.9715 29.8077 11.1924 29.3272 10.7119C24.9949 6.37957 18.0059 6.37883 13.6729 10.7119C13.1924 11.1924 13.1924 11.9715 13.6729 12.452C14.1534 12.9326 14.9326 12.9326 15.413 12.452Z" stroke={isSelected ? 'white' : 'black'}/>
<path d="M20.8163 19.562C21.6465 20.1085 22.7301 19.5103 22.7301 18.5391C22.7301 17.9074 22.2502 17.3796 21.621 17.3144C20.3365 17.1966 19.7653 18.8524 20.8163 19.562V19.562Z" stroke={isSelected ? 'white' : 'black'}/>
<path d="M25.8512 15.9281C26.3315 15.4474 26.3312 14.6683 25.8504 14.188C24.6877 13.0264 23.1428 12.3867 21.5002 12.3867C19.8575 12.3867 18.3126 13.0264 17.1499 14.188C16.6691 14.6683 16.6688 15.4474 17.1491 15.9281C17.6293 16.4089 18.4085 16.4092 18.8892 15.9289C19.5872 15.2316 20.5144 14.8477 21.5002 14.8477C22.4859 14.8477 23.4131 15.2316 24.1111 15.929C24.5917 16.4091 25.3707 16.409 25.8512 15.9281V15.9281Z" stroke={isSelected ? 'white' : 'black'}/>
</svg>
)

const emeddedIcon = (isSelected:boolean) => (

<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 9C33 7.335 31.65 6 30 6H6C4.3425 6 3 7.335 3 9V27C3 28.65 4.3425 30 6 30H30C31.65 30 33 28.65 33 27" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29 10H35Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33 16V20" stroke={isSelected ? 'white' : 'black'} strokeWidth="2"/>
<path d="M7 10H17Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29 20H35Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


)
const nvidiaIcon =(isSelected:boolean) => (
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33 9C33 7.335 31.65 6 30 6H6C4.3425 6 3 7.335 3 9V27C3 28.65 4.3425 30 6 30H30C31.65 30 33 28.65 33 27" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29 10H35Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33 16V20" stroke={isSelected ? 'white' : 'black'} strokeWidth="2"/>
<path d="M7 10H17Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M29 20H35Z" stroke={isSelected ? 'white' : 'black'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


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