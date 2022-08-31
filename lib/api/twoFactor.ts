import request from "./client";
import {
  IGetTwoFactorStatus,
  ICommonTwoFactorResponse,
  IVerifyTwoFactorResponse
} from "./response";

export async function getTwoFactorStatus(
): Promise<IGetTwoFactorStatus | undefined> {
  let res = await request<IGetTwoFactorStatus>({
    url: "/two-factor",
    method: "GET",
  });

  return res.data.data;
}

export async function enableTwoFactor(): Promise<ICommonTwoFactorResponse | undefined> {
  const res = await request({
    url: `/two-factor`,
    method: 'POST',
  });
  return res.data;
}

export async function disableTwoFactor(): Promise<ICommonTwoFactorResponse | undefined> {
  const res = await request({
    url: '/two-factor',
    method: 'DELETE',
  });
  return res.data;
}

export async function verifyTwoFactor(token: string): Promise<IVerifyTwoFactorResponse | undefined> {
  const res = await request({
    url: '/two-factor/verify',
    method: 'POST',
    data: {
      token
    }
  });
  return res.data.data;
}

export async function requestToken(): Promise<ICommonTwoFactorResponse | undefined> {
  const res = await request({
    url: '/two-factor/request-token',
    method: 'POST',
  });
  return res.data;
}
