import {
  ConnectWalletFunctionArgumentsType,
  NotificatonType,
} from "../../types/types";
import {
  MSG_METAMASK_ERROR,
  MSG_USER_LOGGED,
  MSG_WALLET_CONNECTING,
} from "../constants/constants";
import supabase from "../supabase/supabase";
import { getMarketplaceContract, getNFTContract } from "./contracts";

import { getNonce, getUser } from "./data";
import { getAccount, getWeb3Provider, signMessage } from "./metamask";

// WALLET CONNECTION HANDLER
export const connectWallet = async ({
  setNotificationState,
  setUser,
  setLoadingState,
  setContractsState,
}: ConnectWalletFunctionArgumentsType) => {
  setLoadingState({
    isLoading: true,
    message: MSG_WALLET_CONNECTING,
  });
  const provider = await getWeb3Provider();
  if (provider) {
    try {
      const signer = provider.getSigner();
      const address = await getAccount(provider);
      const nonce = await getNonce(address, setLoadingState);
      const signature = await signMessage(signer, nonce, setLoadingState);
      const { user, token } = await getUser(address, signature, nonce);
      const nft = await getNFTContract(signer);
      const marketplace = await getMarketplaceContract(signer);

      supabase.functions.setAuth(token);

      nft &&
        marketplace &&
        setContractsState({
          nft,
          marketplace,
        });
      setLoadingState({
        isLoading: false,
        message: "",
      });
      setNotificationState({
        type: NotificatonType.SUCCESS,
        message: MSG_USER_LOGGED,
        isVisible: true,
      });
      setUser(user);
    } catch ({ message }) {
      setLoadingState({
        isLoading: false,
        message: "",
      });
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
      message: MSG_METAMASK_ERROR,
      isVisible: true,
    });
  }
};
