import {
  ConnectWalletFunctionArguments,
  NotificatonType,
} from "../types/types";

import { getNonce, getUser } from "./data";
import { getAccount, getWeb3Provider, signMessage } from "./metamask";

// WALLET CONNECTION HANDLER
export const connectWallet = async ({
  setNotificationState,
  setUser,
}: ConnectWalletFunctionArguments) => {
  const provider = await getWeb3Provider();
  if (provider) {
    try {
      const signer = provider.getSigner();
      const address = await getAccount(provider);
      const nonce = await getNonce(address);
      const signature = await signMessage(signer, nonce);
      const user = await getUser(address, signature, nonce);

      setNotificationState({
        type: NotificatonType.SUCCESS,
        message: "User logged successfully",
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
      message: "Please install MetaMask",
      isVisible: true,
    });
  }
};
