import { Socket } from "socket.io";
import { hexToUtf8, RelevantData } from "../utils";
import { dcsData, previousUpdates } from "../dcsDataSingletons";

const string = (property: RelevantData, clientSocket: Socket) => {
  let output = "";
  for (
    let address = property.address;
    address < property.address + property.max_length;
    address++
  ) {
    const baseAddress = address - (address % 2);
    const baseData = dcsData[baseAddress];
    let data: number;

    if (typeof baseData !== "undefined") {
      data = address % 2 ? baseData >> 8 : baseData & 0xff;
    }

    if (address < property.address + property.max_length) {
      output += data !== undefined ? hexToUtf8(data.toString(16)) : " ";
    }
  }
  if (output) {
    if (previousUpdates[property.indentifier] !== output) {
      previousUpdates[property.indentifier] = output;
      clientSocket.emit("dcs-data-update", [property.indentifier, output]);
    }
  }
};

export { string };
