import { Server } from "socket.io";
import { RelevantData } from "../utils";
import { dcsData, previousUpdates } from "../dcsDataSingletons";

const integer = (property: RelevantData, io: Server) => {
  let output = "";
  const data = dcsData[property.address];

  if (typeof data !== "undefined") {
    output += (data & property.mask) >> property.shift_by;
  }

  if (output) {
    if (previousUpdates[property.identifier] !== output) {
      previousUpdates[property.identifier] = output;
      io.emit("dcs-data-update", [property.identifier, output]);
    }
  }
};

export { integer };
