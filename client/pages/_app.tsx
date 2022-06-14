import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { io, Socket } from "socket.io-client";
import "../styles/globals.css";

const socket = io("http://localhost:3001");
const SocketContext = React.createContext(socket);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
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
