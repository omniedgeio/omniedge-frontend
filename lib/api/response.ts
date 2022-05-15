import {
  Country,
  InvitationStatus,
  SecurityKeyType,
  ServerType,
  UsageKey,
  UserRole,
} from "./enum";

export enum ErrorCode {
  // Auth
  E_INVALID_AUTH_UID = "E_INVALID_AUTH_UID",
  E_EMAIL_PASSWORD_NOT_MATCH = "E_EMAIL_PASSWORD_NOT_MATCH",
  E_SAVE_USER = "E_SAVE_USER",
  E_GOOGLE_AUTH_FAIL = "E_GOOGLE_AUTH_FAIL",
  E_USER_EXISTED = "E_USER_EXISTED",
  E_USER_BLOCKED = "E_USER_BLOCKED",
  E_TOKEN_INVALID = "E_TOKEN_INVALID",
  E_TOKEN_EXPIRED = "E_TOKEN_EXPIRED",
  F_EMAIL_SEND = "F_EMAIL_SEND",
}

export interface IResponse<T = any, E = any> {
  code?: ErrorCode;
  message: string;
  data?: T;
  errors?: E;
}

export interface IPaginationMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  first_page: number;
}

export interface IPaginatedResponse<T = any> {
  meta: IPaginationMeta;
  data: T[];
}

export interface IAuthTokenResponse {
  type: string;
  token: string;
  refresh_token: string;
  expires_at: Date;
}

export interface IIdentityResponse {
  provider: string;
  enabled: string;
  metadata?: any;
}

export interface ISubscriptionItemResponse {
  price_id: string;
}

export interface ISubscriptionResponse {
  start_at: Date;
  end_at: Date;
  cancel_at: Date;
  slug: string;
  title: string | undefined;
}

export interface IProfileResponse {
  id: string;
  name: string;
  email: string;
  picture: string;
  identities: IIdentityResponse[];
  subscription: ISubscriptionResponse;
  usage_limits: UsageLimits;
}

type UsageLimits = Record<UsageKey, IUsageLimitResponse>;

export interface IUsageLimitResponse {
  limit: number;
  usage: number;
}

export interface IServerResponse {
  id: string;
  name: string;
  host: string;
  country: Country;
  type: ServerType;
}

/* -------------------------------------------------------------------------- */
/*                               Virtual Network                              */
/* -------------------------------------------------------------------------- */

export interface IVirtualNetworkResponse {
  id: string;
  name: string;
  ip_range: string;
  role: UserRole;
  server: IServerResponse;
  users_count: number;
  devices_count: number;
}

export interface IVirtualNetworkUserResponse extends IUserResponse {
  role: UserRole;
  joined_at: Date;
}

export interface IVirtualNetworkDeviceResponse extends IDeviceResponse {
  last_seen: Date;
  virtual_ip: string;
}

export type IVirtualNetworkInvitationResponse = Omit<
  IInvitationResponse,
  "virtual_network"
>;

/* -------------------------------------------------------------------------- */
/*                                   Device                                   */
/* -------------------------------------------------------------------------- */

export interface IDeviceResponse {
  id: string;
  name: string;
  platform: string;
  hardware_id: string;
  created_at: Date;
  virtual_networks: IDeviceVirtualNetworkResponse[];
  //subnets?: IDeviceSubnetRouteResponse[];
}

export interface IDeviceVirtualNetworkResponse
  extends Pick<IVirtualNetworkResponse, "id" | "name"> {
  virtual_ip: string;
}

/* -------------------------------------------------------------------------- */
/*                                    User                                    */
/* -------------------------------------------------------------------------- */

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  picture: string;
}

/* -------------------------------------------------------------------------- */
/*                                 Invitation                                 */
/* -------------------------------------------------------------------------- */

export interface IInvitationResponse {
  id: string;
  status: InvitationStatus;
  created_at: Date;
  virtual_network: Pick<IVirtualNetworkResponse, "id" | "name">;
  invited: Pick<IUserResponse, "id" | "name" | "email">;
  invited_by: Pick<IUserResponse, "id" | "name" | "email">;
}

/* -------------------------------------------------------------------------- */
/*                                Security Key                                */
/* -------------------------------------------------------------------------- */

export interface ISecurityKeyResponse {
  id: string;
  name: string;
  type: SecurityKeyType;
  expires_at: Date;
  created_at: Date;
}

export type ICreateSecurityKeyResponse = ISecurityKeyResponse & {
  key: string;
};

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
