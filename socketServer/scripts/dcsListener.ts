import events from "events";
import dgram from "dgram";
import { dcsData } from "./dcsDataSingleton";
import { dcsParser } from "./dcsParser";

let dcsClient: dgram.Socket;

const dcsListener = (internalEmitter: events) => {
  if (dcsClient) {
    dcsClient.close();
    for (let data in dcsData) delete dcsData[data];
  }

  return new Promise<void>((resolve) => {
    dcsClient = dgram.createSocket({ type: "udp4", reuseAddr: true });

    dcsClient.on("error", (e) => {
      console.log("ERRROR!");
      console.log(e);
    });

    dcsClient.on("listening", () => {
      // Listening
    });

    dcsClient.on("message", (msg, rinfo) => {
      dcsParser(msg, internalEmitter);
    });

    dcsClient.bind(7777, () => {
      resolve();
    });
  });
};

export { dcsListener };
