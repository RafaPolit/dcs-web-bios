import events from "events";
import { Server } from "socket.io";
import { dcsData } from "./dcsDataSingletons";
import { getRelevantAddresses, RelevantData } from "./utils";
import * as parsers from "./parsers";

const createInternalEmitter = (relevantData: RelevantData[], io: Server) => {
  const relevantAddresses = getRelevantAddresses(relevantData);
  const internalEmitter = new events.EventEmitter();

  internalEmitter.on("dcs-bios-write", ([address, data]) => {
    if (relevantAddresses.includes(address[0])) {
      dcsData[address[0]] = data[0];
    }
  });

  internalEmitter.on("dcs-bios-frame-sync", () => {
    relevantData.forEach((property) => {
      parsers[property.type](property, io);
    });
  });

  return internalEmitter;
};

export { createInternalEmitter };
