import * as React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/atoms";

import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";

const Header = () => {
  const user = useRecoilValue(userState);

  return (
    <header className="fixed h-16 z-30 px-28 py-12 w-full flex items-center justify-end bg-gray right-6">
      {user.address ? (
        <p className="text-white">{user.address}</p>
      ) : (
        <ConnectWalletButton />
      )}
    </header>
  );
};

export default Header;
