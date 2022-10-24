import { Web3Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import { ethers } from "ethers";
import { LoadingStateType } from "../../types/types";
import { MSG_NONCE_WAITING, MSG_SIGNATURE_ERROR } from "../constants/constants";

export const getWeb3Provider = async (): Promise<Web3Provider | void> => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    return provider;
  }
};

export const getAccount = async (
  provider: Web3Provider
): Promise<string | void> => {
  try {
    const accounts: Array<string> = await provider.send(
      "eth_requestAccounts",
      []
    );
    const account = accounts[0];

    return account;
  } catch ({ message }) {
    if (typeof message === "string") {
      throw new Error(message);
    }
  }
};

export const signMessage = async (
  signer: Signer,
  nonce: string,
  setLoadingState: (state: LoadingStateType) => void
): Promise<string | void> => {
  setLoadingState({
    isLoading: true,
    message: MSG_NONCE_WAITING,
  });
  try {
    const signature = await signer.signMessage(nonce);

    return signature;
  } catch {
    throw new Error(MSG_SIGNATURE_ERROR);
  }
};
