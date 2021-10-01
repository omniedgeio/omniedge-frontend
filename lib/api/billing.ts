import request from "./client";
import { ICreateCheckoutSessionRequest } from "./request";

export async function createCheckoutSession(data: ICreateCheckoutSessionRequest) {
  let res = await request({
    url: "/payment/create-checkout-session",
    method: "POST",
    data,
  });

  return res.data.data;
}

export async function createPortalSession() {
  let res = await request({
    url: "/payment/create-portal-session",
    method: "POST",
  });

  return res.data.data;
}
