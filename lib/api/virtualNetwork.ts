import request from "./request";
import { IVirtualNetworkResponse } from "./response";

export async function listVirtualNetworks(): Promise<IVirtualNetworkResponse[] | undefined> {
  let res = await request<IVirtualNetworkResponse[]>({
    url: "/virtual-networks",
    method: "GET",
  });

  return res.data.data;
}

export async function retrieveVirtualNetwork(uuid: string): Promise<IVirtualNetworkResponse | undefined> {
  let res = await request<IVirtualNetworkResponse>({
    url: "/virtual-networks/" + uuid,
    method: "GET",
  });

  return res.data.data;
}

export function createVirtualNetwork(data: any) {
  return request({
    url: "/virtual-network",
    method: "POST",
    data,
  });
}

export function updateVirtualNetwork(uuid: string, data: any) {
  return request({
    url: "/virtual-network/" + uuid,
    method: "POST",
    data,
  });
}

export function removeVirtualNetwork(uuid: string) {
  return request({
    url: "/virtual-network/" + uuid,
    method: "DELETE",
  });
}
