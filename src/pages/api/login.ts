import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import ironConfig from "../../utils/iron-config";

export default withIronSessionApiRoute(login, ironConfig);

async function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  console.log(email);
  console.log(password);

  try { 
    //http://host.docker.internal:3000/auth/signin

    const headers = {
      "Content-Type": "application/json",  
      "Access-Control-Allow-Origin": "*",
      // Authorization: "Bearer " + this.$gate.token(), 
    }; 

    const { data } = await axios.post(
      `${process.env.NEST_API_HOST}/auth/signin`,
      {
        email,
        password,
      }, 
      // { headers: headers }
    );

    console.log(`resposta do servidor ${data}`);

    req.session.user = data;

    await req.session.save();

    res.status(200).json(data);
  } catch (e) {

    console.error(e);
    res.status(401).json({ message: "Unauthenticated" });
  }
}
