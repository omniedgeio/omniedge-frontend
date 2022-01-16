import {
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Skeleton,
  Spinner,
  StackProps,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { FiChevronDown, FiCreditCard, FiGlobe, FiKey, FiMenu, FiServer, FiSettings, FiX } from "react-icons/fi";
import { useQuery } from "react-query";
import { listInvitations } from "../../lib/api/invitations";
import { clearToken } from "../../lib/helpers/token";
import { useUser } from "../../lib/hook/useUser";
import { Brand } from "../Brand";
import Link from "../next/Link";
import NoSSR from "../next/NoSSR";
import { Seo } from "../Seo";

const SideBar: React.FC<StackProps & { onClose: () => void; isOpen: boolean }> = function (props) {
  const router = useRouter();
  const { onClose, isOpen, ...stackProps } = props;
  const { data: invitations } = useQuery(["invitations", isOpen], listInvitations, {});

  const LINKS = [
    { name: "Virtual Networks", href: "/virtual-networks", icon: FiGlobe },
    { name: "Devices", href: "/devices", icon: FiServer },
    { name: "Security Keys", href: "/security-keys", icon: FiKey },
    { name: "Billing", href: "/billing", icon: FiCreditCard },
    { name: "Settings", href: "/settings", icon: FiSettings, active: !!invitations?.data?.length },
  ];

  return (
    <>
      <Seo title={"Dashboard"} description="Omniedge Dashboard" />
      <VStack
        {...stackProps}
        p="4"
        w="52"
        bg="white"
        zIndex="999"
        shadow="sm"
        minH="calc(100vh - 64px)"
        borderRight={{ base: "solid 1px", md: "0" }}
        borderRightColor="gray.100"
        spacing="4"
        alignItems="flex-start"
      >
        {LINKS.map(({ name, href, icon, active }) => (
          <Link
            key={name}
            _hover={{
              textDecoration: "none",
              color: "brand.700",
            }}
            onClick={onClose}
            color={router.pathname.includes(href) ? "brand.500" : "gray.800"}
            fontSize="md"
            w="full"
            href={`/dashboard` + href}
          >
            <HStack spacing="2" w="full">
              <Icon fontSize="xl" as={icon}></Icon>
              <Text fontSize="md" fontWeight="medium" position="relative">
                {name}
                {active && (
                  <Box w="2" h="2" borderRadius="100%" position="absolute" bg="green.500" top="1" left="100%"></Box>
                )}
              </Text>
            </HStack>
          </Link>
        ))}
      </VStack>
    </>
  );
};

const DashboardLayout: React.FC = function ({ children }) {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { user, isLoading, isError } = useUser();

  return (
    <Container maxW="container.xl" px={0}>
      <HStack
        p="4"
        borderBottom={{ base: "solid 1px", md: "0" }}
        borderBottomColor="gray.200"
        justifyContent="space-between"
      >
        <HStack spacing={{ base: "4", md: "0" }}>
          <IconButton
            borderRadius="md"
            variant="outline"
            display={{ base: "flex", md: "none" }}
            aria-label="sidebar"
            icon={isOpen ? <FiX /> : <FiMenu />}
            onClick={onToggle}
          ></IconButton>
          <Link href="/">
            <Brand />
          </Link>
        </HStack>
        <HStack spacing="4">
          <NoSSR>
            <Skeleton isLoaded={!!user}>
              {user && (
                <Menu placement="bottom-end">
                  <MenuButton variant="link" color="black" _hover={{ textDecor: "none" }}>
                    <HStack>
                      <Avatar size="sm" name={user.name} src={user.picture} />
                      <Text display={["none", "inline"]}>{user.name}</Text>
                      <FiChevronDown />
                    </HStack>
                  </MenuButton>
                  <MenuList zIndex={100}>
                    <VStack alignItems="flex-start" px={3} spacing={0}>
                      <Text color="gray.400" fontSize="xs">
                        You logged in as:
                      </Text>
                      <Text fontWeight="semibold" fontSize="sm">
                        {user.email}
                      </Text>
                    </VStack>
                    <Divider mt={2}></Divider>
                    <Link href="/dashboard/settings">
                      <MenuItem>Settings</MenuItem>
                    </Link>
                    <Link target="_blank" href="mailto:support@omniedge.io">
                      <MenuItem>Support</MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() => {
                        clearToken();
                        window.location.replace("/login");
                      }}
                      color="red.500"
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Skeleton>
          </NoSSR>
        </HStack>
      </HStack>
      <Flex alignItems="flex-start">
        <Box pos="relative">
          <SideBar
            onClose={onClose}
            isOpen={isOpen}
            pos={{ base: "absolute", md: "relative" }}
            transition="left 200ms"
            left={{
              base: isOpen ? "0" : "-52",
              md: "auto",
            }}
          ></SideBar>
        </Box>
        <Box minH={["calc(100vh - 72px)", "auto"]} onClick={onClose} w="full" p="4">
          {isLoading || isError ? (
            <Center mt={[4, 8]}>
              <Spinner />
            </Center>
          ) : (
            children
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default DashboardLayout;
