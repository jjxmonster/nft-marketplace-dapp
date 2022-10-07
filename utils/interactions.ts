import { Web3Provider } from "@ethersproject/providers";
import { ethers } from "ethers";

export const getWeb3Provider = (): Web3Provider | null => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    return provider;
  } else {
    window.alert("Please install MetaMask");
    // TODO IMPLEMENT MESSAGE AS NOTIFICATION
    return null;
  }
};

export const getAccount = async (provider: Web3Provider): Promise<string> => {
  const accounts: Array<string> = await provider.send(
    "eth_requestAccounts",
    []
  );
  const account = accounts[0];

  return account;
};
