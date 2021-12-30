import request from "./client";
import {
  IActivateGoogleLoginRequest,
  IActivatePasswordLoginRequest,
  IChangePasswordRequest,
  IUpdateProfileRequest,
} from "./request";
import { IProfileResponse } from "./response";

export async function retrieveUser(): Promise<IProfileResponse | undefined> {
  let res = await request<IProfileResponse>({
    url: "/profile",
    method: "GET",
  });

  return res?.data.data;
}

export async function updateProfile(data: IUpdateProfileRequest) {
  let res = await request({
    url: "/user/profile",
    method: "POST",
    data,
  });

  return res?.data.data;
}

export function changePassword(data: IChangePasswordRequest) {
  return request({
    url: "/user/auth/change-password",
    method: "POST",
    data,
  });
}

export function activatePasswordLogin(data: IActivatePasswordLoginRequest) {
  return request({
    url: "/user/auth/identities/password",
    method: "POST",
    data,
  });
}

export function activateGoogleLogin(data: IActivateGoogleLoginRequest) {
  return request({
    url: "/user/auth/identities/google",
    method: "POST",
    data,
  });
}
