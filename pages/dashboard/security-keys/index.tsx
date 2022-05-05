import { Button, Heading, HStack, VStack } from "@chakra-ui/react";
import DashboardLayout from "../../../components/layout/Dashboard";
import Link from "../../../components/next/Link";
import SecurityKeysTable from "../../../components/security-keys/Table";
import { Page } from "../../../types";
import {useTranslation} from "react-i18next";
const SecurityKeysPage: Page = function (props) {
  const {t,i18n}=useTranslation('dashboard')
  return (
    <VStack w="full" alignItems="flex-start" spacing="4">
      <HStack w="full" justifyContent="space-between">
        <Heading fontWeight="semibold" size="md">
          {t('securitykey.title')}
        </Heading>
        <Link href="/dashboard/security-keys/create">
          <Button size="sm" _hover={{ textDecoration: "none" }}>
            + {t('securitykey.title')}
          </Button>
        </Link>
      </HStack>
      <SecurityKeysTable />
    </VStack>
  );
};

SecurityKeysPage.layout = DashboardLayout;

export default SecurityKeysPage;
