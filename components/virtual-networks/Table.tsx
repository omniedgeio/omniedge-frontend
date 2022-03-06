import {
  Button,
  Code,
  CodeProps,
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
  TextProps,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMoreVertical, FiServer, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import { UserRole } from "../../lib/api/enum";
import { IVirtualNetworkResponse } from "../../lib/api/response";
import { deleteVirtualNetwork, listVirtualNetworks } from "../../lib/api/virtualNetwork";
import { showError, showSuccess } from "../../lib/helpers/toast";
import { useUser } from "../../lib/hook/useUser";
import ConfirmModal from "../ConfirmModal";
import Link from "../next/Link";

export default function VirtualNetworkListTable() {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });
  const [vnToRemove, setVnToRemove] = useState<IVirtualNetworkResponse>();
  const confirmModal = useDisclosure();

  const {
    data: virtualNetworks,
    isLoading,
    isError,
    refetch,
  } = useQuery("virtual-networks", () => listVirtualNetworks({}));

  const { user } = useUser();

  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Virtual Network"
        onConfirm={() => {
          deleteVirtualNetwork(vnToRemove?.id as string)
            .then(() => {
              refetch();
              confirmModal.onClose();
              showSuccess("Virtual Network deleted successfully");
            })
            .catch(() => {
              showError("Error", "Unexpected error: Please try again later");
            });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to remove virtual network <Code>{vnToRemove?.name}</Code> ?
      </ConfirmModal>
      <Table w="full">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "Virtual Network" : "Name"}</Th>
            <Th display={["none", "table-cell"]}>IP Range</Th>
            <Th display={["none", "table-cell"]}>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading || isError ? (
            <Tr>
              <Td px="0">
                <Skeleton h="4" />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
            </Tr>
          ) : (
            virtualNetworks?.data?.map((vn: IVirtualNetworkResponse) => {
              const Name = (props: TextProps) => (
                <Link href={`/dashboard/virtual-networks/${vn.id}`} _hover={{ color: "brand.500" }}>
                  <Text {...props}>{vn.name}</Text>
                </Link>
              );
              const IPRange = (props: CodeProps) => (
                <Code fontSize={["xs", "sm"]} px="0" bg="white" {...props}>
                  {vn.ip_range}
                </Code>
              );
              const ActionMenu = () => (
                <Menu placement="bottom-end">
                  <MenuButton
                    aria-label="menu"
                    variant={variant}
                    borderRadius="md"
                    as={IconButton}
                    size="sm"
                    icon={<FiMoreVertical />}
                  ></MenuButton>
                  <MenuList py="1.5">
                    <Link href={`/dashboard/virtual-networks/${vn.id}`}>
                      <MenuItem display={["flex", "none"]} icon={<FiServer />}>
                        View Devices
                      </MenuItem>
                    </Link>
                    <MenuItem
                      color="red.500"
                      icon={<FiX />}
                      onClick={() => {
                        setVnToRemove(vn);
                        confirmModal.onOpen();
                      }}
                    >
                      Remove
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={vn.id}>
                  <Td px="0">
                    {!isPhone ? (
                      <Name />
                    ) : (
                      <HStack justifyContent="space-between">
                        <VStack spacing="1" alignItems="flex-start">
                          <Name />
                          <HStack spacing="1">
                            <IPRange />
                          </HStack>
                        </VStack>
                        <ActionMenu />
                      </HStack>
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <IPRange />
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <HStack>
                      <Link href={`/dashboard/virtual-networks/${vn.id}`}>
                        <Button size="sm" colorScheme="brand">
                          View Devices
                        </Button>
                      </Link>
                      {vn.role === UserRole.Admin && <ActionMenu />}
                    </HStack>
                  </Td>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
    </>
  );
}
