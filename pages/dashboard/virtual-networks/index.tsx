import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import VirtualNetworksTable from "../../../components/virtual-networks/Table";
import { Page } from "../../../types";

const VirtualNetworkPage: Page = function (props) {
  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          Virtual Networks
        </Heading>
        <Link href="/dashboard/virtual-networks/create">
          <Button size="sm" _hover={{ textDecoration: "none" }}>
            + Network
          </Button>
        </Link>
      </HStack>
      <VirtualNetworksTable />
    </VStack>
  );
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
