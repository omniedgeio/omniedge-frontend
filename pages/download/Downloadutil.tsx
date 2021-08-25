import React, { useState } from 'react'
import { CopyBlock, nord } from 'react-code-blocks'
import VideoPlayer from '../../components/VideoPlayer'
import {Icon} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import {FaQrcode} from 'react-icons/fa'
import QRCode from 'qrcode.react'

export function DownloadButton({ text = 'Download', url = ''}) {
  return (
    <button className="downloadButton">
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        className=""
      >
        {text}
      </a>
    </button>
  )
}
export function DownloadCaption({ text = 'Download' }) {
  return (<div className="downloadCaption">{text}</div>)}

interface IPropss {
	texts: string[]; 
}
export const Description: FunctionComponent<IPropss> = ({ texts }) => {
  return (<>
  {texts.map((text, index) => {
        if (text.startsWith('#CODE')) {
          return (
            <CopyBlock
              language="text"
              text={text.replace('#CODE', '').trim()}
              codeBlock
              theme={nord}
              showLineNumbers={false}
              key={index}
            />
          )
        } else {
          return (
            <p
              className=".descriptionLine"
              dangerouslySetInnerHTML={{ __html: text.trim() }}
              key={index}
            />
          )
        }
      })}
  </>)
}
interface lstupdate {
  year:number;
  month:string;
  date:number;
}

interface descinfo {
  title:string;
  instructions:string[];
  instructionGifLink:string;
  instructionsVideoLink:string;
}

interface Platforminfo extends lstupdate,descinfo {
  [status: string]: any
  displayName:string;
  link:string;
  showQRCode:boolean;
  version:string;
  buttonText:string;
  captionText:string;
  lastUpdate:lstupdate;
  description:descinfo;
}

interface DownloadDescriptioninfo extends Platforminfo{
  active:boolean;
  desc: Platforminfo;
}

export const DownloadDescription: React.FC<DownloadDescriptioninfo> = function ({desc,active}) {
  const [showingQRCode, setShowingQRCode] = useState(false)
  if (!active) {
    return null
  }
  if (desc.status=='COMING_SOON') {
    return(<> <div className="font-bold">{desc.displayName} is coming soon</div></>)
  } else if (desc.status=='LIVE') {
    return (
      <div className="text-center">
        <DownloadButton text={desc.buttonText ?? 'Download'} url={desc.link ?? ''} />
        {desc.showQRCode && (
          <div className="qrCodeContainer">
            or scan
            <button
              className="qrCodeButton"
              onClick={() => {
                setShowingQRCode(!showingQRCode)
              }}
            >
              <code>QR Code</code> <Icon as={FaQrcode} />
            </button>
            {showingQRCode && (
              <QRCode className=".qrCode" value={desc.link} renderAs={'svg'} />
            )}
          </div>
        )}
        {desc.captionText && (
          <DownloadCaption
            text={
              desc.captionText +
              ` Last update: Version ${desc.version}, ${desc.lastUpdate.month} ${desc.lastUpdate.date}, ${desc.lastUpdate.year}.`
            }
          />
        )}
        <p className="font-bold text-xl text-center">{desc.description.title}</p>
        <Description texts={desc.description.instructions} />
        {desc.description.instructionsVideoLink && (
          <VideoPlayer url={desc.description.instructionsVideoLink} />
        )}
        {!desc.description.instructionsVideoLink &&
          desc.description.instructionGifLink && (
            <img
              className=".instructionGif"
              src={desc.description.instructionGifLink}
              alt=""
            />
          )}
      </div>
    )
  }
  return null
}