import {
  Button,
  ButtonProps,
  HStack,
  Skeleton,
  Table,
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
import { format, formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { useQuery } from "react-query";
import { ISecurityKeyResponse } from "../../lib/api/response";
import { listSecurityKeys, revokeSecurityKey } from "../../lib/api/securityKey";
import ConfirmModal from "../ConfirmModal";
import {useTranslation} from "react-i18next";
const SecurityKeysTable: React.FC = function (props) {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const { data, isLoading, isError, refetch } = useQuery("security-keys", () => listSecurityKeys());

  const confirmModal = useDisclosure();
  const [securityKey, setSecurityKey] = useState<ISecurityKeyResponse>();
  const {t, i18n} = useTranslation('dashboard')
  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onCancel={confirmModal.onClose}
        onConfirm={() => {
          revokeSecurityKey(securityKey?.id as string).then(() => {
            refetch().then(() => confirmModal.onClose());
          });
        }}
        title={t('securitykey.revoketitle')}
      >
        {t('securitykey.removeconfirm')}
      </ConfirmModal>
      <Table>
        <Thead>
          <Tr>
            <Th px="0">{t('securitykey.title')}</Th>
            <Th display={["none", "table-cell"]}>{t('securitykey.expiredin')}</Th>
            <Th display={{ base: "none", lg: "table-cell" }}>{t('securitykey.created')}</Th>
            <Th display={["none", "table-cell"]}>{t('securitykey.action')}</Th>
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
              <Td display={{ base: "none", lg: "table-cell" }}>
                <Skeleton h="4" />
              </Td>
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
            </Tr>
          ) : (
            data?.data?.map((sk) => {
              const SecurityKey = (props: TextProps) => <Text {...props}>{sk.name}</Text>;
              const ExpiredIn = (props: TextProps) => (
                <Text {...props}>{formatDistanceToNow(new Date(sk.expires_at))}</Text>
              );
              const CreatedAt = (props: TextProps) => (
                <Text fontFamily="mono" fontSize="sm" {...props}>
                  {format(new Date(sk.created_at), "dd-MM-yyyy hh:mm:ss a")}
                </Text>
              );
              const RevokeButton = (props: ButtonProps) => (
                <Button
                  size="xs"
                  colorScheme="red"
                  onClick={() => {
                    setSecurityKey(sk);
                    confirmModal.onOpen();
                  }}
                  {...props}
                >
                  {t('securitykey.revoke')}
                </Button>
              );

              return (
                <Tr key={sk.id}>
                  <Td px={0}>
                    {isPhone ? (
                      <HStack justifyContent="space-between">
                        <VStack alignItems="flex-start">
                          <SecurityKey />
                          <Text fontSize="sm">
                          {t('expiredin')}<ExpiredIn as="span" />
                          </Text>
                        </VStack>
                        <RevokeButton />
                      </HStack>
                    ) : (
                      <SecurityKey />
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <ExpiredIn />
                  </Td>
                  <Td display={{ base: "none", lg: "table-cell" }}>
                    <CreatedAt />
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <RevokeButton />
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

export default SecurityKeysTable;
