import { GetServerSideProps, NextPage } from 'next'

import { Line1 } from '../components/charts/Line'
import { List } from '../components/dashboard/List'

import Section from '../components/dashboard/Section'
import { IconeSetaAbaixo, IconeSetaAcima } from '../components/icons'
import ModalRequerimento from '../components/modal/Modal-Requerimento'
import TableBasic from '../components/TableBasicRedux.tsx'
import Layout from '../components/templates/Layout'
import Card from '../components/templates/shortcodes/card'
import Dropdown from '../components/widgets/dropdown'
import Requisicao from '../core/Requisicao'
import { withIronSessionSsr } from 'iron-session/next'
import axios from 'axios'
import ironConfig from '../utils/iron-config'
import useSWR from 'swr'
import Router from 'next/router'

type HomePageProps = {
  requerimento: Requisicao[]
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const HomePage: NextPage<HomePageProps> = (props) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/requeriment`,
    fetcher,
    {
      fallbackData: props.requerimento,
      refreshInterval: 2,
      onError: (error) => {
        console.log(error)
        if (error.response.status === 401 || error.response.status === 403) {
          Router.push('/login')
        }
      },
    },
  )

  console.log('retorno' + data)

  return (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="pt-4 px-4">
        <div className="mt-0 mb-4 w-full grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4  gap-4">
          <Card>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  2,340
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Solicitados
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                14.6%
                {IconeSetaAcima}
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  1,140
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Aguardando
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                14.6%
                {IconeSetaAcima}
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  55
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Despachados
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                32.9%
                {IconeSetaAcima}
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                  385
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  Recentes
                </h3>
              </div>
              <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                -2.7%
                {IconeSetaAbaixo}
              </div>
            </div>
          </Card>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">
            {/* <TableBasic requisicao={requerimento} /> */}
            <TableBasic />

            <ModalRequerimento />
          </Card>
        </div>

        <div className="mt-4 mb-4 w-full grid grid-cols-2 md:grid-cols-2 xl:grid-cols-2  gap-4">
          <div className="w-full ">
            <Section
              title="Atendimentos"
              description={<span>por mês</span>}
              right={<Dropdown />}
            >
              <div className="flex flex-row w-full">
                <Line1 />
              </div>
            </Section>
          </div>

          <div className="w-full">
            <Section
              title="Atendimentos"
              description={<span>Por demanda</span>}
              right={<Dropdown />}
            >
              <div className="flex flex-row w-full">
                <List />
              </div>
            </Section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

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
        requerimento: data,
      },
    }
  },
  ironConfig,
)
