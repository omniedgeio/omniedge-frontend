import { setToken } from "../helpers/token";
import request from "./client";
import { IGoogleLoginRequest, IPasswordLoginRequest, IRegisterRequest } from "./request";

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

export async function loginByGoogle(data: IGoogleLoginRequest) {
  let res = await request({
    url: "/auth/login/google",
    method: "POST",
    data,
  });
  let responseData = res?.data.data;
  setToken({
    accessToken: responseData.token,
  });
  return res;
}
