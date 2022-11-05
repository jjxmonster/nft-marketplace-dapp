import { atom } from "recoil";

import {
  NotificationStateType,
  UserStateType,
  ContractStateType,
  LoadingStateType,
} from "../types/types.js";

// USER
export const userState = atom<UserStateType>({
  key: "userState",
  default: {
    address: null,
  },
});

// CONTRACTS
export const contractsState = atom<ContractStateType>({
  dangerouslyAllowMutability: true,
  key: "contractsState",
  default: {
    nft: null,
    marketplace: null,
  },
});

// NOTIFICATION
export const notificationState = atom<NotificationStateType>({
  key: "notificationState",
  default: {
    type: null,
    message: "",
    isVisible: false,
  },
});

// LOADING
export const loadingState = atom<LoadingStateType>({
  key: "loadingState",
  default: {
    isLoading: false,
    message: "",
  },
});
