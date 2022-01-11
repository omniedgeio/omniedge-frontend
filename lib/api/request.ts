import { SecurityKeyType } from "./enum";

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface IAuthSessionRequest {
  auth_session_uuid?: string;
}

export interface IPasswordLoginRequest extends IAuthSessionRequest {
  email: string;
  password: string;
}

export interface IGoogleLoginRequest extends IAuthSessionRequest {
  id_token: string;
}

export interface IResetPasswordRequest {
  email: string;
}

export interface IResetPasswordVerifyRequest {
  token: string;
  password: string;
  confirm_password: string;
}

export interface IUpdateProfileRequest {
  name: string;
  email: string;
}

export interface IActivateGoogleLoginRequest {
  id_token: string;
}

export interface IActivatePasswordLoginRequest {
  password: string;
  confirm_password: string;
}

export interface IChangePasswordRequest {
  old_password: string;
  password: string;
  confirm_password: string;
}

export interface IListDevicesRequest extends IPaginationRequest {
  name?: string;
  platform?: string;
}

export interface IUpdateDeviceRequest {
  name: string;
}

export interface IUpdateDeviceSubnetRouteRequest {
  devices: IUpdateDeviceSubnetRouteDeviceRequest[];
}

export interface IUpdateDeviceSubnetRouteDeviceRequest {
  uuid: string;
  name: string;
}

export interface IPaginationRequest {
  page?: number; // default: 1
  per_page?: number; // default: 10
}

/* -------------------------------------------------------------------------- */
/*                               Virtual Network                              */
/* -------------------------------------------------------------------------- */

export interface IListVirtualNetworkRequest extends IPaginationRequest {
  name?: string;
}

export interface ICreateVirtualNetworkRequest {
  name: string;
  ip_range: string;
}

export interface IUpdateVirtualNetworkRequest {
  name: string;
}

export enum SecurityKeyTypeEnum {
  Normal = 1,
  OneTime = 2,
}

export interface ICreateSecurityKeyRequest {
  name: string;
  type: SecurityKeyType;
}

export interface ICreateInvitationRequest {
  emails: string[];
}

export enum InvitationStatusEnum {
  Accepted = 1,
  Rejected = 2,
}

export interface IUpdateInvitationRequest {
  status: InvitationStatusEnum;
}

export interface ICreateCheckoutSessionRequest {
  plan: string;
}
