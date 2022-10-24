import {
  ConnectWalletFunctionArgumentsType,
  NotificatonType,
} from "../../types/types";
import {
  MSG_METAMASK_ERROR,
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
