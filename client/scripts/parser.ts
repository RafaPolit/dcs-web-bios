import events from "events";
import { Buffer } from "node:buffer";

function ProtocolParser(emitter: events) {
  const parser = Object.create(ProtocolParser.prototype);

  let state = "WAIT_FOR_SYNC";
  let syncByteCount = 0;
  const addressBuffer = new ArrayBuffer(2);
  const addressUint8 = new Uint8Array(addressBuffer);
  const addressUint16 = new Uint16Array(addressBuffer);
  const countBuffer = new ArrayBuffer(2);
  const countUint8 = new Uint8Array(countBuffer);
  const countUint16 = new Uint16Array(countBuffer);
  const dataBuffer = new ArrayBuffer(2);
  const dataUint8 = new Uint8Array(dataBuffer);
  const dataUint16 = new Uint16Array(dataBuffer);

  parser.processChar = (c: number) => {
    switch (state) {
      case "WAIT_FOR_SYNC":
        break;
      case "ADDRESS_LOW":
        addressUint8[0] = c;
        state = "ADDRESS_HIGH";
        break;
      case "ADDRESS_HIGH":
        addressUint8[1] = c;
        if (addressUint16[0] != 0x5555) {
          state = "COUNT_LOW";
        } else {
          state = "WAIT_FOR_SYNC";
        }
        break;
      case "COUNT_LOW":
        countUint8[0] = c;
        state = "COUNT_HIGH";
        break;
      case "COUNT_HIGH":
        countUint8[1] = c;
        state = "DATA_LOW";
        break;
      case "DATA_LOW":
        dataUint8[0] = c;
        countUint16[0]--;
        state = "DATA_HIGH";
        break;
      case "DATA_HIGH":
        dataUint8[1] = c;
        countUint16[0]--;
        emitter.emit("dcs-bios-write", [
          addressUint16,
          dataUint16,
          dataUint8[0],
          dataUint8[1],
        ]);
        addressUint16[0] += 2;
        if (countUint16[0] === 0) {
          state = "ADDRESS_LOW";
        } else {
          state = "DATA_LOW";
        }
    }
    if (c == 0x55) syncByteCount++;
    else syncByteCount = 0;

    if (syncByteCount == 4) {
      state = "ADDRESS_LOW";
      syncByteCount = 0;
      emitter.emit("dcs-bios-frame-sync");
    }
  };

  return parser;
}

const parseBuffer = (buffer: Buffer, emitter: events) => {
  const parser = ProtocolParser(emitter);

  for (const buf of buffer) {
    parser.processChar(buf);
  }
};

export { parseBuffer };
