import { Heading, VStack } from "@chakra-ui/react";
import DevicesTable from "../../../components/devices/Table";
import DashboardLayout from "../../../components/layout/Dashboard";
import { Page } from "../../../types";

const DevicePage: Page = function (props) {
  return (
    <VStack alignItems="flex-start" spacing="4">
      <Heading size="md" fontWeight="semibold">
        Devices
      </Heading>
      <DevicesTable />
    </VStack>
  );
};

DevicePage.layout = DashboardLayout;

export default DevicePage;
