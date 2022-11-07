import * as React from "react";
import { useSetRecoilState } from "recoil";

import {
  contractsState,
  loadingState,
  notificationState,
  userState,
} from "../../atoms/atoms";
import { connectWallet } from "../../utils/functions/interactions";
import Button from "../Button/Button";

const ConnectWalletButton = () => {
  const setUser = useSetRecoilState(userState);
  const setNotificationState = useSetRecoilState(notificationState);
  const setLoadingState = useSetRecoilState(loadingState);
  const setContractsState = useSetRecoilState(contractsState);

  return (
    <>
      <Button
        color="primary"
        label="Connect Wallet"
        onClick={() =>
          connectWallet({
            setUser,
            setNotificationState,
            setLoadingState,
            setContractsState,
          })
        }
      />
    </>
  );
};

export default ConnectWalletButton;
