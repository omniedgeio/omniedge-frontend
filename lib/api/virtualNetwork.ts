import request from "./client";
import { ICreateVirtualNetworkRequest, IUpdateVirtualNetworkRequest } from "./request";
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

export async function createVirtualNetwork(data: ICreateVirtualNetworkRequest): Promise<any> {
  let res = await request({
    url: "/virtual-networks",
    method: "POST",
    data,
  });

  return res.data.data;
}

export async function removeVirtualNetwork(uuid: string) {
  let res = await request({
    url: "/virtual-networks/" + uuid,
    method: "DELETE",
  });

  return res.data.data;
}

export async function updateVirtualNetwork(uuid: string, data: IUpdateVirtualNetworkRequest) {
  let res = await request({
    url: "/virtual-networks/" + uuid,
    method: "POST",
    data,
  });

  return res.data.data;
}

export async function removeDeviceFromVirtualNetwork(vnUUID: string, devUUID: string) {
  let res = await request({
    url: "/virtual-networks/" + vnUUID + "/devices/" + devUUID,
    method: "DELETE",
  });

  return res.data.data;
}
