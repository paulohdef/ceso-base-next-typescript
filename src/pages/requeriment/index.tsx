import TableRequeriment from '@/src/components/TableRequeriment.tsx'
import { GetServerSideProps, NextPage } from 'next'

import Layout from '../../components/templates/Layout'
import Card from '../../components/templates/shortcodes/card'
import Requisicao from '../../core/Requisicao'
import { withIronSessionSsr } from 'iron-session/next'
import axios from 'axios'
import ironConfig from '../../utils/iron-config'
import useSWR from 'swr'
import Router from 'next/router'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const RequerimentPage = (props: any) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/requeriment`,
    fetcher,
    {
      fallbackData: props.listRequeriment,
      refreshInterval: 2,
      onError: (error) => {
        console.log(error)
        if (error.response.status === 401 || error.response.status === 403) {
          Router.push('/login')
        }
      },
    },
  )

  // console.log('retorno' + data)

  return (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="pt-4 px-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">
            {/* <TableBasic requisicao={requerimento} /> */}

            <TableRequeriment listRequeriment={data} />

            {/* <ModalRequerimento /> */}
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default RequerimentPage

export const getServerSideProps: GetServerSideProps = withIronSessionSsr(
  async (context) => {
    const user = context.req.session.user

    if (!user) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      }
    }

    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_HOST}/requeriment`,
      {
        headers: {
          cookie: context.req.headers.cookie as string,
        },
      },
    )

    return {
      props: {
        listRequeriment: data,
      },
    }
  },
  ironConfig,
)
