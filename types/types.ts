import type { BaseContract } from "ethers";
import { ReactElement } from "react";

// ATOMS
export enum NotificatonType {
  DANGER,
  INFORMATION,
  SUCCESS,
}
export interface UserStateType {
  address: string | null;
}
export interface ContractStateType {
  nft: BaseContract | null;
  marketplace: BaseContract | null;
}
export interface NotificationStateType {
  type: NotificatonType | null;
  message: string;
  isVisible: boolean;
}
export interface LoadingStateType {
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
export interface ConnectWalletFunctionArgumentsType {
  setNotificationState: (state: NotificationStateType) => void;
  setUser: (state: UserStateType) => void;
  setLoadingState: (state: LoadingStateType) => void;
}
