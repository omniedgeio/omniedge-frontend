import { Heading, VStack } from "@chakra-ui/react";
import DevicesTable from "../../../components/devices/Table";
import DashboardLayout from "../../../components/layout/Dashboard";
import { Page } from "../../../types";
import {useTranslation} from "react-i18next";

const DevicePage: Page = function (props) {
  const {t, i18n} = useTranslation('dashboard')
  return (
    <VStack alignItems="flex-start" spacing="4">
      <DevicesTable />
    </VStack>
  );
};

DevicePage.layout = DashboardLayout;

export default DevicePage;
