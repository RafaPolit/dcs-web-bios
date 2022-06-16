import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Socket } from "socket.io-client";
import { dcsDataState } from "../atoms/dcsData";
import { SocketContext } from "../contexts/SocketContext";

type SettingsProps = {
  module: string;
};

const Settings = ({ module }: SettingsProps) => {
  const setDcsData = useSetRecoilState(dcsDataState);
  const [connected, setConnected] = useState(false);

  const connect = async (socket: Socket) => {
    try {
      setDcsData({});
      socket.on(
        "dcs-data-update",
        ([property, data]: [property: string, data: string]) => {
          setDcsData((oldValues) => ({ ...oldValues, [property]: data }));
        }
      );
      socket.emit("connect-module", module);
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
