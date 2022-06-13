// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dgram from "dgram";
import { sendMsg } from "../../scripts/udp";

type Data = {
  bytes: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const msg = req.query.msg.toString();
  const client = dgram.createSocket("udp4");

  const bytes = await sendMsg(client, msg);
  res.status(200).json({ bytes });
  client.close();
};

export default handler;
