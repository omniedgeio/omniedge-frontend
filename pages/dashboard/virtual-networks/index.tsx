import { Button, Heading, HStack, VStack,Alert,AlertIcon } from "@chakra-ui/react";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import VirtualNetworksTable from "../../../components/virtual-networks/Table";
import { Page } from "../../../types";
import { PlanProps, PLANS } from "../../../components/Plans";
import { useUser } from "../../../lib/hook/useUser";
import { createPortalSession } from "../../../lib/api/billing";
import { showError } from "../../../lib/helpers/toast";
import {listVirtualNetworks } from "../../../lib/api/virtualNetwork";
import { useQuery } from "react-query";
const VirtualNetworkPage: Page = function (props) {
  const { user, isLoading } = useUser("/login");

  console.log(user);
  const plan: PlanProps = user?.subscription ? PLANS[user?.subscription.slug as string] : null;
  const {
    data: virtualNetworks,
  } = useQuery("virtual-networks", () => listVirtualNetworks({}));

  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          Virtual Networks
        </Heading>
        {(user?.subscription.slug === "free" && Number(virtualNetworks?.data.length) ==0)||(user?.subscription.slug === "pro" && Number(virtualNetworks?.data.length) <5) || (user?.subscription.slug === "teams" && Number(virtualNetworks?.data.length) <10)? (
     <Link href="/dashboard/virtual-networks/create">
         <Button size="sm" _hover={{ textDecoration: "none" }}>
             + Network
           </Button>
         </Link>
       ) : (
         <Link href="/dashboard/billing/choose-plan" >
         <Button size="sm" _hover={{ textDecoration: "none" }}>
             + Network
           </Button>
         </Link>
       )}
      </HStack>
      {user?.subscription.slug !== "free" ? "Upgrade Plan" :
      <Alert
       status='info'
       alignItems='center'
       justifyContent='center'
       textAlign='center'
       >
    <AlertIcon />
        Need more than one Virtual Network ? 
          <Link href="/dashboard/billing/choose-plan" color="brand.700">
              Upgrade Plan
            </Link>
  </Alert>}
      <VirtualNetworksTable />
    </VStack>
    
  );
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
