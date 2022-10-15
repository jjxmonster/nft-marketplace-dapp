import * as React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/atoms";

import SearchIcon from "@mui/icons-material/Search";
import ConnectWalletButton from "../ConnectWalletButton/ConnectWalletButton";

const Header = () => {
  const user = useRecoilValue(userState);

  return (
    <header className="h-16 z-50 px-28 py-12 w-5/6 flex items-center justify-between bg-gray right-6">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10  w-50 text-sm rounded-lg border border-light-gray focus:ring-transparent focus:border-blue-500 bg-transparent placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search items"
          required
        />
      </div>

      {!user.address && <ConnectWalletButton />}
    </header>
  );
};

export default Header;
