import React from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/atoms";

import CreateNFTForm from "../../components/CreateNFTForm/CreateNFTForm";
import NotConnectedWallet from "../../components/NotConnectedWallet/NotConnectedWallet";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const Create = () => {
  const { address } = useRecoilValue(userState);

  return (
    <PageWrapper>
      {address ? <CreateNFTForm /> : <NotConnectedWallet />}
    </PageWrapper>
  );
};

export default Create;
