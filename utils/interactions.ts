import {
  ConnectWalletFunctionArguments,
  NotificatonType,
} from "../types/types";

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

      let response = await fetch("/api/auth/nonce", {
        method: "POST",
        body: JSON.stringify({ address }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { nonce } = await response.json();
      const signature = await signMessage(signer, nonce);

      response = await fetch("/api/auth/wallet", {
        method: "POST",
        body: JSON.stringify({ address, signature, nonce }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { user, token } = await response.json();

      console.log(token);

      // setUser(user);
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
