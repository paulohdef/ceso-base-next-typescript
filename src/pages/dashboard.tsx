import { NextPage } from 'next'
import useSWR from 'swr'

import { Line1 } from '../components/charts/Line'
import { List } from '../components/dashboard/List'

import Section from '../components/dashboard/Section'
import { IconeSetaAbaixo, IconeSetaAcima } from '../components/icons'
import TableBasic from '../components/TableBasic.tsx'
import Layout from '../components/templates/Layout'
import Card from '../components/templates/shortcodes/card'
import Dropdown from '../components/widgets/dropdown'
import Requisicao from '../core/Requisicao'
import { http } from '../utils/http'

type DashboarPageProps = {
  requerimento: Requisicao[]
}

const fetcher = (url: string) => http.get(url).then((res) => res.data)

const DashboarPage: NextPage<DashboarPageProps> = (props) => {
  const { requerimento: requerimentoProp } = props

  const { data: requerimento, error } = useSWR('api/requerimento', fetcher, {
    fallbackData: requerimentoProp,
    // refreshInterval: 1000,
    shouldRetryOnError: true,
  })

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
            <TableBasic requisicao={requerimento} />
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

export default DashboarPage
