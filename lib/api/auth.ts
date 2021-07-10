import { setToken } from "../helpers/token";
import request from "./request";

export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export function register(data: IRegister) {
  return request({
    url: "/auth/register",
    method: "POST",
    data,
  });
}

export interface IPasswordLogin {
  email: string;
  password: string;
}

export async function loginByPassword({ email, password }: IPasswordLogin) {
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
