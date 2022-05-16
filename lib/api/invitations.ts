import request from "./client";
import { IUpdateInvitationRequest } from "./request";
import { IInvitationResponse, IPaginatedResponse } from "./response";

export async function listInvitations(): Promise<
  IPaginatedResponse<IInvitationResponse> | undefined
> {
  let res = await request({
    url: "/invitations",
    method: "GET",
  });

  return res.data.data;
}

export async function updateInvitation(
  uuid: string,
  data: IUpdateInvitationRequest
) {
  let res = await request({
    url: "/invitations/" + uuid,
    method: "PUT",
    data,
  });

  return res.data.data;
}
