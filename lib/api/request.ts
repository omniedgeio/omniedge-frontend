import { createStandaloneToast } from "@chakra-ui/react";
import axios, { AxiosError, AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";
import { clearToken, getToken } from "../helpers/token";
import { IResponse } from "./response";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10 * 1000,
  withCredentials: false,
});

function forceLogout() {
  clearToken();
  if (["login", "register"].every((e) => !window.location.pathname.includes(e))) {
    window.location.replace("/login");
  }
}

client.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.url?.match(/^\/auth\/*/)) {
    const token = getToken();
    if (token.accessToken) {
      config.headers["Authorization"] = "Bearer " + token.accessToken;
    }
  }
  return config;
});

const toast = createStandaloneToast();

client.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (res: AxiosError) => {
    if (res.message == "Network Error") {
      toast({
        isClosable: true,
        position: "top",
        status: "error",
        title: "Network Error",
        description: "Please check your network connection.",
      });
    }

    if (res.response) {
      return Promise.reject(res.response);
    }

    return Promise.reject(res);
  }
);

export default function request<T = any, E = any>(config: AxiosRequestConfig): AxiosPromise<IResponse<T, E>> {
  return client(config);
}
