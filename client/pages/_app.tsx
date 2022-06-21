import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import getConfig from "next/config";
import { RecoilRoot } from "recoil";
import { io, Socket } from "socket.io-client";
import "../styles/globals.css";
import { SocketContext } from "../contexts/SocketContext";

const { publicRuntimeConfig } = getConfig();

function MyApp({ Component, pageProps }: AppProps) {
  const [socket, setSocket] = useState({} as Socket);

  useEffect(() => {
    const socketURL = new URL(window.location.origin);
    socketURL.port = publicRuntimeConfig.socketPORT;
    const newSocket = io(publicRuntimeConfig.socketURL || socketURL.toString());
    const socketInitializer = async () => {
      newSocket.on("connect", () => {
        console.log("Connected!");
      });
    };

    socketInitializer().catch(console.error);
    setSocket(newSocket);
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
