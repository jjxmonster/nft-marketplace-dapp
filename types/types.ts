import type { BaseContract } from "ethers";
import { ReactElement } from "react";

// ATOMS
export enum NotificatonType {
  DANGER,
  INFORMATION,
  SUCCESS,
}

export interface UserState {
  address: string | null;
}
export interface ContractState {
  nft: BaseContract | null;
  marketplace: BaseContract | null;
}
export interface NotificationState {
  type: NotificatonType | null;
  message: string;
  isVisible: boolean;
}

// SIDEBAR
export type SidebarItemType = {
  name: string;
  pathname: string;
  icon: ReactElement;
};

// RESPONSE
export type ResponseType = {
  isError: boolean;
  data: any;
  message?: string;
};
