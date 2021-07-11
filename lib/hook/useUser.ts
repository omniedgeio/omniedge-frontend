import { AxiosResponse } from "axios";
import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import { IProfileResponse } from "../api/response";
import { retrieveUser } from "../api/user";

export function useUser(redirect: string | null = "/login") {
  const {
    data: user,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<IProfileResponse | undefined, AxiosResponse>("user", retrieveUser, {
    retry: 0,
    refetchOnMount: !!redirect,
    refetchOnWindowFocus: !!redirect,
  });
  const router = useRouter();

  if (isError) {
    if (error?.status == 401) {
      redirect && router.push(redirect);
    }
  }

  return {
    user,
    refetch,
    isLoading,
    isError,
  };
}
