import { Socket } from "socket.io";
import { hexToUtf8, reverse, RelevantData } from "../utils";
import { dcsData, previousUpdates } from "../dcsDataSingletons";

const string = (property: RelevantData, clientSocket: Socket) => {
  let output = "";
  for (
    let address = property.address;
    address < property.address + property.max_length;
    address++
  ) {
    output +=
      dcsData[address] !== undefined
        ? hexToUtf8(dcsData[address].toString(16))
        : "";
  }
  if (output) {
    if (previousUpdates[property.indentifier] !== output) {
      previousUpdates[property.indentifier] = output;
      clientSocket.emit("dcs-data-update", [property.indentifier, output]);
    }
  }
};

export { string };
