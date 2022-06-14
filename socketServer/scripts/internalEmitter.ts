import events from "events";
import { Socket } from "socket.io";
import { dcsData } from "./dcsDataSingleton";
import { getRelevantAddresses, RelevantData } from "./utils";

import * as parsers from "./parsers";

const createInternalEmitter = (
  relevantData: RelevantData[],
  clientSocket: Socket
) => {
  const relevantAddresses = getRelevantAddresses(relevantData);
  const internalEmitter = new events.EventEmitter();

  internalEmitter.on("dcs-bios-write", ([address, data, char1, char2]) => {
    if (relevantAddresses.includes(address[0])) {
      dcsData[address[0]] = char1;
      dcsData[address[0] + 1] = char2;
    }
  });

  internalEmitter.on("dcs-bios-frame-sync", () => {
    relevantData.forEach((property) => {
      parsers[property.type](property, clientSocket);
    });
  });
  return internalEmitter;
};

export { createInternalEmitter };
