import events from "events";
import { Server } from "socket.io";
import { dcsListener } from "./dcsListener";
import { createInternalEmitter } from "./internalEmitter";

import * as relevantDataCollection from "./relevantData";

let internalEmitter: events;

const dcsReporter = (module: relevantDataCollection.Module, io: Server) => {
  const relevantData = relevantDataCollection[module] || [];

  if (internalEmitter) {
    console.log("Removing all listeners. We only want one client.");
    internalEmitter.removeAllListeners();
  }

  internalEmitter = createInternalEmitter(relevantData, io);
  dcsListener(internalEmitter);
  console.log(`Connected to ${module}`);
};

export { dcsReporter };
