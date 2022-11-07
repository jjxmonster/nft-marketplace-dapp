import * as React from "react";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

const NotConnectedWallet = () => {
  return (
    <div className="flex items-center justify-center flex-col w-full h-full">
      <AccountBalanceWalletIcon className="text-purple-light text-5xl" />
      <h2 className="text-white font-bold text-2xl">
        Connect your wallet first.
      </h2>
    </div>
  );
};

export default NotConnectedWallet;
