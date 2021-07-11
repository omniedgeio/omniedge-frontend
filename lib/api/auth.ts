import { setToken } from "../helpers/token";
import request from "./client";
import { IPasswordLoginRequest, IRegisterRequest } from "./request";

export function register(data: IRegisterRequest) {
  return request({
    url: "/auth/register",
    method: "POST",
    data,
  });
}

export async function loginByPassword({ email, password }: IPasswordLoginRequest) {
  let res = await request({
    url: "/auth/login/password",
    method: "POST",
    data: {
      email,
      password,
    },
  });
  let data = res.data.data;
  setToken({
    accessToken: data.token,
  });
  return res;
}

export function loginByGoogle(googleIdToken: string) {
  return request({
    url: "/auth/login/google",
    method: "POST",
    data: {
      google_id_token: googleIdToken,
    },
  });
}
