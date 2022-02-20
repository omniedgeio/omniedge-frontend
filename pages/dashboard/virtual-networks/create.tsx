import { Heading, VStack } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import DashboardLayout from "../../../components/layout/Dashboard";
import VirtualNetworkForm from "../../../components/virtual-networks/Form";
import { createVirtualNetwork } from "../../../lib/api/virtualNetwork";
import { showError } from "../../../lib/helpers/toast";
import { Page } from "../../../types";

const CreateVirtualNetworkPage: Page = function (props) {
  const router = useRouter();

  return (
    <VStack alignItems="flex-start">
      <Heading fontWeight="semibold" size="md">
        Create Virtual Network
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
