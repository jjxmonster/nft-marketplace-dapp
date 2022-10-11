import * as React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userState } from "../../atoms/atoms";

import SearchIcon from "@mui/icons-material/Search";

import {
  getAccount,
  getMarketplaceContract,
  getNFTContract,
  getWeb3Provider,
} from "../../utils/interactions";
import { signerState } from "../../atoms/atoms";

const Header = () => {
  const [user, setUser] = useRecoilState(userState);
  const setSignerState = useSetRecoilState(signerState);

  const connectWallet = async () => {
    const provider = await getWeb3Provider();
    if (provider) {
      const signer = provider.getSigner();
      const user = await getAccount(provider);
      setUser({
        address: user,
      });
      setSignerState(signer);
    } else {
      window.alert("Please install MetaMask");
      // TODO IMPLEMENT MESSAGE AS NOTIFICATION
    }
  };

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

      {!user.address && (
        <button
          onClick={connectWallet}
          className="bg-purple-light px-6 py-2 border-solid border-purple-light border-2 transition rounded-full text-white hover:bg-transparent hover:text:purple-light"
        >
          Connect Wallet
        </button>
      )}
    </header>
  );
};

export default Header;
