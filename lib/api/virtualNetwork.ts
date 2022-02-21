import request from "./client";
import {
  ICreateInvitationRequest,
  IListVirtualNetworkRequest,
  IUpdateVirtualNetworkRequest,
  IVirtualNetworkRequest,
} from "./request";
import {
  IInvitationResponse,
  IPaginatedResponse,
  IVirtualNetworkDeviceResponse,
  IVirtualNetworkResponse,
  IVirtualNetworkUserResponse,
} from "./response";

export async function listVirtualNetworks(
  params: IListVirtualNetworkRequest
): Promise<IPaginatedResponse<IVirtualNetworkResponse> | undefined> {
  let res = await request<IPaginatedResponse<IVirtualNetworkResponse>>({
    url: "/virtual-networks",
    method: "GET",
    params,
  });

  return res.data.data;
}

export async function retrieveVirtualNetwork(id: string): Promise<IVirtualNetworkResponse | undefined> {
  let res = await request<IVirtualNetworkResponse>({
    url: "/virtual-networks/" + id,
    method: "GET",
  });

  return res.data.data;
}

export async function createVirtualNetwork(data: IVirtualNetworkRequest): Promise<IVirtualNetworkResponse | undefined> {
  let res = await request({
    url: "/virtual-networks",
    method: "POST",
    data,
  });

  return res.data.data;
}

export async function updateVirtualNetwork(id: string, data: IUpdateVirtualNetworkRequest) {
  let res = await request({
    url: "/virtual-networks/" + id,
    method: "PUT",
    data,
  });

  return res.data.data;
}

export async function deleteVirtualNetwork(id: string) {
  let res = await request({
    url: "/virtual-networks/" + id,
    method: "DELETE",
  });

  return res.data.data;
}

/* -------------------------------------------------------------------------- */
/*                           Virtual Network > Users                          */
/* -------------------------------------------------------------------------- */

export async function listUsersOfVirtualNetwork(
  id: string
): Promise<IPaginatedResponse<IVirtualNetworkUserResponse> | undefined> {
  let res = await request<IPaginatedResponse<IVirtualNetworkUserResponse>>({
    url: "/virtual-networks/" + id + "/users",
    method: "GET",
  });

  if (res.data.data?.data) {
    for (let user of res.data.data?.data) {
      user.joined_at = new Date(user.joined_at);
    }
  }

  return res.data.data;
}

export async function removeUserFromVirtualNetwork(virtualNetworkId: string, userId: string) {
  let res = await request({
    url: "/virtual-networks/" + virtualNetworkId + "/users/" + userId,
    method: "DELETE",
  });

  return res.data.data;
}

/* -------------------------------------------------------------------------- */
/*                          Virtual Network > Devices                         */
/* -------------------------------------------------------------------------- */

export async function listDevicesOfVirtualNetwork(
  id: string
): Promise<IPaginatedResponse<IVirtualNetworkDeviceResponse> | undefined> {
  let res = await request<IPaginatedResponse<IVirtualNetworkDeviceResponse>>({
    url: "/virtual-networks/" + id + "/devices",
    method: "GET",
  });

  if (res.data.data?.data) {
    for (let device of res.data.data?.data) {
      device.last_seen = new Date(device.last_seen);
      device.created_at = new Date(device.created_at);
    }
  }

  return res.data.data;
}

export async function removeDeviceFromVirtualNetwork(virtualNetworkId: string, deviceId: string) {
  let res = await request({
    url: "/virtual-networks/" + virtualNetworkId + "/devices/" + deviceId,
    method: "DELETE",
  });

  return res.data.data;
}

/* -------------------------------------------------------------------------- */
/*                        Virtual Network > Invitations                       */
/* -------------------------------------------------------------------------- */

export async function createInvitationForVirtualNetwork(virtualNetworkId: string, data: ICreateInvitationRequest) {
  let res = await request({
    url: "/virtual-networks/" + virtualNetworkId + "/invitations",
    method: "POST",
    data,
  });

  return res.data.data;
}

export async function listInvitationsOfVirtualNetwork(
  virtualNetworkId: string
): Promise<IPaginatedResponse<IInvitationResponse> | undefined> {
  let res = await request<IPaginatedResponse<IInvitationResponse>>({
    url: "/virtual-networks/" + virtualNetworkId + "/invitations",
    method: "GET",
  });

  if (res.data.data?.data) {
    for (let invitation of res.data.data?.data) {
      invitation.created_at = new Date(invitation.created_at);
    }
  }

  return res.data.data;
}

export async function removeInvitationFromVirtualNetwork(virtualNetworkId: string, invitationId: string) {
  let res = await request({
    url: "/virtual-networks/" + virtualNetworkId + "/invitations/" + invitationId,
    method: "DELETE",
  });

  return res.data.data;
}
