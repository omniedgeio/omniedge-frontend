import { Box, Heading, HStack, Icon, Text, Tooltip, VStack,Badge } from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";

export const PLANS = {
  free: {
    title: "Starter",
    price: "Free",
    description: "For most people who want to enjoy or try OmniEdge.",
    features: [
      {
        label: "Unlimited data transfer",
        tips: "Data transfer refers to the secure exchange of data between your devices in your own virtual network with omniedge installed.",
      },
      {
        label: "Encrypted, peer-to-peer connection",
        tips: "Traffic over OmniEdge is end-to-end encrypted by Twofish/AES128/ChaCha20 cipers' P2P MESH network.",
      },
      {
        label: "Up to 1 virtual network",
        tips: "Virtual network is an virtual intranet for all your devices and users.",
      },
      {
        label: "Up to 20 devices",
        tips: "A device is any desktop,laptop, phone or cloud instance with OmniEdge installed and activated in your own virtual network.",
      },
      {
        label: "Single user",
        tips: "Virtual network only can have devices from same user.",
      },
      
    ],
  },
  startpro: {
    title: "Starter Pro",
    price: 3,
    focus: true,
    description: "For people who need more virtual networks and devices.",
    features: [
      {
        label: "Unlimited data transfer",
        tips: "Data transfer refers to the secure exchange of data between your devices in your own virtual network with omniedge installed.",
      },
      {
        label: "Encrypted, peer-to-peer connection",
        tips: "Traffic over OmniEdge is end-to-end encrypted by Twofish/AES128/ChaCha20 cipers' P2P MESH network.",
      },
      {
        label: "Up to 2 virtual network",
        tips: "Virtual network is an virtual intranet for all your devices and users.",
      },
      {
        label: "Up to 100 devices",
        tips: "A device is any desktop,laptop, phone or cloud instance with OmniEdge installed and activated in your own virtual network.",
      },
      {
        label: "Single user",
        tips: "Virtual network only can have devices from same user.",
      },
      {
        label: "Sharing Virtual Network",
        tips: "Invite people who you trust to join your private network",
      },
      {
        label: "Customize Supernode",
        tips: "You can use your own Supernode for your virtual network.",
      },
    ],
  },
  pro: {
    title: "Professional",
    price: 5,
    focus: true,
    freetrial: "14 Days Free Trial",
    description: "For most people who want to share virtual network with friends.",
    features: [
      {
        label: "Unlimited data transfer",
        tips: "Data transfer refers to the secure exchange of data between your devices in your own virtual network with omniedge installed.",
      },
      {
        label: "Encrypted, peer-to-peer connection",
        tips: "Traffic over OmniEdge is end-to-end encrypted by Twofish/AES128/ChaCha20 cipers' P2P MESH network.",
      },
      {
        label: "Up to 5 virtual networks",
        tips: "Virtual network is an virtual intranet for all your devices and users.",
      },
      {
        label: "Up to 25 devices",
        tips: "A device is any desktop,laptop, phone or cloud instance with OmniEdge installed and activated in your own virtual network.",
      },
      {
        label: "Up to 5 users",
        tips: "Virtual network only can have devices from maximum of 5 users.",
      },
      {
        label: "Sharing Virtual Network",
        tips: "Invite people who you trust to join your private network",
      },
      {
        label: "Customize Supernode",
        tips: "You can use your own Supernode for your virtual network.",
      },
    ],
  },
  teams: {
    title: "Teams",
    oldprice: "$20",
    price: 10,
    freetrial: "14 Days Free Trial",
    description: "For team that wants to have safe virtual network connection.",
    features: [
      {
        label: "Unlimited data transfer",
        tips: "Data transfer refers to the secure exchange of data between your devices in your own virtual network with omniedge installed.",
      },
      {
        label: "Encrypted, peer-to-peer connection",
        tips: "Traffic over OmniEdge is end-to-end encrypted by Twofish/AES128/ChaCha20 cipers' P2P MESH network.",
      },
      {
        label: "Up to 10 virtual networks",
        tips: "Virtual network is an virtual intranet for all your devices and users.",
      },
      {
        label: "Up to 25 devices",
        tips: "A device is any desktop,laptop, phone or cloud instance with OmniEdge installed and activated in your own virtual network.",
      },
      {
        label: "Up to 10 users",
        tips: "Virtual network only can have devices from maximum of 5 users.",
      },
      {
        label: "Sharing Virtual Network",
        tips: "Invite people who you trust to join your private network",
      },
      {
        label: "Customize Supernode",
        tips: "You can use your own Supernode for your virtual network.",
      },
    ],
  },
  enterprise: {
    title: "Enterprise",
    price: "Let's talk",
    description: "For enterprise or SMEs.",
    features: [
      {
        label: "Unlimited virtual networks, devices and users.",
      },
      {
        label: "Identity provider integration",
      },
      {
        label: "Hardware and Iot integration",
      },
      {
        label: "API",
      },
      {
        label: "White label",
      },
    ],
  },
};

export type PlanFeaturesProps = {
  label: string;
  tips?: string | undefined;
};

export type PlanProps = React.PropsWithChildren<{
  title: string;
  price: string | number;
  oldprice?: string | number;
  description: string;
  freetrial?:string ;
  focus?: boolean | undefined;
  features: PlanFeaturesProps[];
}>;

export const Plan: React.FC<PlanProps> = ({ focus, title, freetrial, oldprice,price, description, features, children }) => {
  return (
    <VStack alignItems="left" key={title} px={2} py={6}>
      <Text fontSize="lg">{title}</Text>
      {typeof price === "string" ? (
        <Heading my={4}>{price}</Heading>
      ) : (<>
        <HStack my={4}>
          <Heading>${price}</Heading>
          <Text>/ per Month</Text>
        </HStack>
        {/* <HStack my={4}>
        <Badge variant='solid' colorScheme='orange'>{freetrial}</Badge>
        </HStack> */}
        </>
      )}
      <Text minH="3em">{description}</Text>
      <Box flexGrow={1} mt={2}>
        {features.map(({ label, tips }) => (
          <Tooltip key={label} hasArrow isDisabled={!tips} label={tips} placement="top">
            <Box mb={1}>
              <Icon as={FiCheck} color={"green.500"} mr={1.5} />
              {label}
            </Box>
          </Tooltip>
        ))}
      </Box>
      {children}
    </VStack>
  );
};

export const FreePlan: React.FC = ({ children }) => {
  return <Plan {...PLANS["free"]}>{children}</Plan>;
};

export const StartProPlan: React.FC = ({ children }) => {
  return <Plan {...PLANS["startpro"]}>{children}</Plan>;
};

export const ProPlan: React.FC = ({ children }) => {
  return <Plan {...PLANS["pro"]}>{children}</Plan>;
};

export const TeamsPlan: React.FC = ({ children }) => {
  return <Plan {...PLANS["teams"]}>{children}</Plan>;
};

export const EnterprisePlan: React.FC = ({ children }) => {
  return <Plan {...PLANS["enterprise"]}>{children}</Plan>;
};
