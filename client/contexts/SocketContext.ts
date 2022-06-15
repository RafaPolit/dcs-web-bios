import React, { useEffect } from "react";
import { io, Socket } from "socket.io-client";

let socket = {} as Socket;
const SocketContext = React.createContext(socket);

export { socket, SocketContext };
