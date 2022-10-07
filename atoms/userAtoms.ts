import { atom } from "recoil";
import { UserState } from "../types/atomsTypes.js";

export const userState = atom<UserState>({
  key: "userState",
  default: {
    address: null,
  },
});
