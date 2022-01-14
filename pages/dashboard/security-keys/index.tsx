import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import SecurityKeysTable from "../../../components/security-keys/Table";
import { Page } from "../../../types";

const SecurityKeysPage: Page = function (props) {
  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading fontWeight="semibold" size="md">
          Security Keys
        </Heading>
        <Link href="/dashboard/security-keys/create">
          <Button size="sm" _hover={{ textDecoration: "none" }}>
            + Security Key
          </Button>
        </Link>
      </HStack>
      <SecurityKeysTable />
    </VStack>
  );
};

SecurityKeysPage.layout = DashboardLayout;

export default SecurityKeysPage;
