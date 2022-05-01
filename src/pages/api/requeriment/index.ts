 
import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import axios from "axios";
import ironConfig from "../../../utils/iron-config"; 

//Usar apanas para teste
const url = 'https://my-json-server.typicode.com/speedsis/ceso-base-next-typescript/tree/main/requerimento'

export default withIronSessionApiRoute(requerimentList, ironConfig);

async function requerimentList(req: NextApiRequest, res: NextApiResponse) { 

  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ message: "Unauthenticated" });
  } 

  try {

    const { data } = await axios.get(url);
    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');

    // const { data } = await axios.get(`${process.env.NEST_API_HOST}/orders`, {
    //   headers: {
    //     "x-token": account.token,
    //   },
    // });
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    if (axios.isAxiosError(e)) {
      res.status(e.response!.status).json(e.response?.data);
    } else {
      res.status(500).json({ message: "Ocorreu um erro interno" });
    }
  } 
}