import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/Layout/Layout";
import { RecoilRoot } from "recoil";
import NotificationBox from "../components/NotificationBox/NotificationBox";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex bg-gray max-h-screen">
      <RecoilRoot>
        <AppLayout />
        {/* <NotificationBox /> */}
      </RecoilRoot>
      {/* <Component {...pageProps} /> */}
    </div>
  );
}

export default MyApp;
