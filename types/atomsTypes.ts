import type { BaseContract, Contract } from "ethers";

enum NotificatonType {
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
  title: string;
}
