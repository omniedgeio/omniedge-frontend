import {
  Button,
  Heading,
  HStack,
  SkeletonText,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useQuery, useQueryClient } from "react-query";
import DashboardLayout from "../../../../components/layout/Dashboard";
import VirtualNetworkDevicesTable from "../../../../components/virtual-networks/devices/Table";
import VirtualNetworkForm from "../../../../components/virtual-networks/Form";
import CreateInvitationModal from "../../../../components/virtual-networks/invitations/CreateModal";
import VirtualNetworkInvitationsTable from "../../../../components/virtual-networks/invitations/Table";
import VirtualNetworkUsersTable from "../../../../components/virtual-networks/users/Table";
import { ServerType } from "../../../../lib/api/enum";
import { retrieveVirtualNetwork, updateVirtualNetwork } from "../../../../lib/api/virtualNetwork";
import { showError, showSuccess } from "../../../../lib/helpers/toast";
import { Page } from "../../../../types";

const VirtualNetworkDetailPage: Page = function (props) {
  const router = useRouter();
  const { id } = router.query;

  const result = useQuery(["virtual-network", id], () => (id ? retrieveVirtualNetwork(id as string) : null));
  const queryClient = useQueryClient();
  const createInvitationModal = useDisclosure();

  return (
    <VStack alignItems="flex-start" spacing="4">
      <Heading size="md" fontWeight="semibold">
        <SkeletonText isLoaded={!result.isLoading || !result.isError}>{result.data?.name}</SkeletonText>
      </Heading>
      <Tabs variant="enclosed" colorScheme="brand" w="full">
        <TabList>
          <Tab>Devices</Tab>
          <Tab>Users</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel px={0}>
            {id ? <VirtualNetworkDevicesTable virtualNetworkId={id as string} /> : <Spinner />}
          </TabPanel>
          <TabPanel px={0}>
            {id ? <VirtualNetworkUsersTable virtualNetworkId={id as string} /> : <Spinner />}
            {id ? (
              <>
                <VStack w="full" maxW="container.sm" alignItems="flex-start" mt={[4, 8]}>
                  <HStack w="full" alignItems="center" justifyContent="space-between">
                    <Heading fontSize="md" fontWeight="semibold">
                      Invitation
                    </Heading>
                    <Button onClick={createInvitationModal.onOpen} size="sm">
                      Invite
                    </Button>
                  </HStack>
                  <VirtualNetworkInvitationsTable virtualNetworkId={id as string} />
                </VStack>
                <CreateInvitationModal
                  virtualNetworkId={id as string}
                  isOpen={createInvitationModal.isOpen}
                  onClose={() => {
                    createInvitationModal.onClose();
                    queryClient.invalidateQueries(["virtual-network/invitations", id]);
                  }}
                />
              </>
            ) : (
              <Spinner />
            )}
          </TabPanel>
          <TabPanel px={0}>
            <VirtualNetworkForm
              isCustomSupernode={result.data?.server.type === ServerType.SelfHosted}
              defaultValues={
                result.data
                  ? {
                      name: result.data?.name,
                      ip_range: result.data?.ip_range,
                      ...(result.data?.server.type == ServerType.SelfHosted
                        ? {
                            server: {
                              host: result.data?.server.host.split(":")[0],
                              port: parseInt(result.data?.server.host.split(":")[1]),
                            },
                          }
                        : {}),
                    }
                  : undefined
              }
              onSubmit={(values, actions) => {
                updateVirtualNetwork(result.data?.id as string, values)
                  .then(() => {
                    actions.setSubmitting(false);
                    queryClient.invalidateQueries(["virtual-network", id]);
                    showSuccess(
                      "Success",
                      "Please reload omniedge client in order for customized Supernode to take effect."
                    );
                  })
                  .catch((err) => {
                    err.data && showError("Error", err.data.message);
                    actions.setSubmitting(false);
                  });
              }}
            ></VirtualNetworkForm>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

VirtualNetworkDetailPage.layout = DashboardLayout;

export default VirtualNetworkDetailPage;
