import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  HStack,
  Icon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  VStack
} from "@chakra-ui/react";
import Markdown from "markdown-to-jsx";
import React from "react";
import { useTranslation } from "react-i18next";
import { FiCheck, FiX } from "react-icons/fi";

interface FAQText {
  title: string;
  text: string;
}
interface FeatureTextnumber {
  title: string;
  free: string;
  // startpro:string;
  pro: string;
  team: string;
  enterprise: string;
}

interface Tips {
  text: string;
}
const Tips: React.FC<Tips> = ({ text }) => {
  return (
    <Tooltip hasArrow label={text} placement="auto-start">
      <InfoOutlineIcon />
    </Tooltip>
  );
};

const FAQText: React.FC<FAQText> = ({ title, text }) => {
  return (
    <AccordionItem>
      <AccordionButton _expanded={{ bg: "brand.500", color: "white" }}>
        <Box flex="1" textAlign="left">
          <Text fontWeight="semibold" fontSize="md">
            {title}
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <Markdown>{text}</Markdown>
      </AccordionPanel>
    </AccordionItem>
  );
};

const FeatureText: React.FC<{ active?: boolean; tooltip?: string }> = (props) => {
  let active = props.active || props.active === undefined;
  return (
    <HStack>
      <Icon color={active ? "brand.500" : "gray.500"} as={active ? FiCheck : FiX}></Icon>
      <Text color={active ? "black" : "gray.500"}>{props.children}</Text>
    </HStack>
  );
};

const FeatureTextnumber: React.FC<FeatureTextnumber> = ({ title, free, pro, team, enterprise }) => {
  return (
    <Tr>
      <Td>{title}</Td>
      <Td align="center">{free}</Td>
      <Td align="center">{pro}</Td>
      <Td align="center">{team}</Td>
      <Td align="center">{enterprise}</Td>
    </Tr>
  );
};

const FeatureDesc: React.FC<{ free?: boolean; pro?: boolean; team?: boolean; enterprise?: boolean }> = (props) => {
  let free = props.free || props.free === undefined;
  // let startpro = props.startpro || props.startpro === undefined;
  let pro = props.pro || props.pro === undefined;
  let team = props.team || props.team === undefined;
  let enterprise = props.enterprise || props.enterprise === undefined;
  return (
    <Tr>
      <Td>{props.children}</Td>
      <Td>
        <Icon color={free ? "brand.700" : "gray.300"}  as={free ? FiCheck : FiX}></Icon>
      </Td>
      {/* <Td>
		  <Icon color={startpro ? "brand.700" : "gray.300"} as={startpro ? FiCheck : FiX}></Icon>
		</Td> */}
      <Td>
        <Icon color={pro ? "brand.700" : "gray.300"}  as={pro ? FiCheck : FiX}></Icon>
      </Td>
      <Td>
        <Icon color={team ? "brand.700" : "gray.300"}  as={team ? FiCheck : FiX}></Icon>
      </Td>
      <Td>
        <Icon color={enterprise ? "brand.700" : "gray.300"}  as={enterprise ? FiCheck : FiX}></Icon>
      </Td>
    </Tr>
  );
};

export default function ComparisonTable() {
  const { t } = useTranslation("pricing");

  return (
    <VStack my={10} mx="auto" px={4} spacing={4} paddingTop="60px" paddingBottom="40px" display={["none", "flex"]}>
    <Heading paddingBottom="36px">{t("compare-title")}</Heading>
    <Box px={4} mt={4} mx="auto" border="solid 1px" borderColor="gray.300" borderRadius={4}>
      <TableContainer>
        <Table variant="simple" overflowX="auto">
          <Thead>
            <Tr>
              <Th>{t("features")}</Th>
              <Th>{t("starter")}</Th>
              <Th>{t("professional")}</Th>
              <Th>{t("team")}</Th>
              <Th>{t("enterprise")}</Th>
            </Tr>
          </Thead>
          <Tbody>
            <FeatureTextnumber title={t("virtualnetwork")} free="1" pro="5" team="10" enterprise={t("unlimited")} />
            <FeatureTextnumber title={t("devices")} free="20" pro="25" team="25" enterprise={t("unlimited")} />
            <FeatureTextnumber title={t("users")} free="1" pro="5" team="10" enterprise={t("unlimited")} />
            <FeatureDesc>{t("securitykey")}</FeatureDesc>
            <FeatureDesc>{t("unlimiteddata")}</FeatureDesc>
            <FeatureDesc>{t("p2p")}</FeatureDesc>
            <FeatureDesc>{t("platform")}</FeatureDesc>
            <FeatureDesc free={false} pro={true} team={true}>
              {t("sharing")}
            </FeatureDesc>
            <FeatureDesc free={false} pro={true} team={true}>
              {t("customizesupernode")}
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              {t("subroute")}</FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              {t("sso")}
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              {t("iot")}
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              {t("api")}
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              {t("adminapi")}
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              {t("whitelable")}
            </FeatureDesc>
            <FeatureDesc free={false} pro={false} team={false}>
              {t("specialsupport")}
            </FeatureDesc>
            <FeatureDesc free={false} pro={true}>
              {t("emailsupport")}
            </FeatureDesc>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>

    </VStack>
  );
}
