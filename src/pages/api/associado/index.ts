import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import axios from "axios";
import ironConfig from "../../../utils/iron-config"; 

export default withIronSessionApiRoute(associadoList, ironConfig);

async function associadoList(req: NextApiRequest, res: NextApiResponse) { 

  const user = req.session.user;

  if (!user) {
    return res.status(401).json({ message: "Unauthenticated" });
  } 

  try { 
    // http://host.docker.internal:3000/pessoas/?page=0&limit=100&nome=

    console.log(`meu token ${user.token}`)

    const headers = {
        "Content-Type": "application/json",  
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + user.token, 
      }; 

    const { data } = await axios.get(`${process.env.NEST_API_HOST}/pessoas/?page=0&limit=100&nome=`, {
         headers: headers  
    }); 

    //  console.log(`meu retorno ${JSON.stringify(data.found.pessoas)}`)

    res.status(200).json(data.found.pessoas);
  } catch (e) {
    console.error(e);
    if (axios.isAxiosError(e)) {
      res.status(e.response!.status).json(e.response?.data);
    } else {
      res.status(500).json({ message: "Ocorreu um erro interno" });
    }
  } 
}