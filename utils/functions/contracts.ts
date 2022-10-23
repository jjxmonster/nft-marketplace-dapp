import { BaseContract, Signer } from "ethers";
import { ethers } from "ethers";

import NFTAddress from "../../contractsData/NFT-address.json";
import NFTAbi from "../../contractsData/NFT.json";
import MarketplaceAddress from "../../contractsData/Marketplace-address.json";
import MarketplaceAbi from "../../contractsData/Marketplace.json";

export const getNFTContract = async (
  signer: Signer
): Promise<BaseContract | void> => {
  try {
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
    return nft;
  } catch ({ message }) {
    if (typeof message === "string") {
      throw new Error(message);
    }
  }
};

export const getMarketplaceContract = async (
  signer: Signer
): Promise<BaseContract | void> => {
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
};
