import request from "./client";
import { ICreateSecurityKeyRequest } from "./request";
import { ICreateSecurityKeyResponse, IPaginatedResponse, ISecurityKeyResponse } from "./response";

export async function createSecurityKey(
  data: ICreateSecurityKeyRequest
): Promise<ICreateSecurityKeyResponse | undefined> {
  let res = await request<ICreateSecurityKeyResponse>({
    url: "/security-keys",
    method: "POST",
    data,
  });

  return res.data.data;
}

export async function listSecurityKeys(): Promise<IPaginatedResponse<ISecurityKeyResponse> | undefined> {
  let res = await request<IPaginatedResponse<ISecurityKeyResponse>>({
    url: "/security-keys",
    method: "GET",
  });

  return res.data.data;
}

export async function revokeSecurityKey(securityKeyId: string): Promise<any> {
  let res = await request<any>({
    url: "/security-keys/" + securityKeyId,
    method: "DELETE",
  });

  return res.data.data;
}
