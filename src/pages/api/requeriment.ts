import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import Requisicao from "../../core/Requisicao";


const url = 'https://my-json-server.typicode.com/speedsis/ceso-base-next-typescript/tree/main/requerimento'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Requisicao[]>
) {
  const { data } = await axios.get(url);
  res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

  const body = req.body 
  console.log(body)

  res.status(200).send(data);
}