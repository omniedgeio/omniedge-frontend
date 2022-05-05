import {
  Code,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Table,
  Tag,
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
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import { FiMoreVertical, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import { InvitationStatus } from "../../../lib/api/enum";
import { IInvitationResponse } from "../../../lib/api/response";
import { listInvitationsOfVirtualNetwork, removeInvitationFromVirtualNetwork } from "../../../lib/api/virtualNetwork";
import ConfirmModal from "../../ConfirmModal";
import {useTranslation} from "react-i18next";

interface IVirtualNetworkInvitationsTableProps {
  virtualNetworkId: string;
}

const invitationTagColors = {
  [InvitationStatus.Pending]: "gray",
  [InvitationStatus.Accepted]: "green",
  [InvitationStatus.Rejected]: "red",
};

const VirtualNetworkInvitationsTable: React.FC<IVirtualNetworkInvitationsTableProps> = function ({ virtualNetworkId }) {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });

  const { data, isLoading, isError, refetch } = useQuery(["virtual-network/invitations", virtualNetworkId], () =>
    listInvitationsOfVirtualNetwork(virtualNetworkId)
  );

  const confirmModal = useDisclosure();
  const [invitationToRemove, setInvitationToRemove] = useState<IInvitationResponse>();
  const {t, i18n} = useTranslation('dashboard')
  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title={t('invitation.title')}
        onConfirm={() => {
          removeInvitationFromVirtualNetwork(virtualNetworkId as string, invitationToRemove?.id as string).then(() => {
            refetch();
            confirmModal.onClose();
          });
        }}
        onCancel={confirmModal.onClose}
      >
        {t('invitation.removeconfirm')} <Code>{invitationToRemove?.invited.name}</Code>?
      </ConfirmModal>
      <Table w="full" maxW="container.sm">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "Email" : "Email"}</Th>
            <Th display={["none", "table-cell"]}>{t('invitations.invited')}</Th>
            <Th maxW="20px" display={["none", "table-cell"]}>
            {t('invitations.action')}
            </Th>
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
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
            </Tr>
          ) : (
            data?.data?.map((invitation) => {
              const Status = () => (
                <Tag ml="2" colorScheme={invitationTagColors[invitation.status]}>
                  {InvitationStatus[invitation.status]}
                </Tag>
              );
              const Email = () => (
                <Text display="inline-flex" alignItems="center">
                  {invitation.invited.email}
                  <Status />
                </Text>
              );
              const InvitedAt = (props: TextProps) => (
                <Text fontSize={["sm", "md"]} color={["gray.600", "black"]} {...props}>
                  {formatDistanceToNow(invitation.created_at)}
                </Text>
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
                    <MenuItem
                      color="red.500"
                      onClick={() => {
                        setInvitationToRemove(invitation);
                        confirmModal.onOpen();
                      }}
                      icon={<FiX />}
                    >
                      {t('invitations.remove')}
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={invitation.id}>
                  <Td px="0">
                    {!isPhone ? (
                      <Email />
                    ) : (
                      <HStack justifyContent="space-between">
                        <VStack spacing="1" alignItems="flex-start">
                          <Email />
                          <InvitedAt />
                        </VStack>
                        <ActionMenu />
                      </HStack>
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <InvitedAt />
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

export default VirtualNetworkInvitationsTable;
