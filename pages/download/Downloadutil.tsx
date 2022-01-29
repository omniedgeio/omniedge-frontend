import React, { useState } from 'react'
import { CopyBlock, nord } from 'react-code-blocks'
import VideoPlayer from '../../components/VideoPlayer'
import {Image,chakra,Link,Icon,Button,Text,Heading,Box,VStack,useColorModeValue} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import {FaQrcode} from 'react-icons/fa'
import QRCode from 'qrcode.react'
import Markdown from 'markdown-to-jsx';
export function DownloadButton({ text = 'Download', url = ''}) {
  return (
    <Link
    mb={6} 
    target="_blank"
    rel="noreferrer"
    href={url}
    >
    <Button w="full" colorScheme="brand">
        {text}
        </Button>
      </Link>
  )
}
export function DownloadCaption({ text = 'Download' }) {
  return (<Text color="#aeaeb2">{text}</Text>)}

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
        }
        if (text.startsWith('#')) {
          return (
            <chakra.h3
          mb={2}
          fontSize={{ base: "lg", md: "lg" }}
          // fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "normal" }}
        >{text.replace('#', '').trim()}</chakra.h3>
          )
        }
         else {
          return (
            <p
              dangerouslySetInnerHTML={{ __html: text.trim()}}
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
  [status:string]:any;
  displayName:string;
  link:string;
  showQRCode:boolean;
  version:string;
  buttonText:string;
  captionText:string;
  lastUpdate:lstupdate;
  description:descinfo;
}

export const DownloadDescription: React.FC<{desc:Platforminfo, active?:boolean}> = function ({desc,active}) {

  const [showingQRCode, setShowingQRCode] = useState(false)
  if (!active) {
    return null
  }
  if (desc.status=='COMING_SOON') {
    return(<> <div className="font-bold">{desc.displayName} is coming soon</div></>)
  } else if (desc.status=='LIVE') {
    return (<>
               <VStack mt={3}>
    <chakra.h1
          mb={6}
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
        >
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
      </chakra.h1>
      <Text>
        {desc.captionText && (
          <DownloadCaption
            text={
              desc.captionText +
              ` Last update: Version ${desc.version}, ${desc.lastUpdate.month} ${desc.lastUpdate.date}, ${desc.lastUpdate.year}.`
            }
          />
        )}</Text>
        <chakra.h3
          mb={6}
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
        >{desc.description.title}
        </chakra.h3>
        <Text>
        <Description texts={desc.description.instructions} />
        {desc.description.instructionsVideoLink && (
          <VideoPlayer link={desc.description.instructionsVideoLink} />
        )}
        {!desc.description.instructionsVideoLink &&
          desc.description.instructionGifLink && (
            <Image
              src={desc.description.instructionGifLink}
              alt=""
            />
          )}
          </Text>
          </VStack>
          </>
    )
  }
  return null
}
export default DownloadDescription;