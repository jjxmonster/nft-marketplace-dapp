import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/Layout/Layout";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex bg-gray max-h-screen">
      <RecoilRoot>
        <AppLayout />
      </RecoilRoot>
      {/* <Component {...pageProps} /> */}
    </div>
  );
}

export default MyApp;
