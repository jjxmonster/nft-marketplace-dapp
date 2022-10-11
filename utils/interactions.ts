import { Web3Provider } from "@ethersproject/providers";
import { BaseContract, Signer } from "ethers";
import { ethers } from "ethers";

import NFTAddress from "../contractsData/NFT-address.json";
import NFTAbi from "../contractsData/NFT.json";
import MarketplaceAddress from "../contractsData/Marketplace-address.json";
import MarketplaceAbi from "../contractsData/Marketplace.json";

export const getWeb3Provider = async (): Promise<Web3Provider | null> => {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    return provider;
  } else {
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

// CONTRACTS
export const getNFTContract = async (
  signer: Signer
): Promise<BaseContract | null> => {
  try {
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    return nft;
  } catch {
    return null;
  }
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
  } catch (error) {
    return null;
  }
};
