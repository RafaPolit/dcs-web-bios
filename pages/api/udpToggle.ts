// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dgram from "dgram";

type Data = {
  bytes: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const msg = req.query.msg.toString();
  const client = dgram.createSocket("udp4");
  client.send(msg + " TOGGLE\n", 7778, "192.168.0.7", (err, _bytes) => {
    if (err) {
      console.log("err:", err);
    }
    client.send(msg + " TOGGLE\n", 7778, "192.168.0.7", (err, bytes) => {
      if (err) {
        console.log("err:", err);
      }
      res.status(200).json({ bytes });
      client.close();
    });
  });
}
