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
