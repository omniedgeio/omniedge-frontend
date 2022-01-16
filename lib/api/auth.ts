import { setToken } from "../helpers/token";
import request from "./client";
import {
  IAuthSessionRequest,
  IGoogleLoginRequest,
  IPasswordLoginRequest,
  IRegisterRequest,
  IResetPasswordRequest,
  IResetPasswordVerifyRequest,
} from "./request";

export function register(data: IRegisterRequest) {
  return request({
    url: "/auth/register",
    method: "POST",
    data,
  });
}

export function activateAccount(token: string) {
  return request({
    url: "/auth/register/activate",
    method: "GET",
    params: { token },
  });
}

export async function loginByPassword(data: IPasswordLoginRequest) {
  let res = await request({
    url: "/auth/login/password",
    method: "POST",
    data,
  });
  let resdata = res.data.data;
  setToken({
    accessToken: resdata.token,
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

export async function notifyAuthSession(data: IAuthSessionRequest) {
  let res = await request({
    url: "/auth/login/session/notify",
    method: "POST",
    data,
  });

  return res.data.data;
}

export async function resetPassword(data: IResetPasswordRequest) {
  let res = await request({
    url: "/auth/reset-password/code",
    method: "POST",
    data,
  });

  return res.data.data;
}

export async function resetPasswordVerify(data: IResetPasswordVerifyRequest) {
  let res = await request({
    url: "/auth/reset-password/verify",
    method: "POST",
    data,
  });

  return res.data.data;
}
