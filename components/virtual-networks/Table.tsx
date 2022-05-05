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
import {useTranslation} from "react-i18next";

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
  const {t, i18n} = useTranslation('dashboard')
  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={t('virtualnetwork.remove')}
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
        {t('virtualnetwork.removevn')}<Code>{vnToRemove?.name}</Code> ?
      </ConfirmModal>
      <Table w="full">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? t('virtualnetwork.title') : t('virtualnetwork.name')}</Th>
            <Th display={["none", "table-cell"]}>{t('virtualnetwork.iprange')}</Th>
            <Th display={["none", "table-cell"]}>{t('virtualnetwork.action')}</Th>
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
                      {t('virtualnetwork.view')}
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
                      {t('virtualnetwork.removebutton')}
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
                        {t('virtualnetwork.view')}
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
        {((user?.subscription.slug === "free" && Number(virtualNetworks?.data.length) == 1) ||
          (user?.subscription.slug === "pro" && Number(virtualNetworks?.data.length) == 5) ||
          (user?.subscription.slug === "teams" && Number(virtualNetworks?.data.length)==10)) ? (
          <TableCaption>
            <Link href="/dashboard/billing/choose-plan" color="brand.700">
            {t('virtualnetwork.upgradeplan')}
            </Link>{" "}
            {t('virtualnetwork.upgradeplaninfo')}
          </TableCaption>
        ):(
            <TableCaption>
            {t('virtualnetwork.upgradeplaninfo-1')} {" "}
          <Link href="/dashboard/virtual-networks/create" color="brand.700" fontSize="lg">
          {t('virtualnetwork.create')}
          </Link>{" "}
          {t('virtualnetwork.upgradeplaninfo-2')}
          </TableCaption>
        )
      }
      </Table>
    </>
  );
}
