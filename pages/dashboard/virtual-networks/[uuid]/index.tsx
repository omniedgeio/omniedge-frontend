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
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FiMoreVertical, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import DashboardLayout from "../../../../components/layout/Dashboard";
import Link from "../../../../components/next/Link";
import { retrieveVirtualNetwork } from "../../../../lib/api/virtualNetwork";
import { Page } from "../../../../types";

const VirtualNetworkDeviceTable: React.FC<{ uuid: string }> = function ({ uuid }) {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });

  const { data, isLoading, isError } = useQuery(["virtual-network", uuid], ({ queryKey }) =>
    queryKey[1] ? retrieveVirtualNetwork(queryKey[1]) : null
  );

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
          data?.devices.map(({ uuid, name, virtual_ip }) => {
            const Name = () => <Text>{name}</Text>;
            const VirtualIP = () => (
              <Code fontSize={["xs", "sm"]} px="0" bg="white">
                {virtual_ip}
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
                  <MenuItem color="red.500" icon={<FiX />}>
                    Remove
                  </MenuItem>
                </MenuList>
              </Menu>
            );

            return (
              <Tr key={uuid}>
                <Td pl="0">
                  {!isPhone ? (
                    name
                  ) : (
                    <HStack justifyContent="space-between">
                      <VStack spacing="1" alignItems="flex-start">
                        <HStack spacing="1">
                          <Name />
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
