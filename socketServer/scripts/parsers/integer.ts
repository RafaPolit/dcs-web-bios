import { Socket } from "socket.io";
import { hexToUtf8, RelevantData } from "../utils";
import { dcsData, previousUpdates } from "../dcsDataSingletons";

const integer = (property: RelevantData, clientSocket: Socket) => {
  let output = "";
  const data = dcsData[property.address];

  if (typeof data !== "undefined") {
    output += (data & property.mask) >> property.shift_by;
  }

  if (output) {
    if (previousUpdates[property.indentifier] !== output) {
      previousUpdates[property.indentifier] = output;
      clientSocket.emit("dcs-data-update", [property.indentifier, output]);
    }
  }
};

export { integer };
