import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Socket } from "socket.io-client";
import { f16cDEDState } from "../../atoms/f-16c-ded";
import { SocketContext } from "../../contexts/SocketContext";

const Settings = () => {
  const setf16cDed = useSetRecoilState(f16cDEDState);
  const [connected, setConnected] = useState(false);

  const connect = async (socket: Socket) => {
    try {
      socket.on(
        "dcs-data-update",
        ([property, data]: [property: string, data: string]) => {
          setf16cDed((oldValues) => ({
            ...oldValues,
            [property]: {
              text: data.substring(0, 24),
              highlights: data.split("|")[1],
            },
          }));
        }
      );

      socket.emit("connect-module", "f16c");
      setConnected(true);
    } catch (e) {
      console.log(e);
      setConnected(false);
    }
  };

  return (
    <div>
      <div className="p-4">
        Connect to DCS:
        <SocketContext.Consumer>
          {(socket) => (
            <button
              className="bg-neutral-500 px-4 py-2 mx-2 rounded-lg"
              onClick={() => connect(socket)}
            >
              Connect
            </button>
          )}
        </SocketContext.Consumer>
        <span className="text-neutral-400">
          Only required for on-screen feedback, not to send data.
        </span>
      </div>
      <div className="p-4">
        Status: {connected ? "Connected" : "Not Connected"}
      </div>
    </div>
  );
};

export { Settings };
