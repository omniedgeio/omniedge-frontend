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
import { IInvitationResponse } from "../../../lib/api/response";
import { listInvitationsOfVirtualNetwork, removeInvitationFromVirtualNetwork } from "../../../lib/api/virtualNetwork";
import ConfirmModal from "../../ConfirmModal";

interface IVirtualNetworkInvitationsTableProps {
  virtualNetworkId: string;
}

const VirtualNetworkInvitationsTable: React.FC<IVirtualNetworkInvitationsTableProps> = function ({ virtualNetworkId }) {
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });

  const { data, isLoading, isError, refetch } = useQuery(["virtual-network/invitations", virtualNetworkId], () =>
    listInvitationsOfVirtualNetwork(virtualNetworkId)
  );

  const confirmModal = useDisclosure();
  const [invitationToRemove, setInvitationToRemove] = useState<IInvitationResponse>();

  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Virtual Network"
        onConfirm={() => {
          removeInvitationFromVirtualNetwork(virtualNetworkId as string, invitationToRemove?.id as string).then(() => {
            refetch();
            confirmModal.onClose();
          });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to revoke invitation to <Code>{invitationToRemove?.invited.name}</Code>?
      </ConfirmModal>
      <Table w="full" maxW="container.sm">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "Email" : "Email"}</Th>
            <Th display={["none", "table-cell"]}>Invited at</Th>
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
              <Td display={["none", "table-cell"]}>
                <Skeleton h="4" />
              </Td>
            </Tr>
          ) : (
            data?.data?.map((invitation) => {
              const Email = () => <Text>{invitation.invited.email}</Text>;
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
                      Remove
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
