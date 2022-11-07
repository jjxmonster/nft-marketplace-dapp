import * as React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/atoms";

import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";

const Header = () => {
  const user = useRecoilValue(userState);

  return (
    <header className="col-start-2 col-span-3 h-16 z-50 px-28 py-12 flex items-center justify-end bg-gray right-6">
      {user.address ? (
        <p className="text-white">{user.address}</p>
      ) : (
        <ConnectWalletButton />
      )}
    </header>
  );
};

export default Header;
