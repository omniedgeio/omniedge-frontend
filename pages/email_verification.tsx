import { Center, Heading, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultLayout from "../components/layout/Default";
import { activateAccount } from "../lib/api/auth";

export default function EmailVerificationPage() {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);
  const [isVerified, setVerified] = useState(false);

  useEffect(() => {
    if (router.query && router.query.token) {
      activateAccount(router.query.token as string)
        .then((data) => {
          setLoading(false);
          setVerified(true);
        })
        .catch((err) => {
          setLoading(false);
          setVerified(false);
          setError(err.data);
        });
    }
  }, []);

  return (
    <DefaultLayout>
      <Center flexDirection="column">
        {isLoading && <Spinner />}
        {!isLoading && isVerified && (
          <>
            <Heading fontSize="1.5rem" pt={[32]} textAlign="center">
              Your email has verified successfully.
            </Heading>
            <Heading fontSize="1.25rem" fontWeight="normal" mt={4} textAlign="center">
              Thank you for joining us.
            </Heading>
          </>
        )}
        {!isLoading && !isVerified && (
          <>
            <Heading fontSize="1.5rem" pt={[32]} textAlign="center">
              {error?.message}
            </Heading>
            <Heading fontSize="1.25rem" fontWeight="normal" mt={4} textAlign="center">
              Thank you for joining us.
            </Heading>
          </>
        )}
      </Center>
    </DefaultLayout>
  );
}
