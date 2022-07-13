import request from "./client";
import {
  ICreateReferralResponse,
  IReferralResponse,
} from "./response";

export async function createReferralCode(
): Promise<ICreateReferralResponse | undefined> {
  let res = await request<IReferralResponse>({
    url: "/referrals",
    method: "POST",
  });

  return res.data.data;
}

export async function setReferralCodeCookie(referralCode: string) {
  await request({
    url: `/referrals?referral_code=${referralCode}`,
    method: 'GET',
  });
  return;
}
