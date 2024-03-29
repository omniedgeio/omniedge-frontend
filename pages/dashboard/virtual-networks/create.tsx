import { Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import DashboardLayout from "../../../components/layout/Dashboard";
import VirtualNetworkForm from "../../../components/virtual-networks/Form";
import { createVirtualNetwork } from "../../../lib/api/virtualNetwork";
import { showError } from "../../../lib/helpers/toast";
import { Page } from "../../../types";
import {useTranslation} from "react-i18next";

const CreateVirtualNetworkPage: Page = function (props) {
  const router = useRouter();
  const {t, i18n} = useTranslation('dashboard')
  return (
    <VStack alignItems="flex-start">
      <Heading fontWeight="semibold" size="md">
        {t('virtualnetwork.createvn')}
      </Heading>
      <VirtualNetworkForm
        onSubmit={(values, actions) => {
          createVirtualNetwork(values)
            .then((res) => {
              router.push("/dashboard/virtual-networks");
            })
            .catch((err) => {
              err.data && showError("Error", err.data.message);
              actions.setSubmitting(false);
            });
        }}
      />
    </VStack>
  );
};

CreateVirtualNetworkPage.layout = DashboardLayout;

export default CreateVirtualNetworkPage;
