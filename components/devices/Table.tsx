import {
  Code,
  HStack,
  IconButton,
  IconButtonProps,
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
import { FiEdit, FiMoreVertical, FiServer, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import { listDevices, removeDevice } from "../../lib/api/device";
import { IListDevicesRequest } from "../../lib/api/request";
import { IDeviceResponse } from "../../lib/api/response";
import { showSuccess } from "../../lib/helpers/toast";
import ConfirmModal from "../ConfirmModal";
import Link from "../next/Link";
import RenameModal from "./RenameModal";

interface IDevicesTableProps {
  params?: IListDevicesRequest;
}

const DevicesTable: React.FC = function (props) {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const { data, isLoading, isError, refetch } = useQuery("devices", () => listDevices({}));

  const confirmModal = useDisclosure();
  const [deviceToRemove, setDeviceToRemove] = useState<IDeviceResponse>();

  const renameModal = useDisclosure();
  const [deviceToRename, setDeviceToRename] = useState<IDeviceResponse>();
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
        title="Remove Virtual Network"
        onConfirm={() => {
          removeDevice(deviceToRemove?.id as string).then(() => {
            refetch();
            confirmModal.onClose();
          });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to remove device <Code>{deviceToRemove?.name}</Code> ?
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
            <Th pl="0">Name</Th>
            <Th display={{ base: "none", lg: "table-cell" }}>OS</Th>
            <Th display={["none", "table-cell"]}>Network</Th>
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
            data?.data?.map((device) => {
              const VirtualNetworksList = () => (
                <VStack mt={[2, 0]} alignItems="flex-start">
                  {device.virtual_networks && device.virtual_networks.length > 0 ? (
                    device.virtual_networks?.map(({ id, name, virtual_ip }) => (
                      <HStack key={id}>
                        <Text fontSize="sm">{name}</Text>
                        <Code px="0" bg="white">
                          {virtual_ip}
                        </Code>
                      </HStack>
                    ))
                  ) : (
                    <Text>-</Text>
                  )}
                </VStack>
              );

              const Action = (props: IconButtonProps) => (
                <Menu placement="bottom-end">
                  <MenuButton
                    {...props}
                    aria-label="menu"
                    borderRadius="md"
                    as={IconButton}
                    size="sm"
                    icon={<FiMoreVertical />}
                  ></MenuButton>
                  <MenuList>
                    <Link href={"/dashboard/devices/" + device.id}>
                      <MenuItem icon={<FiServer />}>View Device</MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        setDeviceToRename(device);
                        renameModal.onOpen();
                      }}
                      icon={<FiEdit />}
                    >
                      Rename
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      color="red.500"
                      icon={<FiX />}
                      onClick={() => {
                        setDeviceToRemove(device);
                        confirmModal.onOpen();
                      }}
                    >
                      Remove
                    </MenuItem>
                  </MenuList>
                </Menu>
              );
              return (
                <Tr key={device.id}>
                  <Td px="0">
                    <HStack justifyContent="space-between">
                      <VStack alignItems="flex-start">
                        <Link href={"/dashboard/devices/" + device.id}>
                          <Text>{device.name}</Text>
                        </Link>
                        {isPhone && <VirtualNetworksList />}
                      </VStack>
                      {isPhone && <Action aria-label="menu" variant="ghost" />}
                    </HStack>
                  </Td>
                  <Td display={{ base: "none", lg: "table-cell" }}>{device.platform}</Td>
                  <Td display={["none", "table-cell"]}>
                    <VirtualNetworksList />
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <Action aria-label="menu" />
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

export default DevicesTable;
