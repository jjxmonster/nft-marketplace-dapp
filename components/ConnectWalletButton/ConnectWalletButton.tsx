import * as React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  contractsState,
  notificationState,
  userState,
} from "../../atoms/atoms";
import { NotificatonType } from "../../types/types";
import {
  getAccount,
  getMarketplaceContract,
  getNFTContract,
  getWeb3Provider,
} from "../../utils/interactions";

const ConnectWalletButton = () => {
  const setUser = useSetRecoilState(userState);
  const setNotificationState = useSetRecoilState(notificationState);
  const setContractsState = useSetRecoilState(contractsState);

  const connectWallet = async () => {
    const provider = await getWeb3Provider();
    if (provider) {
      try {
        const signer = provider.getSigner();
        const user = await getAccount(provider);
        // const nft = await getNFTContract(signer);
        // const marketplace = await getMarketplaceContract(signer);

        setUser({
          address: user,
        });
      } catch ({ message }) {
        if (typeof message === "string") {
          setNotificationState({
            type: NotificatonType.DANGER,
            message,
            isVisible: true,
          });
        }
      }

      //   setContractsState({ nft, marketplace });
    } else {
      window.alert("Please install MetaMask");
      // TODO IMPLEMENT MESSAGE AS NOTIFICATION
    }
  };
  return (
    <button
      onClick={connectWallet}
      className="bg-purple-light px-6 py-2 border-solid border-purple-light border-2 transition rounded-full text-white hover:bg-transparent hover:text:purple-light"
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;
