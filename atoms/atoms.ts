import { atom } from "recoil";

import {
  NotificationState,
  UserState,
  ContractState,
  LoadingState,
} from "../types/types.js";

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
    message: "",
    isVisible: false,
  },
});

// LOADING
export const loadingState = atom<LoadingState>({
  key: "loadingState",
  default: {
    isLoading: false,
    message: "",
  },
});
