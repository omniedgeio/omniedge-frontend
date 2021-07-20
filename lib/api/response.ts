import { SecurityKeyTypeEnum } from "./request";

export interface IResponse<T = any, E = any> {
  code?: number;
  message: string;
  data?: T;
  errors?: E;
}

export interface IAuthTokenResponse {
  token: string;
}

export interface IIdentityResponse {
  provider: string;
  enabled: string;
  metadata?: any;
}

export interface IProfileResponse {
  uuid: string;
  name: string;
  email: string;
  picture: string;
  identities: IIdentityResponse[];
}

export interface IDeviceResponse {
  uuid: string;
  name: string;
  os: string;
  virtual_networks: IDeviceVirtualNetworkResponse[];
  subnets?: IDeviceSubnetRouteResponse[];
}

export interface IDeviceVirtualNetworkResponse {
  uuid: string;
  name: string;
  virtual_ip: string;
  last_seen: Date;
  online: boolean;
}

export interface IDeviceSubnetRouteResponse {
  uuid: string;
  ip: string;
  mac_addr: string;
  subnet_mask: string;
  devices: ISubnetRouteDeviceResponse[];
}

export interface ISubnetRouteDeviceResponse {
  uuid: string;
  name: string;
  ip: string;
  mac_addr: string;
  manufacturer: string;
}

export interface IServerResponse {
  uuid: string;
  name: string;
  country: string;
  host: string;
}

export interface IVirtualNetworkResponse {
  uuid: string;
  name: string;
  ip_range: string;
  server: IServerResponse;
  devices: IVirtualNetworkDeviceResponse[];
  users: IVirtualNetworkUserResponse[];
}

export interface IVirtualNetworkDeviceResponse {
  uuid: string;
  name: string;
  virtual_ip: string;
  last_seen: Date;
  online: boolean;
}

export interface IJoinVirtualNetworkResponse {
  community_name: string;
  secret_key: string;
  virtual_ip: string;
  subnet_mask: string;
  server: IServerResponse;
}

export interface ISecurityKeyResponse {
  uuid: string;
  key: string;
  key_type: SecurityKeyTypeEnum;
  expired_at: Date;
  created_at: Date;
}

export interface IVirtualNetworkUserResponse {
  uuid: string;
  email: string;
  name: string;
  role: string;
  joined_at: Date;
}

export interface IInvitationResponse {
  uuid: string;
  user: IVirtualNetworkUserResponse;
  invited_by: string;
  invited_at: Date;
  virtual_network: string;
}
