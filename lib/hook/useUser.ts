import { AxiosResponse } from "axios";
import { useRouter } from "next/dist/client/router";
import { useQuery } from "react-query";
import { retrieveUser } from "../api/user";

export function useUser(redirect: string | null = "/login") {
  const {
    data: res,
    isLoading,
    isError,
    error,
  } = useQuery<AxiosResponse, AxiosResponse>("user", retrieveUser, {
    retry: 0,
  });
  const router = useRouter();

  if (isError) {
    if (error?.status == 401) {
      redirect && router.push(redirect);
    }
  }

  return {
    user: res?.data.data,
    isLoading,
    isError,
  };
}
