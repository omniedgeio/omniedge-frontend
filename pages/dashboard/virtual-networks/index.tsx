import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useMemo } from "react";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import VirtualNetworksTable from "../../../components/virtual-networks/Table";
import { UsageKey } from "../../../lib/api/enum";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";

const VirtualNetworkPage: Page = () => {
  const { user, isLoading } = useUser("/login");

  const remainingVirtualNetworks = useMemo(() => {
    if (user && user.usage_limits && user.usage_limits["virtual-networks"]) {
      return user.usage_limits?.[UsageKey.VirtualNetworks].limit - user.usage_limits[UsageKey.VirtualNetworks].usage;
    }
    return 0;
  }, [user]);

  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          Virtual Networks
        </Heading>
        <Link
          href={remainingVirtualNetworks <= 0 ? "/dashboard/billing/choose-plan" : "/dashboard/virtual-networks/create"}
        >
          <Button isLoading={isLoading} size="sm" _hover={{ textDecoration: "none" }}>
            + Network
          </Button>
        </Link>
      </HStack>
      <VirtualNetworksTable />
      {remainingVirtualNetworks > 0 ? (
        <span>
          You can create another{" "}
          <Link href="/dashboard/virtual-networks/create" color="brand.700" fontSize="lg">
            {remainingVirtualNetworks}
          </Link>{" "}
          Virtual Networks.
        </span>
      ) : (
        <span>
          {" "}
          <Link href="/dashboard/billing/choose-plan" color="brand.700">
            Upgrade Plan
          </Link>{" "}
          to have more virtual networks
        </span>
      )}
    </VStack>
  );
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
