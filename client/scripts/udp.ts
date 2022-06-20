import dgram from "dgram";
import { IP } from "../config/dcsConf";

const sendMsg = (client: dgram.Socket, msg: string, val?: string) => {
  const result = new Promise<number>((resolve, reject) => {
    client.send(
      `${msg}${val !== undefined ? " " + val : ""}\n`,
      7778,
      IP,
      (err, bytes) => {
        if (err) {
          console.log("err:", err);
          reject(err);
        }
        resolve(bytes);
      }
    );
  });

  return result;
};

const udp = async (
  method: string = "send",
  msg: string,
  val?: string,
  orig?: string
) => {
  const apiCall = await fetch(
    `/api/udp${method}?msg=${encodeURI(msg)}&val=${val}&orig=${orig}`
  );
  await apiCall.json();
};

export { udp, sendMsg };
