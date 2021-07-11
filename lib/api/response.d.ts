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
}

export interface IProfileResponse {
  uuid: string;
  name: string;
  email: string;
  picture: string;
  identities: IdentityResponse[];
}

export interface IDeviceResponse {
  uuid: string;
  name: string;
  os: string;
  virtual_networks: IDeviceVirtualNetworkResponse[];
}

export interface IDeviceVirtualNetworkResponse {
  uuid: string;
  name: string;
  virtual_ip: string;
  last_seen: Date;
  online: boolean;
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
