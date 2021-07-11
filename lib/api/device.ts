import request from "./client";
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
