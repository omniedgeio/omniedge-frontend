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
    url: "/profile",
    method: "PUT",
    data,
  });

  return res?.data.data;
}

export function changePassword(data: IChangePasswordRequest) {
  return request({
    url: "/profile/change-password",
    method: "PUT",
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

export async function createReferralCode() {
  let res = await request({
    url: "/referrals",
    method: "POST",
  });

  return res.data.data;
}
