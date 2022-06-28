import dgram from "dgram";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const sendMsg = (
  client: dgram.Socket,
  msg: string,
  val?: string,
  port?: number
) => {
  const result = new Promise<number>((resolve, reject) => {
    const sendPort = port || 7778;

    client.send(
      `${msg}${val !== undefined ? " " + val : ""}\n`,
      sendPort,
      publicRuntimeConfig.dcsIP,
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
  const encodedMsg = encodeURI(msg).replace(/\+/g, "%2b");
  const apiCall = await fetch(
    `/api/udp${method}?msg=${encodedMsg}&val=${val}&orig=${orig}`
  );
  await apiCall.json();
};

export { udp, sendMsg };
