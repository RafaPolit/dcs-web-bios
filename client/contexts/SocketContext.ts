import React, { useEffect } from "react";
import { io, Socket } from "socket.io-client";

const SocketContext = React.createContext({} as Socket);

export { SocketContext };
