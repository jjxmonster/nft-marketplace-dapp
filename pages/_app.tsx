import "../styles/globals.css";
import type { AppProps } from "next/app";
import AppLayout from "../components/Layout/Layout";
import { RecoilRoot } from "recoil";
import NotificationBox from "../components/NotificationBox/NotificationBox";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";
import supabase from "../utils/supabase/supabase";

function MyApp({ Component, pageProps }: AppProps) {
  const checkUser = async () => {
    const { data } = await supabase.from("users").select("*");
    console.log(data);
  };

  return (
    <div className="min-h-screen flex bg-gray max-h-screen">
      <RecoilRoot>
        <AppLayout />
        <NotificationBox />
        <LoadingIndicator />
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
