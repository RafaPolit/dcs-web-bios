import { Server } from "socket.io";
import { hexToUtf8, RelevantData } from "../utils";
import { dcsData, previousUpdates } from "../dcsDataSingletons";

const string = (property: RelevantData, io: Server) => {
  let output = "";
  for (
    let address = property.address;
    address < property.address + property.max_length;
    address++
  ) {
    const baseAddress = address - (address % 2);
    const baseData = dcsData[baseAddress];
    let data: number;

    if (baseData) {
      data = address % 2 ? baseData >> 8 : baseData & 0xff;
    }

    if (address < property.address + property.max_length) {
      output += data ? hexToUtf8(data.toString(16)) : " ";
    }
  }
  if (output) {
    if (previousUpdates[property.identifier] !== output) {
      previousUpdates[property.identifier] = output;
      io.emit("dcs-data-update", [property.identifier, output]);
    }
  }
};

export { string };
