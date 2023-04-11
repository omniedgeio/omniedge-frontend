import {
  Heading,
  Button,
  Box,
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
  Modal, ModalOverlay,
  ModalContent, ModalFooter, ModalCloseButton, ModalHeader, ModalBody,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiMoreVertical, FiServer, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import { UserRole } from "@/lib/api/enum";
import { IVirtualNetworkResponse } from "@/lib/api/response";
import { getTwoFactorStatus, requestToken, verifyTwoFactor } from "@/lib/api/twoFactor";
import { deleteVirtualNetwork, listVirtualNetworks } from "@/lib/api/virtualNetwork";
import { showError, showSuccess } from "@/lib/helpers/toast";
import { useUser } from "@/lib/hook/useUser";
import ConfirmModal from "../ConfirmModal";
import Link from "../next/Link";
import { useTranslation } from "react-i18next";


export default function VirtualNetworkListTable() {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });
  const [vnToRemove, setVnToRemove] = useState<IVirtualNetworkResponse>();
  const confirmModal = useDisclosure();
  // const {
  //   data: virtualNetworks,
  //   isLoading,
  //   isError,
  //   refetch,
  // } = useQuery("virtual-networks", () => listVirtualNetworks({}));

  //
  const [currentPage, setCurrentPage] = useState<number>(1); // track current page
  const [totalPages, setTotalPages] = useState(1);
  const [totalDataLength, setTotalDataLength] = useState<number>(0);
  const {
    data: virtualNetworks,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    ["virtual-networks", currentPage],
    async () => {
      const response = await listVirtualNetworks({ page: currentPage, per_page: 10 });
      if (response) {
        setTotalPages(response.meta.last_page);
        setTotalDataLength(response.meta.total);
      }
      return response;
    }
  );
  const handleCurrentPage = () => {
    setCurrentPage(currentPage);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages)); // increment current page
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1)); // decrement current page, but don't go below 1
  };

  const handleLastPage = async () => {
    setCurrentPage(totalPages);
    const allData = [];
    for (let page = 1; page <= totalPages; page++) {
      const response = await listVirtualNetworks({ page, per_page: 10 });
      if (response) {
        allData.push(...response.data);
      }
    }
    // setData(allData);
  };

  //

  const { user } = useUser();
  const { t, i18n } = useTranslation('dashboard')

  const [showTwoFactorModal, setTwoFactorModal] = useState<boolean>(false);
  const [isTwoFactorVerified, setIsTwoFactorVerified] = useState<boolean>(false);
  const [token, setToken] = useState<string | undefined>(undefined);

  const checkTwoFactor = async (vn: IVirtualNetworkResponse) => {
    setVnToRemove(vn);
    if (!isTwoFactorVerified) {
      const res = await getTwoFactorStatus();
      if (res && res.enable) {
        const innerRes = await requestToken();
        if (innerRes) {
          showSuccess(t('twofactor.request-token'), innerRes.message)
          setTwoFactorModal(true);
        }
      } else {
        confirmModal.onOpen();
      }
    } else {
      confirmModal.onOpen();
    }
  };

  const onTokenChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setToken(e.currentTarget.value);
  }
  const onClose = () => {
    setTwoFactorModal(!showTwoFactorModal);
    setToken('');
  }

  const verifyTwoFactorToken = async () => {
    if (token) {
      const res = await verifyTwoFactor(token);
      if (res?.is_valid) {
        setTwoFactorModal(false);
        setIsTwoFactorVerified(true);
        confirmModal.onOpen();
      }
    }
  };

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
      <HStack w="full" justifyContent="space-between">
      <Heading size="md" fontWeight="semibold">
        {t('virtualnetwork.title')}: {(totalDataLength < 1)?<><Link href="/dashboard/virtual-networks/create" color="brand.700" fontSize="lg">{t('virtualnetwork.create')}{t('virtualnetwork.createreminder')}</Link></>:<>{totalDataLength} </>
      }

      </Heading>
      <Link href="/dashboard/virtual-networks/create" >
        <Button size="sm" _hover={{ textDecoration: "none" }}>
          {t('virtualnetwork.createvnplus')}
        </Button>
      </Link>
    </HStack>

      <Table w="full">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? t('virtualnetwork.title') : t('virtualnetwork.name')}</Th>
            <Th display={["none", "table-cell"]}>{t('virtualnetwork.id')}</Th>
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
              const ID = (props: TextProps) => (
                <Code fontSize={["xs", "sm"]} px="0" bg="white" {...props}>{vn.id}</Code>
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
                        checkTwoFactor(vn)
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
                  <Td px="0">
                    {!isPhone ? (
                      <ID />
                    ) : (
                      <></>
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
        <TableCaption>
          <Box display="flex" justifyContent="center">
            <HStack mt="4">
              {(currentPage == 1) ? <></> : <><Button onClick={handleFirstPage}>1</Button><Button onClick={handlePrevPage}>{t('prev')}</Button></>}
              {(totalPages > 1) ? <><Button onClick={handleCurrentPage}>{currentPage}</Button><Button onClick={handleNextPage}>{t('next')}</Button> <Button onClick={handleLastPage}>{t('last')}</Button></> : <></>}
            </HStack>
          </Box>
        </TableCaption>
      </Table>
      <Modal isOpen={showTwoFactorModal} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('twofactor.verify-two-factor')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type='nubmer' placeholder="token" value={token} onChange={onTokenChange} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              {t('twofactor.cancel')}
            </Button>
            <Button variant='ghost' onClick={verifyTwoFactorToken} disabled={!token}>{t('twofactor.verify')}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
