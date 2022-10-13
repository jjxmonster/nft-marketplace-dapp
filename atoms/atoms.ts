import { atom } from "recoil";

import { NotificationState, UserState } from "../types/atomsTypes.js";
import { ContractState } from "../types/atomsTypes";

// USER
export const userState = atom<UserState>({
  key: "userState",
  default: {
    address: null,
  },
});

// CONTRACTS
export const contractsState = atom<ContractState>({
  dangerouslyAllowMutability: true,
  key: "contractsState",
  default: {
    nft: null,
    marketplace: null,
  },
});

// NOTIFICATION
export const notificationState = atom<NotificationState>({
  key: "notificationState",
  default: {
    type: null,
    title: "",
  },
});
