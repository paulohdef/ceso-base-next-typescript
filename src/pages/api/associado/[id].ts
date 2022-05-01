
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import axios from "axios";
import ironConfig from "../../../utils/iron-config";

export default withIronSessionApiRoute(associado, ironConfig);

async function associado(req: NextApiRequest, res: NextApiResponse) {

  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ message: "Unauthenticated" });
  }

  const { id } = req.query;

  console.log(`pessoa token ${user.token}`)
  console.log(`pessoa id ${ id }`)

  const headers = {
    "Content-Type": "application/json",  
    "Access-Control-Allow-Origin": "*",
    "Authorization": "Bearer " + user.token, 
  }; 

  try {
    const { data } = await axios.get(`${process.env.NEST_API_HOST}/pessoas/${id}`, {
      headers: headers
    });

    res.status(200).json(data.pessoa);

  } catch (e) {
    console.error(e);
    if (axios.isAxiosError(e)) {
      res.status(e.response!.status).json(e.response?.data);
    } else {
      res.status(500).json({ message: "Ocorreu um erro interno" });
    }
  }
}