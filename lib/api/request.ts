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

export interface IRegisterDeviceRequest {
  name: string;
  hardware_uuid: string;
  os: string;
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
  type: SecurityKeyTypeEnum;
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
