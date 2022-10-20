import { Web3Provider } from "@ethersproject/providers";
import { BaseContract, Signer } from "ethers";
import { ethers } from "ethers";

import NFTAddress from "../contractsData/NFT-address.json";
import NFTAbi from "../contractsData/NFT.json";
import MarketplaceAddress from "../contractsData/Marketplace-address.json";
import MarketplaceAbi from "../contractsData/Marketplace.json";
import {
  ConnectWalletFunctionArguments,
  NotificatonType,
} from "../types/types";

// WALLET CONNECTION HANDLER
export const connectWallet = async ({
  setNotificationState,
  setUser,
}: ConnectWalletFunctionArguments) => {
  const provider = await getWeb3Provider();
  if (provider) {
    try {
      const signer = provider.getSigner();
      const user = await getAccount(provider);
      const nft = await getNFTContract(signer);
      const marketplace = await getMarketplaceContract(signer);

      // setNotificationState({
      //   type: NotificatonType.SUCCESS,
      //   message: "Wallet connected successfully",
      //   isVisible: true,
      // });
      const response = await fetch("/api/auth/nonce", {
        method: "POST",
        body: JSON.stringify({ address: user }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { nonce } = await response.json();
      const signature = await signer.signMessage(nonce);
      // setUser({
      //   address: user,
      // });
      // setContractsState({ nft, marketplace });
    } catch ({ message }) {
      if (typeof message === "string") {
        setNotificationState({
          type: NotificatonType.DANGER,
          message,
          isVisible: true,
        });
      }
    }
  } else {
    setNotificationState({
      type: NotificatonType.INFORMATION,
      message: "Please install MetaMask",
      isVisible: true,
    });
  }
};

// METAMASK
export const getWeb3Provider = async (): Promise<Web3Provider | null> => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    return provider;
  } else {
    return null;
  }
};

export const getAccount = async (
  provider: Web3Provider
): Promise<string | null> => {
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

  return null;
};

// CONTRACTS
export const getNFTContract = async (
  signer: Signer
): Promise<BaseContract | null> => {
  try {
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    return nft;
  } catch ({ message }) {
    if (typeof message === "string") {
      throw new Error(message);
    }
  }
  return null;
};

export const getMarketplaceContract = async (
  signer: Signer
): Promise<BaseContract | null> => {
  try {
    const nft = new ethers.Contract(
      MarketplaceAddress.address,
      MarketplaceAbi.abi,
      signer
    );
    return nft;
  } catch (message) {
    if (typeof message === "string") {
      throw new Error(message);
    }
  }
  return null;
};
