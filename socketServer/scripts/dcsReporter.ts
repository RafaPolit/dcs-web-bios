import { Socket } from "socket.io";
import { dcsData } from "./dcsDataSingleton";
import { dcsListener } from "./dcsListener";
import { createInternalEmitter } from "./internalEmitter";

import * as relevantDataCollection from "./relevantData";

const dcsReporter = (
  module: relevantDataCollection.Module,
  clientSocket: Socket
) => {
  const relevantData = relevantDataCollection[module];
  const internalEmitter = createInternalEmitter(relevantData, clientSocket);
  dcsListener(internalEmitter);
};

export { dcsReporter, dcsData };
