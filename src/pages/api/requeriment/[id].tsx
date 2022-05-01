import type { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import axios from 'axios'
import ironConfig from '../../../utils/iron-config'

export default withIronSessionApiRoute(requeriment, ironConfig)

async function requeriment(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.user

  if (!user) {
    return res.status(401).json({ message: 'Unauthenticated' })
  }

  const { id } = req.query

  console.log(`dentro do ID ${id}`)

  //Usar apanas para teste
  const url = `https://my-json-server.typicode.com/speedsis/ceso-base-next-typescript/tree/main/requerimento/${id}`

  try {
    const { data } = await axios.get(url)
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59',
    )

    // const { data } = await axios.get(`${process.env.NEST_API_HOST}/orders/${id}`, {
    //   headers: {
    //     "x-token": account.token,
    //   },
    // });

    const newData = {
      _id: '624c5a965e4ce3ea923cdd04',
      index: 2,
      guid: '4de53452-6454-4227-bd2d-5b7b139ea90f',
      isActive: false,
      datarequisicao: '2014-03-06T03:55:50 +03:00',
      datadespacho: '2020-05-07T12:25:16 +03:00',
      descricao: 'enim sint do et et ex anim eiusmod sunt irure',
      situacao: 'EM ANALISE',
      departamento: 'AUMOXARIFADO',
      status: 'PROTOCOLADO',
      tipo: 'MEMORANDO',
    }

    res.status(404).json(newData)

    // res.status(200).json(data)
  } catch (e) {
    console.error(e)
    if (axios.isAxiosError(e)) {
      res.status(e.response!.status).json(e.response?.data)
    } else {
      res.status(500).json({ message: 'Ocorreu um erro interno' })
    }
  }
}
