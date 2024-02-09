import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "@/Contexts/UserContext";
import LoadingScreen from "@/components/LoadingScreen";
import { CookiesProvider } from "react-cookie";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
    <UserContextProvider>
      <LoadingScreen />
      <Component {...pageProps} />
    </UserContextProvider>
    </CookiesProvider>
  );
}
