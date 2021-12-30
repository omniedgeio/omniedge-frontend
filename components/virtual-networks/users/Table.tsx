import {
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
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Code } from "react-code-blocks";
import { FiMoreVertical, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import { UserRole } from "../../../lib/api/enum";
import { IVirtualNetworkUserResponse } from "../../../lib/api/response";
import { listUsersOfVirtualNetwork, removeUserFromVirtualNetwork } from "../../../lib/api/virtualNetwork";
import { useUser } from "../../../lib/hook/useUser";
import ConfirmModal from "../../ConfirmModal";

interface IVirtualNetworkUsersTableProps {
  virtualNetworkId: string;
}

const VirtualNetworkUsersTable: React.FC<IVirtualNetworkUsersTableProps> = function ({ virtualNetworkId }) {
  const router = useRouter();
  const isPhone = useBreakpointValue({ base: true, sm: false });
  const variant = useBreakpointValue({ base: "ghost", sm: "solid" });

  const { data, isLoading, isError, refetch } = useQuery(["virtual-network/users", virtualNetworkId], () =>
    listUsersOfVirtualNetwork(virtualNetworkId)
  );

  const confirmModal = useDisclosure();
  const [userToRemove, setUserToRemove] = useState<IVirtualNetworkUserResponse>();
  const { user } = useUser("/login");
  const isAdmin = !!(data?.data.find(({ id }) => user?.id == id)?.role == UserRole.Admin);

  return (
    <>
      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Remove Virtual Network"
        onConfirm={() => {
          removeUserFromVirtualNetwork(virtualNetworkId as string, userToRemove?.id as string).then(() => {
            if (userToRemove?.id == user?.id) {
              router.push("/dashboard");
            } else {
              refetch();
              confirmModal.onClose();
            }
          });
        }}
        onCancel={confirmModal.onClose}
      >
        Are you sure you want to remove user <Code>{userToRemove?.name}</Code> from this virtual network?
      </ConfirmModal>
      <Table w="full" maxW="container.sm">
        <Thead>
          <Tr>
            <Th pl="0">{isPhone ? "User" : "Name"}</Th>
            <Th display={["none", "table-cell"]}>Email</Th>
            {isAdmin && data?.data && data?.data?.length > 1 && <Th display={["none", "table-cell"]}>Action</Th>}
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
            data?.data?.map((virtualNetworkUser) => {
              const Name = () => (
                <Text>
                  {virtualNetworkUser.name}
                  {virtualNetworkUser.role == UserRole.Admin && (
                    <Tag ml={2} size="sm" colorScheme="green">
                      {UserRole[virtualNetworkUser.role]}
                    </Tag>
                  )}
                </Text>
              );
              const Email = () => (
                <Text fontSize={["sm", "md"]} color={["gray.600", "black"]}>
                  {virtualNetworkUser.email}
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
                        setUserToRemove(virtualNetworkUser);
                        confirmModal.onOpen();
                      }}
                      icon={<FiX />}
                    >
                      {user?.id == virtualNetworkUser.id ? "Leave" : "Remove"}
                    </MenuItem>
                  </MenuList>
                </Menu>
              );

              return (
                <Tr key={virtualNetworkUser.id}>
                  <Td px="0">
                    {!isPhone ? (
                      <Name />
                    ) : (
                      <HStack justifyContent="space-between">
                        <VStack spacing="1" alignItems="flex-start">
                          <Name />
                          <Email />
                        </VStack>
                        <ActionMenu />
                      </HStack>
                    )}
                  </Td>
                  <Td display={["none", "table-cell"]}>
                    <Email />
                  </Td>
                  {isAdmin && data.data.length > 1 && (
                    <Td display={["none", "table-cell"]}>
                      <ActionMenu />
                    </Td>
                  )}
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
      {/* {isAdmin && <VirtualNetworkInvitationsSection id={id as string} />} */}
    </>
  );
};

export default VirtualNetworkUsersTable;
