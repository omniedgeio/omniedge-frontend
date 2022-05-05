import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useMemo } from "react";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import VirtualNetworksTable from "../../../components/virtual-networks/Table";
import { UsageKey } from "../../../lib/api/enum";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";
import { listVirtualNetworks } from "../../../lib/api/virtualNetwork";
import { useQuery } from "react-query";
import {useTranslation} from "react-i18next";

const VirtualNetworkPage: Page = () => {
  const { user, isLoading } = useUser("/login");
  const { data: virtualNetworks } = useQuery("virtual-networks", () => listVirtualNetworks({}));
  const remainingVirtualNetworks = useMemo(() => {
    if (user && user.usage_limits && user.usage_limits["virtual-networks"]) {
      return user.usage_limits?.[UsageKey.VirtualNetworks].limit - user.usage_limits[UsageKey.VirtualNetworks].usage;
    }
      return 0;
  }, [user]);
  const {t, i18n} = useTranslation('dashboard')
  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          {t('virtualnetwork.title')}
        </Heading>
        <Link
          href={((user?.subscription.slug === "free" && Number(virtualNetworks?.data.length) == 0) ||
          (user?.subscription.slug === "pro" && Number(virtualNetworks?.data.length) < 5) ||
          (user?.subscription.slug === "teams" && Number(virtualNetworks?.data.length) < 10)) ? "/dashboard/virtual-networks/create" : "/dashboard/billing/choose-plan"}
        >
          <Button isLoading={isLoading} size="sm" _hover={{ textDecoration: "none" }}>
          {t('virtualnetwork.createvnplus')}
          </Button>
        </Link>
      </HStack>
      <VirtualNetworksTable />
    </VStack>
  );
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
