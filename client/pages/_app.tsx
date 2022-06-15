import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import getConfig from "next/config";
import { RecoilRoot } from "recoil";
import { io, Socket } from "socket.io-client";
import "../styles/globals.css";
import {
  socket as socketReference,
  SocketContext,
} from "../contexts/SocketContext";

const { publicRuntimeConfig } = getConfig();

let socket = socketReference;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const socketURL = new URL(window.location.origin);
    socketURL.port = publicRuntimeConfig.socketPORT;
    socket = io(publicRuntimeConfig.socketURL || socketURL.toString());
    const socketInitializer = async () => {
      socket.on("connect", () => {
        console.log("connected");
      });
    };

    socketInitializer().catch(console.error);
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SocketContext.Provider>
  );
}

export { SocketContext };
export default MyApp;
