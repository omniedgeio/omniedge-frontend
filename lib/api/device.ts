import request from "./client";
import { IListDevicesRequest, IUpdateDeviceSubnetRouteRequest } from "./request";
import { IDeviceResponse, IPaginatedResponse } from "./response";

export async function listDevices(
  params: IListDevicesRequest
): Promise<IPaginatedResponse<IDeviceResponse> | undefined> {
  let res = await request<IPaginatedResponse<IDeviceResponse>>({
    url: "/devices",
    method: "GET",
    params,
  });

  if (res.data.data?.data) {
    for (const device of res.data.data.data) {
      device.created_at = new Date(device.created_at);
    }
  }

  return res.data.data;
}

export async function removeDevice(id: string) {
  let res = await request({
    url: "/devices/" + id,
    method: "DELETE",
  });

  return res.data.data;
}

export async function retrieveDevice(id: string): Promise<IDeviceResponse | undefined> {
  let res = await request<IDeviceResponse>({
    url: "/devices/" + id,
    method: "GET",
  });

  if (res.data.data) {
    res.data.data.created_at = new Date(res.data.data.created_at);
  }

  return res.data.data;
}

export async function updateDeviceSubnet(deviceId: string, subnetId: string, data: IUpdateDeviceSubnetRouteRequest) {
  let res = await request({
    url: "/devices/" + deviceId + "/subnets/" + subnetId,
    method: "POST",
    data,
  });

  return res.data.data;
}
