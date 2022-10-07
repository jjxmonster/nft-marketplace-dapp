import { atom } from "recoil";

export const contracts = atom({
  key: "contractsState",
  default: {
    nft: null,
    marketplace: null,
  },
});
