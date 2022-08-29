import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FormikHelpers, getIn, useFormik } from "formik";
import isCidr from "is-cidr";
import isValidHostname from "is-valid-hostname";
import { useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import { IVirtualNetworkRequest } from "../../lib/api/request";
import { useUser } from "../../lib/hook/useUser";
import {useTranslation} from "react-i18next";

interface VirtualNetworkFormProps {
  defaultValues?: IVirtualNetworkRequest;
  isCustomSupernode?: boolean;
  onSubmit: (values: IVirtualNetworkRequest, actions: FormikHelpers<IVirtualNetworkRequest>) => void;
}

const VirtualNetworkForm: React.FC<VirtualNetworkFormProps> = ({ defaultValues, onSubmit, isCustomSupernode }) => {
  const [useCustomSupernode, setUseCustomSupernode] = useState(!!isCustomSupernode);
  console.log(useCustomSupernode);
  useEffect(() => {
    setUseCustomSupernode(!!isCustomSupernode);
  }, [isCustomSupernode]);

  const isUpdate = useMemo(() => !!defaultValues, [defaultValues]);
  const { isLoading, isFreePlan } = useUser("/login");

  const { handleChange, handleBlur, handleSubmit, setValues, values, touched, errors, isSubmitting } =
    useFormik<IVirtualNetworkRequest>({
      enableReinitialize: true,
      initialValues: defaultValues || {
        name: "",
        ip_range: "100.100.0.0/24",
      },
      validationSchema: Yup.object().shape({
        name: Yup.string().required("Required"),
        ip_range: Yup.string()
          .required("Required")
          .test("is-cidr", "It is not a valid cidr", (value, context) => isCidr(value as string) != 0),
        server: Yup.object()
          .optional()
          .shape({
            host: Yup.string()
              .optional()
              .test(
                "is-valid-hostname",
                "It is not a valid host",
                (value, context) => value === undefined || isValidHostname(value as string)
              ),
            port: Yup.number().optional().min(1).max(65535),
          }),
      }),
      onSubmit: (values, actions) => {
        onSubmit && onSubmit(values, actions);
      },
    });

  useEffect(() => {
    if (!useCustomSupernode) {
      setValues({
        ...values,
        server: undefined,
      });
    }
  }, [useCustomSupernode]);
  const {t, i18n} = useTranslation('dashboard')
  return (
    <form style={{ width: "100%" }} onSubmit={handleSubmit}>
      <VStack alignItems="flex-start" spacing="4" w="full" maxW="sm">
        <FormControl isInvalid={!!(touched.name && errors.name)} isRequired>
          <FormLabel>{t('virtualnetwork.name')}</FormLabel>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            disabled={isSubmitting}
            placeholder="My Omni Network"
          ></Input>
          <FormErrorMessage>{errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!(touched.ip_range && errors.ip_range)} isRequired>
          <FormLabel>{t('virtualnetwork.iprange')}</FormLabel>
          <Input
            type="text"
            name="ip_range"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.ip_range}
            placeholder="100.100.0.0/24"
            fontFamily="mono"
            disabled={isUpdate}
          ></Input>
          <FormErrorMessage>{errors.ip_range}</FormErrorMessage>
          <FormHelperText>
            {isUpdate ? `Currently we don't support change of ip range.` : `IP Range can't be changed after creation.`}
          </FormHelperText>
        </FormControl>
        <FormLabel>{t('virtualnetwork.customizesupernode')}</FormLabel>
          <Button
            isLoading={isLoading}
            onClick={() => {
              setUseCustomSupernode(!useCustomSupernode);
            }}
          >
            {useCustomSupernode ? t('virtualnetwork.usedefaultsupernode'): t('virtualnetwork.usecustomizesupernode')}
          </Button>
        {useCustomSupernode && (
          <Stack w="full">
            <Alert status="warning">
              <AlertIcon />
              <Link href="/docs/article/install/customize-supernode">{t('virtualnetwork.customizesupernodeinfo')}</Link>
            </Alert>
            <FormControl isInvalid={!!(getIn(touched, "server.host") && getIn(errors, "server.host"))} isRequired>
              <FormLabel>{t('virtualnetwork.customizesupernodehost')}</FormLabel>
              <Input
                type="text"
                name="server.host"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values?.server?.host}
                placeholder="x.x.x.x"
                fontFamily="mono"
                disabled={isSubmitting}
              ></Input>
              <FormErrorMessage>{getIn(errors, "server.host")}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!(getIn(touched, "server.port") && getIn(errors, "server.port"))} isRequired>
              <FormLabel>{t('virtualnetwork.customizesupernodeport')}</FormLabel>
              <Input
                type="text"
                name="server.port"
                onChange={handleChange}
                onBlur={handleBlur}
                defaultValue={5565}
                value={values?.server?.port}
                placeholder="1 ~ 65536"
                fontFamily="mono"
                disabled={isSubmitting}
                maxW={120}
              ></Input>
              <FormErrorMessage>{getIn(errors, "server.port")}</FormErrorMessage>
            </FormControl>
          </Stack>
        )}

        <Button isLoading={isSubmitting} type="submit" colorScheme="brand">
          {defaultValues ? t('virtualnetwork.update') : t('virtualnetwork.create')}
        </Button>
      </VStack>
    </form>
  );
};

export default VirtualNetworkForm;
