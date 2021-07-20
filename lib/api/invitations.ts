import request from "./client";
import { IUpdateInvitationRequest } from "./request";
import { IInvitationResponse } from "./response";

export async function listInvitations(): Promise<IInvitationResponse[] | undefined> {
  let res = await request({
    url: "/invitations",
    method: "GET",
  });

  return res.data.data;
}
export async function updateInvitation(uuid: string, data: IUpdateInvitationRequest) {
  let res = await request({
    url: "/invitations/" + uuid,
    method: "POST",
    data,
  });

  return res.data.data;
}
