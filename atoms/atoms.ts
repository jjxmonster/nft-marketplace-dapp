import { atom } from "recoil";

import { NotificationState, UserState } from "../types/atomsTypes.js";
import { Signer } from "ethers";

// USER
export const userState = atom<UserState>({
  key: "userState",
  default: {
    address: null,
  },
});

// SIGNER
export const signerState = atom<Signer | null>({
  dangerouslyAllowMutability: true,
  key: "signerState",
  default: null,
});

// NOTIFICATION
export const notificationState = atom<NotificationState>({
  key: "notificationState",
  default: {
    type: null,
    title: "",
  },
});
