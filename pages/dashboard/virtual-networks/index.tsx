import { Button, Heading, HStack, VStack, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { useMemo } from "react";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import VirtualNetworksTable from "../../../components/virtual-networks/Table";
import { UsageKey } from "../../../lib/api/enum";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";
import { listVirtualNetworks } from "../../../lib/api/virtualNetwork";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import { startCase } from "lodash";

const VirtualNetworkPage: Page = () => {
  const { user, isLoading } = useUser("/login");
  const { data: virtualNetworks } = useQuery("virtual-networks", () => listVirtualNetworks({}));
  const { t, i18n } = useTranslation('dashboard')

  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          {t('virtualnetwork.title')}
        </Heading>
        {user?.usage_limits &&
          Object.entries(user?.usage_limits).map(([key, value]) => (
            (key==="devices" || key==="virtual-networks")? (
            <><Link href={( Number(value.limit - value.usage > 0)) ? "/dashboard/virtual-networks/create" : "/dashboard/billing/choose-plan"}>
                <Button isLoading={isLoading} size="sm" _hover={{ textDecoration: "none" }}>
                {t('virtualnetwork.createvnplus')}
                </Button>
              </Link></>):(<></>)
          ))}
      </HStack>
      <VirtualNetworksTable />
    </VStack>
  );
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
