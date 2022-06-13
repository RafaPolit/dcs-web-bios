// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import events from "events";
import type { NextApiRequest, NextApiResponse } from "next";
import dgram from "dgram";
import { timeout } from "../../scripts/timeout";
import { parseBuffer } from "../../scripts/parser";
import { stderr } from "process";

let dcsClient: dgram.Socket;

const dcsData: number[] = [];

const relevantData = [
  {
    indentifier: "DED_LINE_1",
    address: 17668,
    max_length: 29,
    type: "string+control",
  },
  {
    indentifier: "DED_LINE_2",
    address: 17698,
    max_length: 29,
    type: "string+control",
  },
  {
    indentifier: "DED_LINE_3",
    address: 17728,
    max_length: 29,
    type: "string+control",
  },
  {
    indentifier: "DED_LINE_4",
    address: 17758,
    max_length: 29,
    type: "string+control",
  },
  {
    indentifier: "DED_LINE_5",
    address: 17788,
    max_length: 29,
    type: "string+control",
  },
];

const hexToUtf8 = (s: string) => {
  let conversion = "";
  try {
    conversion = decodeURIComponent(
      s.replace(/[0-9a-f]{2}/g, "%$&") // add '%' before each 2 characters
    );
  } catch (e) {
    // not sure yet
  }

  return conversion;
};

const reverse = (s: string) => {
  return s.split("").reverse().join("");
};

const relevantAddresses = relevantData.reduce<number[]>((memo, property) => {
  let a = property.address;
  for (a = property.address; a < property.address + property.max_length; a++) {
    memo.push(a);
  }
  return memo;
}, []);

console.log(relevantAddresses);

type Data = {
  connected: string;
};

const createEmitter = () => {
  const emitter = new events.EventEmitter();

  emitter.on("dcs-bios-write", ([address, data, char1, char2]) => {
    if (relevantAddresses.includes(address[0])) {
      dcsData[address[0]] = char1;
      dcsData[address[0] + 1] = char2;
    }
  });

  emitter.on("dcs-bios-frame-sync", () => {
    relevantData.forEach((property) => {
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
          output +=
            "|" +
            (dcsData[address] !== undefined
              ? reverse(dcsData[address].toString(2)).padEnd(8, "0")
              : "00000000");
        }
      }
      if (output) {
        console.log(`${property.indentifier}: ${output}`);
      }
    });
  });
  return emitter;
};

const createSocket = (emitter: events) => {
  console.log("Creating socket");
  if (dcsClient) {
    console.log("Already have a client");
    try {
      console.log("Trying to disconnect");
      dcsClient.disconnect();
    } catch (e) {
      console.log("Already disconnected!");
    }
    console.log("Closing");
    dcsClient.close();
  }

  console.log("New socket!");
  return new Promise<void>((resolve, reject) => {
    // var parser = ProtocolParser();
    dcsClient = dgram.createSocket({ type: "udp4", reuseAddr: true });

    dcsClient.on("error", (e) => {
      console.log("ERRROR!");
      console.log(e);
    });

    dcsClient.on("listening", () => {
      const address = dcsClient.address();
      console.log(`UDP Client listening on ${address.address}:${address.port}`);
      // dcsClient.setMulticastTTL(128);
      // dcsClient.addMembership("239.255.50.10");
    });

    dcsClient.on("message", (msg, rinfo) => {
      // console.log("rinfo:", rinfo);
      parseBuffer(msg, emitter);
      // console.log("----------------------");
      // var data = new DataView(msg);
      // console.log(data);
      // for (var i = 0; i < data.byteLength; i++)
      //   parser.processChar(data.getUint8(i));
    });

    dcsClient.bind(7777, () => {
      // dcsClient.addMembership("239.255.50.10", "127.0.0.1");
      resolve();
    });
  });
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  console.log("Connecting to DCS!");
  try {
    const emitter = createEmitter();
    await createSocket(emitter);
    await timeout(10000);
    console.log("waited 10 secs");
    res.status(200).json({ connected: "OK!" });
  } catch (e) {
    res.status(500).json({ connected: "Failed!" });
  }
};

export default handler;
