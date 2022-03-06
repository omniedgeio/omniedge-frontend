import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import { PlanProps, PLANS } from "../../../components/Plans";
import VirtualNetworksTable from "../../../components/virtual-networks/Table";
import { listVirtualNetworks } from "../../../lib/api/virtualNetwork";
import { useUser } from "../../../lib/hook/useUser";
import { Page } from "../../../types";
const VirtualNetworkPage: Page = function (props) {
  const { user, isLoading } = useUser("/login");

  console.log(user);
  const plan: PlanProps = user?.subscription ? PLANS[user?.subscription.slug as string] : null;
  const { data: virtualNetworks } = useQuery("virtual-networks", () => listVirtualNetworks({}));

  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          Virtual Networks
        </Heading>
        
        {(user?.subscription.slug === "free" && Number(virtualNetworks?.data.length) == 0) ||
        (user?.subscription.slug === "pro" && Number(virtualNetworks?.data.length) < Number(user?.usage_limits.virtual_networks.limit)) ||
        (user?.subscription.slug === "teams" && Number(virtualNetworks?.data.length) < Number(user?.usage_limits.virtual_networks.limit)) ? (
          <Link href="/dashboard/virtual-networks/create">
            <Button size="sm" _hover={{ textDecoration: "none" }}>
              + Network
            </Button>
          </Link>
        ) : (
          <Link href="/dashboard/billing/choose-plan">
            <Button size="sm" _hover={{ textDecoration: "none" }}>
              + Network
            </Button>
          </Link>
        )}
      </HStack>
      <VirtualNetworksTable />
      {Number(virtualNetworks?.data.length) < Number(user?.usage_limits.virtual_networks.limit)?(
      <span>You can create another <Link href="/dashboard/virtual-networks/create" color="brand.700" fontSize="lg">{Number(user?.usage_limits.virtual_networks.limit)-Number(virtualNetworks?.data.length)} </Link>{" "} Virtual Networks.</span>
      ) : (
      <span> <Link href="/dashboard/billing/choose-plan" color="brand.700">
      Upgrade Plan
    </Link>{" "}
    to have more virtual networks</span>
      )}
    </VStack>
  );
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
