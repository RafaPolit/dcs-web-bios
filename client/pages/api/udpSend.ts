// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dgram from "dgram";
import { sendMsg } from "../../scripts/udp";

type Data = {
  sent: string;
  bytes: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.query.msg) {
    const msg = req.query.msg.toString();
    const client = dgram.createSocket("udp4");

    const bytes = await sendMsg(client, msg);
    res.status(200).json({ sent: "OK", bytes });
    client.close();
  } else {
    res.status(200).json({ sent: "No msg", bytes: 0 });
  }
};

export default handler;
