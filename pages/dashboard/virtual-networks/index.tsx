import {
  Button, Heading, HStack, VStack, Modal, ModalOverlay,
  ModalContent, ModalFooter, ModalCloseButton, ModalHeader, ModalBody,
  useToast, Input
} from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/dist/client/router";
import DashboardLayout from "@/components/layout/Dashboard";
import Link from "@/components/next/Link";
import VirtualNetworksTable from "@/components/virtual-networks/Table";
import { useUser } from "@/lib/hook/useUser";
import { listVirtualNetworks } from "@/lib/api/virtualNetwork";
import { getTwoFactorStatus, requestToken, verifyTwoFactor } from "@/lib/api/twoFactor";
import { Page } from "../../../types";

import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";

const VirtualNetworkPage: Page = () => {
  const [showTwoFactorModal, setTwoFactorModal] = React.useState<boolean>(false);
  const [isTwoFactorVerified, setIsTwoFactorVerified] = React.useState<boolean>(false);
  const [token, setToken] = React.useState<string | undefined>(undefined);
  const { user, isLoading } = useUser("/login");
  const toast = useToast();
  const router = useRouter();
  const { data: virtualNetworks } = useQuery("virtual-networks", () => listVirtualNetworks({}));
  const { t, i18n } = useTranslation('dashboard')
  const checkTwoFactor = async (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const link = e.currentTarget.href;
    if (link.indexOf('/dashboard/virtual-networks/create') >= 0 && !isTwoFactorVerified) {
      const res = await getTwoFactorStatus();
      if (res && res.enable) {
        const innerRes = await requestToken();
        if (innerRes) {
          toast({
            title: t('twofactor.request-token'),
            description: innerRes.message
          })
          setTwoFactorModal(true);
        }
      } else {
        router.push(link);
      }
    } else {
      router.push(link);
    }
  };

  const onTokenChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setToken(e.currentTarget.value);
  }
  const onClose = () => {
    setTwoFactorModal(!showTwoFactorModal);
    setToken('');
  }

  const verifyTwoFactorToken = async () => {
    if (token) {
      const res = await verifyTwoFactor(token);
      if (res?.is_valid) {
        setTwoFactorModal(false);
        setIsTwoFactorVerified(true);
        router.push('/dashboard/virtual-networks/create');
      }
    }
  }
return (
  <VStack w="full" alignItems="flex-start" spacing="4">
    
    <VirtualNetworksTable />
    <Modal isOpen={showTwoFactorModal} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{t('twofactor.verify-two-factor')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input type='nubmer' placeholder="token" value={token} onChange={onTokenChange} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            {t('twofactor.cancel')}
          </Button>
          <Button variant='ghost' onClick={verifyTwoFactorToken} disabled={!token}>{t('twofactor.verify')}</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </VStack>
);
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
