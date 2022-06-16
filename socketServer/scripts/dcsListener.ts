import events from "events";
import dgram from "dgram";
import { dcsData, previousUpdates } from "./dcsDataSingletons";
import { dcsParser } from "./dcsParser";

let dcsClient: dgram.Socket;

const dcsListener = (internalEmitter: events) => {
  if (dcsClient) {
    console.log("Closing dcsClient and flushing dcsData.");
    dcsClient.close();
    for (let data in dcsData) delete dcsData[data];
    for (let data in previousUpdates) delete previousUpdates[data];
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
