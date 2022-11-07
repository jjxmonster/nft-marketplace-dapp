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
    <RecoilRoot>
      <div className="min-h-screen bg-gray max-h-screen grid grid-cols-4 grid-rows-6 gap-2">
        <AppLayout />
        <NotificationBox />
        <LoadingIndicator />
        <Component {...pageProps} />
      </div>
    </RecoilRoot>
  );
}

export default MyApp;
