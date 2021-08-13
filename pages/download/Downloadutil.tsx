import React, { useState } from 'react'
import {FaQrcode } from "react-icons/fa"
import QRCode from 'qrcode.react'
import { CopyBlock, nord } from 'react-code-blocks'
import VideoPlayer from '../../components/VideoPlayer'
import {Icon} from './Icon'
import { Heading,chakra,Center,Box,useColorModeValue,Flex } from "@chakra-ui/react";

export function DownloadButton({ text = 'Download', url = '', props }) {
  return (
    <button className="downloadButton" {...props}>
      <a
        target="_blank"
        href={url}
        className=""
      >
        {text}
      </a>
    </button>
  )
}

export function DownloadCaption({ text = 'Download', props }) {
  return (
    <div className="downloadCaption" {...props}>
        {text}
    </div>
  )
}

function Description({ texts }) {
  return (
    <div className="description">
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
              className="descriptionLine"
              dangerouslySetInnerHTML={{ __html: text.trim() }}
              key={index}
            />
          )
        }
      })}
    </div>
  )
}

// Need to pass in props:
export function DownloadDescription(props) {
  const [showingQRCode, setShowingQRCode] = useState(false)

  if (!props.active) {
    return null
  }

  const {
    buttonText,
    captionText,
    description,
    displayName,
    lastUpdate,
    link,
    showQRCode,
    status,
    version,
  } = props?.data

  if (status === 'COMING_SOON') {
    return <div className="font-bold">{displayName} is coming soon</div>
  } else if (status === 'LIVE') {
    return (<>
    <Flex
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        rounded="lg"
        bg={useColorModeValue("white", "gray.800")}
        maxW="3xl"
      >
  

        <Box p={6}>
          <Box>
              {/* {showQRCode && (
          <div className="qrCodeContainer">
            or scan
            <button
              className="qrCodeButton"
              onClick={() => {
                setShowingQRCode(!showingQRCode)
              }}
            >
              <code>QR Code</code> <Icon as={FaQrcode} h={6} w={6} mr={2} />
              
            </button>
            {showingQRCode && (
              <QRCode className="qrCode" value={link} renderAs={'svg'} />
            )}
          </div>
        )} */}
            <chakra.p
              mt={2}
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              <Center><DownloadButton text={buttonText ?? 'Download'} url={link ?? ''} /></Center>
               {captionText && (
          <DownloadCaption
            text={
              captionText +
              ` Last update: Version ${version}, ${lastUpdate.month} ${lastUpdate.date}, ${lastUpdate.year}.`
            }
          />
        )}
            </chakra.p>
            <Heading fontSize="xl" textAlign="center">{description.title}</Heading>
            <Description texts={description.instructions} />
        {description.instructionsVideoLink && (
          <VideoPlayer url={description.instructionsVideoLink} />
        )}
        {!description.instructionsVideoLink &&
          description.instructionGifLink && (
            <img
              className="instructionGif"
              src={description.instructionGifLink}
              alt=""
            />
          )}
          </Box>

  
        </Box>
      </Box>
    </Flex>
        
          </>
    )
  }

  return null
}
