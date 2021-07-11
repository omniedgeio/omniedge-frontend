import {
  Code,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { FiMoreVertical, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import ConfirmModal from "../../../../components/ConfirmModal";
import DashboardLayout from "../../../../components/layout/Dashboard";
import Link from "../../../../components/next/Link";
import { IVirtualNetworkDeviceResponse } from "../../../../lib/api/response";
import { removeDeviceFromVirtualNetwork, retrieveVirtualNetwork } from "../../../../lib/api/virtualNetwork";
import { Page } from "../../../../types";

const VirtualNetworkDeviceTable: React.FC<{ uuid: string }> = function ({ uuid }) {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });

  const { data, isLoading, isError, refetch } = useQuery(["virtual-network", uuid], ({ queryKey }) =>
    queryKey[1] ? retrieveVirtualNetwork(queryKey[1]) : null
  );

  const confirmModal = useDisclosure();
  const [deviceToRemove, setDeviceToRemove] = useState<IVirtualNetworkDeviceResponse>();
  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Virtual Network"
        onConfirm={() => {
          removeDeviceFromVirtualNetwork(uuid as string, deviceToRemove?.uuid as string).then(() => {
            refetch();
            confirmModal.onClose();
          });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to remove device <Code>{deviceToRemove?.name}</Code> from this virtual network?
      </ConfirmModal>
      <Table w="full">
        <TableCaption>
          <Link href="/download" color="brand.500">
            Download
          </Link>{" "}
          apps now to enjoy our service
        </TableCaption>
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "Device" : "Name"}</Th>
            <Th display={["none", "table-cell"]}>IP</Th>
            <Th display={{ base: "none", md: "table-cell" }}>OS</Th>
            <Th display={["none", "table-cell"]}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading || isError ? (
            <Tr>
              <Td pl="0">
                <Skeleton h="4" />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
              <Td display={{ base: "none", md: "table-cell" }}>
                <Skeleton h="4" />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
            </Tr>
          ) : (
            data?.devices.map((device) => {
              const Name = () => <Text>{device.name}</Text>;
              const VirtualIP = () => (
                <Code fontSize={["xs", "sm"]} px="0" bg="white">
                  {device.virtual_ip}
                </Code>
              );
              const OS = () => <Text fontSize="sm">Unknown</Text>;

              const ActionMenu = () => (
                <Menu placement="bottom-end">
                  <MenuButton
                    variant={variant}
                    borderRadius="md"
                    as={IconButton}
                    size="sm"
                    icon={<FiMoreVertical />}
                  ></MenuButton>
                  <MenuList py="1.5">
                    <MenuItem
                      color="red.500"
                      onClick={() => {
                        setDeviceToRemove(device);
                        confirmModal.onOpen();
                      }}
                      icon={<FiX />}
                    >
                      Remove
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={uuid}>
                  <Td px="0">
                    {!isPhone ? (
                      device.name
                    ) : (
                      <HStack justifyContent="space-between">
                        <VStack spacing="1" alignItems="flex-start">
                          <Name />
                          <HStack spacing="1">
                            <VirtualIP />
                            <Text>•</Text>
                            <OS />
                          </HStack>
                        </VStack>
                        <ActionMenu />
                      </HStack>
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <VirtualIP />
                  </Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    <OS />
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <ActionMenu />
                  </Td>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
    </>
  );
};
const VirtualNetworkDetailPage: Page = function (props) {
  const router = useRouter();
  const { uuid } = router.query;

  return (
    <VStack alignItems="flex-start" spacing="4">
      <Heading size="md" fontWeight="semibold">
        My Omni Network
      </Heading>
      <VirtualNetworkDeviceTable uuid={uuid as string} />
    </VStack>
  );
};

VirtualNetworkDetailPage.layout = DashboardLayout;

export default VirtualNetworkDetailPage;
