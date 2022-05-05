import {
  Box,
  Code,
  Editable,
  EditableInput,
  EditablePreview,
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
import Link from "../../../../components/next/Link";
import { retrieveDevice, updateDeviceSubnet } from "../../../../lib/api/device";
import { IDeviceSubnetRouteResponse, ISubnetRouteDeviceResponse } from "../../../../lib/api/response";
import { showSuccess } from "../../../../lib/helpers/toast";
import { Page } from "../../../../types";
import {useTranslation} from "react-i18next";

const DeviceSubnetTable: React.FC<{ subnet: IDeviceSubnetRouteResponse; uuid: string }> = function ({ subnet, uuid }) {
  const updateSubnet = (subnetDeviceUUID: string, name: string) => {
    let device = subnet.devices.find(({ uuid }) => uuid == subnetDeviceUUID) as ISubnetRouteDeviceResponse;
    if (!device) {
      return;
    }
    let originalName = device.name;
    if (name != originalName) {
      device.name = name;
      updateDeviceSubnet(uuid, subnet.uuid, subnet)
        .then(() => {
          showSuccess("Rename successfully");
        })
        .catch(() => (device.name = originalName));
    }
  };
  const {t, i18n} = useTranslation('dashboard')
  return (
    <VStack w="full" alignItems="flex-start" spacing={2}>
      <Box>
        <Text fontSize="sm">
        {t('device.ip')} <Code background="white">{subnet.ip}</Code>
        </Text>
      </Box>
      <Table w="full">
        <Thead>
          <Tr>
            <Th px={0}>{t('device.name')}</Th>
            <Th>{t('device.ip')}</Th>
            <Th display={["none", "table-cell"]}>{t('device.manufacturer')}</Th>
          </Tr>
        </Thead>
        <Tbody>
          {subnet.devices.map((dev) => (
            <Tr key={dev.ip}>
              <Td px={0}>
                <Editable onSubmit={(name) => updateSubnet(dev.uuid, name)} defaultValue={dev.name}>
                  <EditablePreview />
                  <EditableInput />
                </Editable>
              </Td>
              <Td fontFamily="mono" fontSize="sm">
                {dev.ip}
              </Td>
              <Td display={["none", "table-cell"]}>{dev.manufacturer}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Text fontWeight="semibold" fontSize="xs" color="gray.500">
      {t('device.clicktorename')}
      </Text>
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
  } = useQuery(["device", router.query.id], () => (router.query.id ? retrieveDevice(router.query.id as string) : null));
  const {t, i18n} = useTranslation('dashboard')
  return isLoading || isError ? (
    <Spinner />
  ) : (
    <VStack w="full" alignItems="flex-start" spacing={6}>
      <VStack alignItems="flex-start" w="full">
        <Heading fontWeight="semibold" fontSize="xl">
          {device?.name}
        </Heading>
        <Text fontSize="sm">
          <Text fontWeight="medium" as="span">
          {t('device.platform')}
          </Text>{" "}
          : {device?.platform}
        </Text>
      </VStack>
      <VStack alignItems="flex-start" w="full">
        <Heading color="gray.500" textTransform="uppercase" fontSize="xs">
        {t('device.virtualnetwork')}
        </Heading>
        {!device?.virtual_networks?.length && (
          <Text>
            <Link href="/download" color="brand.500">
            {t('device.download')}
            </Link>{" "}
            {t('device.download-desc')}
          </Text>
        )}
        <SimpleGrid columns={2} spacing={4} alignItems="center">
          {device?.virtual_networks?.map((vn) => (
            <>
              <Text>{vn.name}</Text>
              <Code background="white">{vn.virtual_ip}</Code>
            </>
          ))}
        </SimpleGrid>
      </VStack>
      {/* {device?.subnets?.map((subnet, index) => (
        <VStack w="full" alignItems="flex-start" key={subnet.ip}>
          <Heading color="gray.500" textTransform="uppercase" fontSize="xs">
            Subnet {index + 1}
          </Heading>
          <DeviceSubnetTable uuid={device.uuid} subnet={subnet}></DeviceSubnetTable>
        </VStack>
      ))} */}
    </VStack>
  );
};

DeviceSubnetsPage.layout = DashboardLayout;

export default DeviceSubnetsPage;
