import React from "react";
import { Socket } from "socket.io-client";

const SocketContext = React.createContext({} as Socket);

export { SocketContext };
