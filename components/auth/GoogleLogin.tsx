import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { HStack, Text } from "@chakra-ui/layout";
import { ButtonProps } from "@chakra-ui/react";
import { createRef, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import {useTranslation} from "react-i18next";
interface IGoogleLoginProps {
  onSuccess: (e: gapi.auth2.GoogleUser) => void;
  onFailure: (err: any) => void;
}

const GoogleLogin: React.FC<IGoogleLoginProps & ButtonProps> = function ({ onSuccess, onFailure, ...props }) {
  const googleLoginButton = createRef<HTMLButtonElement>();
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);

  useEffect(() => {
    if (typeof gapi !== 'undefined') {
      gapi.load("auth2", () => {
        const auth2 = gapi.auth2.init({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });
        if (googleLoginButton.current) {
          auth2.attachClickHandler(
            googleLoginButton.current,
            {},
            (e) => {
              setGoogleLoginLoading(false);
              onSuccess && onSuccess(e);
            },
            (err) => {
              setGoogleLoginLoading(false);
              onFailure && onFailure(err);
            }
          );
        }
      });
    }
  });
  const {t, i18n} = useTranslation('auth')
  return (
    <Button
      {...props}
      ref={googleLoginButton}
      isLoading={googleLoginLoading}
      onClick={() => setGoogleLoginLoading(true)}
    >
      <HStack>
        <Icon as={FcGoogle}></Icon>
        <Text>{t('loginwithgoogle')}</Text>
      </HStack>
    </Button>
  );
};

export default GoogleLogin;
