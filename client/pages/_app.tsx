import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import getConfig from "next/config";
import { RecoilRoot } from "recoil";
import { io, Socket } from "socket.io-client";
import "../styles/globals.css";

const { publicRuntimeConfig } = getConfig();
let socket = {} as Socket;
const SocketContext = React.createContext(socket);

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
