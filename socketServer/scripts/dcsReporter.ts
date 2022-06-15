import events from "events";
import { Socket } from "socket.io";
import { dcsData } from "./dcsDataSingleton";
import { dcsListener } from "./dcsListener";
import { createInternalEmitter } from "./internalEmitter";

import * as relevantDataCollection from "./relevantData";

let internalEmitter: events;

const dcsReporter = (
  module: relevantDataCollection.Module,
  clientSocket: Socket
) => {
  const relevantData = relevantDataCollection[module];

  if (internalEmitter) {
    console.log("Removing all listeners. We only want one client.");
    internalEmitter.removeAllListeners();
  }

  internalEmitter = createInternalEmitter(relevantData, clientSocket);
  dcsListener(internalEmitter);
  console.log(`Connected to ${module}`);
};

export { dcsReporter, dcsData };
