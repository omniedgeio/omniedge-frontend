import {
  Code,
  Heading,
  HStack,
  IconButton,
  IconButtonProps,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { FiMoreVertical, FiX } from "react-icons/fi";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import { Page } from "../../../types";

const DevicesTable: React.FC = function (props) {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const devices = [
    {
      uuid: "50a4759a-78d7-4d15-8ab1-54357e481898",
      name: "Macbook Air",
      os: "macOS 13.1",
      virtual_networks: [
        {
          uuid: "6b102872-49f8-47f1-85fa-0ddc4b94c240",
          name: "Engineering Team 2",
          virtual_ip: "100.100.0.188",
          last_seen: "0001-01-01T00:00:00Z",
          online: false,
        },
      ],
    },
  ];

  return (
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
        {devices.map(({ uuid, name, os, virtual_networks }) => {
          const VirtualNetworksList = () => (
            <VStack mt={[2, 0]} alignItems="flex-start">
              {virtual_networks.map(({ uuid, name, virtual_ip }) => (
                <HStack key={uuid}>
                  <Text fontSize="sm">{name}</Text>
                  <Code px="0" bg="white">
                    {virtual_ip}
                  </Code>
                </HStack>
              ))}
            </VStack>
          );

          const Action = (props: IconButtonProps) => (
            <Menu placement="bottom-end">
              <MenuButton {...props} borderRadius="md" as={IconButton} size="sm" icon={<FiMoreVertical />}></MenuButton>
              <MenuList>
                <MenuItem color="red.500" icon={<FiX />}>
                  Remove
                </MenuItem>
              </MenuList>
            </Menu>
          );
          return (
            <Tr key={uuid}>
              <Td px="0">
                <HStack justifyContent="space-between">
                  <VStack alignItems="flex-start">
                    <Link
                      _hover={{
                        color: "brand.500",
                      }}
                      href="/device"
                    >
                      {name}
                    </Link>
                    {isPhone && <VirtualNetworksList />}
                  </VStack>
                  {isPhone && <Action aria-label="menu" variant="ghost" />}
                </HStack>
              </Td>
              <Td display={{ base: "none", lg: "table-cell" }}>{os}</Td>
              <Td display={["none", "table-cell"]}>
                <VirtualNetworksList />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Action aria-label="menu" />
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

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
