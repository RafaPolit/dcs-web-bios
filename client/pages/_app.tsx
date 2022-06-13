import { useEffect } from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { io } from "socket.io-client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const socketInitializer = async () => {
      const socket = io("http://localhost:3001");

      socket.on("connect", () => {
        console.log("connected");
      });
    };

    socketInitializer().catch(console.error);
  }, []);

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
