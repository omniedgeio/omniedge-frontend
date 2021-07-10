import request from "./request";

export function retrieveUser() {
  return request({
    url: "/user/profile",
    method: "GET",
  });
}

export interface IUpdateProfileRequest {
  name: string;
  email: string;
}

export function updateProfile(profile: IUpdateProfileRequest) {
  return request({
    url: "/user",
    method: "POST",
    data: profile,
  });
}

export interface IChangePasswordRequest {
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

export function changePassword(req: IChangePasswordRequest) {
  return request({
    url: "/user/auth/password/update",
    method: "POST",
    data: {
      old_password: req.oldPassword,
      password: req.password,
      confirm_password: req.confirmPassword,
    },
  });
}

export function linkGoogleLogin(idToken: string) {
  return request({
    url: "/user/auth/google/enable",
    method: "POST",
    data: {
      google_id_token: idToken,
    },
  });
}
