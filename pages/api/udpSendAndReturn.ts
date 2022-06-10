// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dgram from "dgram";
import { sendMsg } from "../../scripts/udp";
import { timeout } from "../../scripts/timeout";

type Data = {
  bytes: number;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const msg = req.query.msg.toString();
  const val = req.query.val.toString();
  const orig = req.query.orig.toString();

  const client = dgram.createSocket("udp4");

  await sendMsg(client, msg, val);
  await timeout(150);
  const bytes = await sendMsg(client, msg, orig);

  res.status(200).json({ bytes });
  client.close();
};

export default handler;
