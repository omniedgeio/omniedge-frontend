import {
  Box,
  Code,
  Heading,
  SimpleGrid,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import DashboardLayout from "../../../../components/layout/Dashboard";
import { retrieveDevice } from "../../../../lib/api/device";
import { IDeviceSubnetRouteResponse } from "../../../../lib/api/response";
import { Page } from "../../../../types";

const DeviceSubnetTable: React.FC<{ subnet: IDeviceSubnetRouteResponse }> = function ({ subnet }) {
  return (
    <VStack w="full" alignItems="flex-start" spacing={2}>
      <Box>
        <Text fontSize="sm">
          IP Address : <Code background="white">{subnet.ip}</Code>
        </Text>
        <Text fontSize="sm">
          Mac Address : <Code background="white">{subnet.mac_addr?.toUpperCase()}</Code>
        </Text>
      </Box>
      <Table>
        <Thead>
          <Tr>
            <Th px={0}>IP</Th>
            <Th>Mac Address</Th>
            <Th display={["none", "table-cell"]}>Manufacturer</Th>
          </Tr>
        </Thead>
        <Tbody>
          {subnet.devices.map((dev) => (
            <Tr key={dev.ip}>
              <Td px={0} fontFamily="mono" fontSize="sm">
                {dev.ip}
              </Td>
              <Td fontFamily="mono" fontSize="sm">
                {dev.mac_addr?.toUpperCase()}
              </Td>
              <Td display={["none", "table-cell"]}>{dev.manufacturer}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
};

const DeviceSubnetsPage: Page = function (props) {
  const router = useRouter();
  const {
    data: device,
    isLoading,
    isError,
    refetch,
  } = useQuery(["device", router.query.uuid], () =>
    router.query.uuid ? retrieveDevice(router.query.uuid as string) : null
  );

  return isLoading || isError ? (
    <Spinner />
  ) : (
    <VStack alignItems="flex-start" spacing={6}>
      <VStack alignItems="flex-start" w="full">
        <Heading fontWeight="semibold" fontSize="xl">
          {device?.name}
        </Heading>
        <Text fontSize="sm">
          <Text fontWeight="medium" as="span">
            OS
          </Text>{" "}
          : {device?.os}
        </Text>
      </VStack>
      <VStack alignItems="flex-start" w="full">
        <Heading color="gray.500" textTransform="uppercase" fontSize="xs">
          Virtual Networks
        </Heading>
        <SimpleGrid columns={2} spacing={4} alignItems="center">
          {device?.virtual_networks.map((vn) => (
            <>
              <Text>{vn.name}</Text>
              <Code background="white">{vn.virtual_ip}</Code>
            </>
          ))}
        </SimpleGrid>
      </VStack>
      {device?.subnets?.map((subnet) => (
        <VStack alignItems="flex-start" key={subnet.ip}>
          <Heading color="gray.500" textTransform="uppercase" fontSize="xs">
            Subnets
          </Heading>
          <DeviceSubnetTable subnet={subnet}></DeviceSubnetTable>
        </VStack>
      ))}
    </VStack>
  );
};

DeviceSubnetsPage.layout = DashboardLayout;

export default DeviceSubnetsPage;
