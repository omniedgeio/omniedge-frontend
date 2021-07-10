import {
  Button,
  Code,
  CodeProps,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Skeleton,
  StackProps,
  Table,
  Tbody,
  Td,
  Text,
  TextProps,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { FiEdit, FiMoreVertical, FiServer, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import NoSSR from "../../../components/next/NoSSR";
import { listVirtualNetworks } from "../../../lib/api/virtualNetwork";
import { Page } from "../../../types";

const VirtualNetworkListTable: React.FC = function () {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });

  const { data: virtualNetworks, isLoading, isError } = useQuery("virtual-networks", listVirtualNetworks);

  return (
    <Table w="full">
      <Thead>
        <Tr>
          <Th pl="0">{isPhone ? "Virtual Network" : "Name"}</Th>
          <Th display={["none", "table-cell"]}>IP Range</Th>
          <Th display={{ base: "none", lg: "table-cell" }}>Server</Th>
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
            <Td display={{ base: "none", lg: "table-cell" }}>
              <Skeleton h="4" />
            </Td>
            <Td display={["none", "table-cell"]}>
              <Skeleton h="4" />
            </Td>
          </Tr>
        ) : (
          virtualNetworks?.map(({ uuid, name, ip_range, server }) => {
            const Name = (props: TextProps) => <Text {...props}>{name}</Text>;
            const IPRange = (props: CodeProps) => (
              <Code fontSize={["xs", "sm"]} px="0" bg="white" {...props}>
                {ip_range}
              </Code>
            );
            const Server = (props: StackProps) => (
              <HStack fontSize={["xs", "md"]} {...props}>
                <ReactCountryFlag svg countryCode={server.country} />
                <Text>{server.name}</Text>
              </HStack>
            );
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
                  <MenuItem icon={<FiServer />}>View Devices</MenuItem>
                  <MenuItem icon={<FiEdit />}>Rename</MenuItem>
                  <MenuDivider my="1" />
                  <MenuItem color="red.500" icon={<FiX />}>
                    Remove
                  </MenuItem>
                </MenuList>
              </Menu>
            );

            return (
              <Tr key={uuid}>
                <Td px="0">
                  {!isPhone ? (
                    <Name />
                  ) : (
                    <HStack justifyContent="space-between">
                      <VStack spacing="1" alignItems="flex-start">
                        <Name />
                        <HStack spacing="1">
                          <IPRange />
                          <Text>•</Text>
                          <Server />
                        </HStack>
                      </VStack>
                      <ActionMenu />
                    </HStack>
                  )}
                </Td>
                <Td display={["none", "table-cell"]}>
                  <IPRange />
                </Td>
                <Td display={{ base: "none", lg: "table-cell" }}>
                  <Server />
                </Td>
                <Td display={["none", "table-cell"]}>
                  <HStack>
                    <Link href={`/dashboard/virtual-networks/${uuid}`}>
                      <Button size="sm" colorScheme="brand">
                        View Devices
                      </Button>
                    </Link>
                    <ActionMenu />
                  </HStack>
                </Td>
              </Tr>
            );
          })
        )}
      </Tbody>
    </Table>
  );
};

const VirtualNetworkPage: Page = function (props) {
  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading size="md" fontWeight="semibold">
          Virtual Networks
        </Heading>
        <Link href="/dashboard/virtual-network/create">
          <Button size="sm" _hover={{ textDecoration: "none" }}>
            + Network
          </Button>
        </Link>
      </HStack>
      <NoSSR>
        <VirtualNetworkListTable />
      </NoSSR>
    </VStack>
  );
};

VirtualNetworkPage.layout = DashboardLayout;

export default VirtualNetworkPage;
