import { Socket } from "socket.io";
import { hexToUtf8, reverse, RelevantData } from "../utils";
import { dcsData, previousUpdates } from "../dcsDataSingletons";

const stringAndControl = (property: RelevantData, clientSocket: Socket) => {
  let output = "";
  for (
    let address = property.address;
    address < property.address + property.max_length;
    address++
  ) {
    if (address < property.address + property.max_length - 4) {
      output +=
        dcsData[address] !== undefined
          ? hexToUtf8(dcsData[address].toString(16))
          : "";
    } else {
      if (address === property.address + property.max_length - 4) {
        output += "|";
      }
      output +=
        dcsData[address] !== undefined
          ? reverse(dcsData[address].toString(2)).padEnd(8, "0")
          : "00000000";
    }
  }
  if (output) {
    if (previousUpdates[property.indentifier] !== output) {
      previousUpdates[property.indentifier] = output;
      clientSocket.emit("dcs-data-update", [property.indentifier, output]);
    }
  }
};

export { stringAndControl };
