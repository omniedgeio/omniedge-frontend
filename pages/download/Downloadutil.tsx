import React, { useState } from 'react'
import { CopyBlock, nord } from 'react-code-blocks'
import VideoPlayer from '../../components/VideoPlayer'
import { Image, chakra, Link, Icon, Button, Text, Heading, Box, VStack, useColorModeValue } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { FaQrcode } from 'react-icons/fa'
import QRCode from 'qrcode.react'
import { useTranslation } from "react-i18next";
import Markdown from 'markdown-to-jsx';
export function DownloadButton({ text = 'Download', url = '' }) {
  if (text !== '') {
    return (
      <>
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
      </>
    )
  } else {
    return (<></>)
  }
}
export function DownloadCaption({ text = 'Download' }) {
  return (<Text color="#aeaeb2">{text}</Text>)
}

interface IPropss {
  texts: string[];
}

export interface DescriptionText {
  step: string;
  code: string;
}

export interface DescriptionProps {
  texts: DescriptionText[];
}

export const Description: FunctionComponent<DescriptionProps> = ({ texts }) => {
  return (<>
    {texts.map((text) => {
      if (text.step === "null" || text.code === "null") {
        return (<>
          {text.step != 'null' && (<Text fontSize="14px" fontWeight="400" color="gray.900" lineHeight="20px" gap="4px" paddingTop="8px" paddingBottom="4px"><Markdown>{text.step}</Markdown></Text>)}
        </>
        )
      } else {
        return (<>
          {text.step != 'null' && (<Text fontSize="14px" fontWeight="400" color="gray.900" lineHeight="20px" gap="4px" paddingTop="8px" paddingBottom="4px"><Markdown>{text.step}</Markdown></Text>)}
          {text.code != 'null' && (<CopyBlock
            language="bash"
            text={text.code}
            codeBlock
            theme={nord}
            showLineNumbers={false}
          />)}

        </>)
      }

    }
    )}
  </>
  )
}

interface lstupdate {
  year: number;
  month: string;
  date: number;
}

interface descinfo {
  title: string;
  instructions: string[];
  instructionGifLink: string;
  instructionsVideoLink: string;
}

interface Platforminfo extends lstupdate, descinfo {
  [status: string]: any;
  displayName: string;
  link: string;
  showQRCode: boolean;
  version: string;
  buttonText: string;
  captionText: string;
  lastUpdate: lstupdate;
  description: descinfo;
}

export const DownloadDescription: React.FC<{ desc: Platforminfo, active?: boolean }> = function ({ desc,active }) {
  const [showingQRCode, setShowingQRCode] = useState(false)
  const { t } = useTranslation("platforms", { keyPrefix: `${desc.displayName}` })
  if (!active) {
    return null
  }
  if (desc.status == 'COMING_SOON') {
    if (desc.displayName == 'iOS') {
      return (<>
        <VStack mt={3}>
          <Text fontSize="24px" fontWeight="600" lineHeight="32px" color="gray.900" textAlign="center" paddingTop="40px">
            {t("description.title")}
          </Text>
          <Text fontSize="14px" fontWeight="500" lineHeight="20px" color="gray.500" textAlign="center" paddingTop="8px">
            {t("description.sub-title-1")}<br></br>
            {t("description.sub-title-2")}<br></br>
          </Text>

          <Text fontSize="14px" fontWeight="500" lineHeight="20px" color="gray.500" textAlign="center" paddingTop="36px">
            <DownloadButton text={t("ButtonText")} url="https://forms.gle/QNP2VPbRtxKyPWNC7" />
          </Text>


        </VStack>
      </>)
    }
    else {
      return (<> <div className="font-bold">{desc.displayName} is coming soon</div></>)
    }
  } else if (desc.status == 'LIVE') {
    return (<>
      <VStack mt={3}>
        <Text fontSize="24px" fontWeight="600" lineHeight="32px" color="gray.900" textAlign="center" paddingTop="40px">{t('description.title')}
        </Text>
        <Text fontSize="14px" fontWeight="500" lineHeight="20px" color="gray.500" textAlign="center" paddingTop="8px">

          {t("captionText") && (<>
            <DownloadCaption
              text={
                t("captionText")
              }
            />
            <DownloadCaption
              text={
                ` ${t("lastUpdate.title")} ${t("version")}, ${t("lastUpdate.month")} ${t("lastUpdate.date")}, ${t("lastUpdate.year")}.`
              }
            />
            </>
          )}</Text>

        {(t("buttonText") != "") &&
          (<Text fontSize="14px" fontWeight="500" lineHeight="20px" color="gray.500" textAlign="center" paddingTop="36px">
            <DownloadButton text={t("buttonText") ?? 'Download'} url={t("link") ?? ''} />
            {desc.showQRCode && (
              <div className="qrCodeContainer">
                <button
                  onClick={() => {
                    setShowingQRCode(!showingQRCode)
                  }}
                >
                  <code>{t('showQRCode')}</code> <Icon as={FaQrcode} />
                </button>
                {showingQRCode && (
                  <QRCode className=".qrCode" value={desc.link} renderAs={'svg'} />
                )}
              </div>
            )}
          </Text>)
        }


        <Text paddingTop="36px">

          <Description texts={t("description.instructions", { returnObjects: true })} />

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