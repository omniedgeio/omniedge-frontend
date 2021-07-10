import request from "./request";

export function removeDeviceFromVirtualNetwork(vnUUID, devUUID) {
  return request({
    method: "DELETE",
    url: `/virtual-network/${vnUUID}/device/${devUUID}`,
  });
}
