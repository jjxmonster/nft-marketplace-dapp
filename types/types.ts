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
export interface LoadingState {
  isLoading: boolean;
  message: string;
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

// FUNCTIONS ARGUMENTS
export interface ConnectWalletFunctionArguments {
  setNotificationState: (state: NotificationState) => void;
  setUser: (state: UserState) => void;
  setLoadingState: (state: LoadingState) => void;
}
