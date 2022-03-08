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

const VirtualNetworkPage: Page = () => {
  const { user, isLoading } = useUser("/login");
  const { data: virtualNetworks } = useQuery("virtual-networks", () => listVirtualNetworks({}));
  const remainingVirtualNetworks = useMemo(() => {
    if (user && user.usage_limits && user.usage_limits["virtual-networks"]) {
      return user.usage_limits?.[UsageKey.VirtualNetworks].limit - user.usage_limits[UsageKey.VirtualNetworks].usage;
    }
    else 
    {
      return 0
    };
  }, [user]);

  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          Virtual Networks {remainingVirtualNetworks}
        </Heading>
        <Link
          href={((user?.subscription.slug === "free" && Number(virtualNetworks?.data.length) == 0) ||
          (user?.subscription.slug === "pro" && Number(virtualNetworks?.data.length) < 5) ||
          (user?.subscription.slug === "teams" && Number(virtualNetworks?.data.length) < 10)) ? "/dashboard/virtual-networks/create" : "/dashboard/billing/choose-plan"}
        >
          <Button isLoading={isLoading} size="sm" _hover={{ textDecoration: "none" }}>
            + Network
          </Button>
        </Link>
      </HStack>
      <VirtualNetworksTable />
      {/* {remainingVirtualNetworks > 0 ? (
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
      )} */}
    </VStack>
  );
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
