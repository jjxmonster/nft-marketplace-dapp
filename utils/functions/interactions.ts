import {
  ConnectWalletFunctionArguments,
  NotificatonType,
} from "../../types/types";
import {
  MGS_NONCE_GENERATING,
  MSG_METAMASK_ERROR,
  MSG_NONCE_WAITING,
  MSG_USER_LOGGED,
  MSG_WALLET_CONNECTING,
} from "../constants/constants";

import { getNonce, getUser } from "./data";
import { getAccount, getWeb3Provider, signMessage } from "./metamask";

// WALLET CONNECTION HANDLER
export const connectWallet = async ({
  setNotificationState,
  setUser,
  setLoadingState,
}: ConnectWalletFunctionArguments) => {
  setLoadingState({
    isLoading: true,
    message: MSG_WALLET_CONNECTING,
  });
  const provider = await getWeb3Provider();
  if (provider) {
    try {
      const signer = provider.getSigner();
      const address = await getAccount(provider);
      setLoadingState({
        isLoading: true,
        message: MGS_NONCE_GENERATING,
      });
      const nonce = await getNonce(address);
      setLoadingState({
        isLoading: true,
        message: MSG_NONCE_WAITING,
      });
      const signature = await signMessage(signer, nonce);
      const user = await getUser(address, signature, nonce);

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
