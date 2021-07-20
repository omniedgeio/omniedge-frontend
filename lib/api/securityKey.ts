import request from "./client";
import { ICreateSecurityKeyRequest } from "./request";
import { ISecurityKeyResponse } from "./response";

export async function createSecurityKey(data: ICreateSecurityKeyRequest): Promise<ISecurityKeyResponse | undefined> {
  let res = await request<ISecurityKeyResponse>({
    url: "/security-keys",
    method: "POST",
    data,
  });

  return res.data.data;
}

export async function listSecurityKeys(): Promise<ISecurityKeyResponse[] | undefined> {
  let res = await request<ISecurityKeyResponse[]>({
    url: "/security-keys",
    method: "GET",
  });

  return res.data.data;
}

export async function revokeSecurityKey(uuid: string): Promise<any> {
  let res = await request<any>({
    url: "/security-keys/" + uuid,
    method: "DELETE",
  });

  return res.data.data;
}
