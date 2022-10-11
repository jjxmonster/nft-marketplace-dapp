import { selector } from "recoil";
import { ContractState } from "../types/atomsTypes";

export const contractsSelector = selector({
  key: "contractsState",
  set: async ({ set }, newValue) => {},
  get: async () => {},
});
