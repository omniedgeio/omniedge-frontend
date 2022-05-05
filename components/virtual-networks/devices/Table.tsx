import {
  Code,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
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
import { useState } from "react";
import { FiEdit, FiMoreVertical, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import { IVirtualNetworkDeviceResponse } from "../../../lib/api/response";
import { listDevicesOfVirtualNetwork, removeDeviceFromVirtualNetwork } from "../../../lib/api/virtualNetwork";
import { showSuccess } from "../../../lib/helpers/toast";
import ConfirmModal from "../../ConfirmModal";
import RenameModal from "../../devices/RenameModal";
import Link from "../../next/Link";
import {useTranslation} from "react-i18next";

interface IVirtualNetworkDevicesTableProps {
  virtualNetworkId: string;
}

const VirtualNetworkDevicesTable: React.FC<IVirtualNetworkDevicesTableProps> = function ({ virtualNetworkId }) {
  const { data, isLoading, isError, refetch } = useQuery(["virtual-networks", "devices", virtualNetworkId], () =>
    listDevicesOfVirtualNetwork(virtualNetworkId)
  );

  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });

  const confirmModal = useDisclosure();
  const [deviceToRemove, setDeviceToRemove] = useState<IVirtualNetworkDeviceResponse>();

  const renameModal = useDisclosure();
  const [deviceToRename, setDeviceToRename] = useState<IVirtualNetworkDeviceResponse>();
  const {t, i18n} = useTranslation('dashboard')
  return (
    <>
      <RenameModal
        isOpen={renameModal.isOpen}
        device={deviceToRename}
        onSuccess={() => {
          renameModal.onClose();
          showSuccess("Success", "Device renamed successfully");
        }}
        onClose={renameModal.onClose}
      ></RenameModal>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={t('virtualnetwork.removetitle')}
        onConfirm={() => {
          removeDeviceFromVirtualNetwork(virtualNetworkId, deviceToRemove?.id as string).then(() => {
            refetch();
            confirmModal.onClose();
          });
        }}
        onCancel={confirmModal.onClose}
      >{t('virtualnetwork.removeconfirm')} <Code>{deviceToRemove?.name}</Code> 
      </ConfirmModal>
      <Table w="full">
        <TableCaption>
        <span>{t('virtualnetwork.total')}:{data?.data?.length} </span><br/>
          <Link href="/download" color="brand.500">
          {t('virtualnetwork.download')}
          </Link>{" "}
          {t('virtualnetwork.download-desc')}
        </TableCaption>
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "Device" : "Name"}</Th>
            <Th display={["none", "table-cell"]}>{t('virtualnetwork.ip')}</Th>
            <Th display={{ base: "none", md: "table-cell" }}>{t('virtualnetwork.os')}</Th>
            <Th display={["none", "table-cell"]}>{t('virtualnetwork.action')}</Th>
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
            data?.data?.map((device) => {
              const Name = () => <Text>{device.name}</Text>;
              const VirtualIP = () => (
                <Code fontSize={["xs", "sm"]} px="0" bg="white">
                  {device.virtual_ip}
                </Code>
              );
              const Platform = () => <Text fontSize="sm">{device.platform}</Text>;

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
                      onClick={() => {
                        setDeviceToRename(device);
                        renameModal.onOpen();
                      }}
                      icon={<FiEdit />}
                    >
                      {t('virtualnetwork.rename')}
                    </MenuItem>
                    <MenuDivider></MenuDivider>
                    <MenuItem
                      color="red.500"
                      onClick={() => {
                        setDeviceToRemove(device);
                        confirmModal.onOpen();
                      }}
                      icon={<FiX />}
                    >
                      {t('virtualnetwork.removebutton')}
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={device.id}>
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
                            <Platform />
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
                    <Platform />
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

export default VirtualNetworkDevicesTable;
