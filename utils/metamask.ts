import { Web3Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import { ethers } from "ethers";

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
  nonce: string
): Promise<string | void> => {
  try {
    const signature = await signer.signMessage(nonce);

    return signature;
  } catch {
    throw new Error("User denied message signature.");
  }
};
