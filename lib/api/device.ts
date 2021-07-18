import request from "./client";
import { IUpdateDeviceSubnetRouteRequest } from "./request.d";
import { IDeviceResponse } from "./response";

export async function listDevices(): Promise<IDeviceResponse[] | undefined> {
  let res = await request<IDeviceResponse[]>({
    url: "/devices",
    method: "GET",
  });

  return res.data.data;
}

export async function removeDevice(uuid: string) {
  let res = await request({
    url: "/devices/" + uuid,
    method: "DELETE",
  });

  return res.data.data;
}

export async function retrieveDevice(uuid: string): Promise<IDeviceResponse | undefined> {
  let res = await request<IDeviceResponse>({
    url: "/devices/" + uuid,
    method: "GET",
  });

  return res.data.data;
}

export async function updateDeviceSubnet(
  deviceUUID: string,
  subnetUUID: string,
  data: IUpdateDeviceSubnetRouteRequest
) {
  let res = await request({
    url: "/devices/" + deviceUUID + "/subnets/" + subnetUUID,
    method: "POST",
    data,
  });

  return res.data.data;
}
