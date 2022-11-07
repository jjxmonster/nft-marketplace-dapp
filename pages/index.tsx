import type { NextPage } from "next";
import Image from "next/image";

import Discover from "../assets/illustrations/discover.svg";
import Button from "../components/Button/Button";
import PageWrapper from "../components/PageWrapper/PageWrapper";

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <div className="w-1/2 flex flex-col items-center">
        <h1 className="text-6xl font-semibold text-bold text-white uppercase">
          Discover, Collect and sell nfts
        </h1>
        <div className="w-full pt-10 flex gap-5">
          <Button label="Get Stared" onClick={() => {}} color="primary" />
          <Button label="Create NFT's" onClick={() => {}} color="secondary" />
        </div>
      </div>
      <Image
        src={Discover}
        alt="Discover Illustration"
        width={500}
        height={500}
      />
    </PageWrapper>
  );
};

export default Home;
