import * as React from "react";
import { useSetRecoilState } from "recoil";

import {
  contractsState,
  notificationState,
  userState,
} from "../../atoms/atoms";
import { connectWallet } from "../../utils/interactions";

const ConnectWalletButton = () => {
  const setUser = useSetRecoilState(userState);
  const setNotificationState = useSetRecoilState(notificationState);
  const setContractsState = useSetRecoilState(contractsState);

  return (
    <button
      onClick={() => connectWallet({ setNotificationState, setUser })}
      className="bg-purple-light px-6 py-2 border-solid border-purple-light border-2 transition rounded-full text-white hover:bg-transparent hover:text:purple-light"
    >
      Connect Wallet
    </button>
  );
};

export default ConnectWalletButton;
