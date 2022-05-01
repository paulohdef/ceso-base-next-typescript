import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import useSWR from 'swr'
import Router, { useRouter } from 'next/router'
import Layout from '@/src/components/templates/Layout'
import Breadcrumb from '@/src/components/breadcrumbs'
import Card from '@/src/components/templates/shortcodes/card'
import { IcEmail, IcInstagram, IcTwitter } from '@/src/components/icons'

import { useState } from 'react'

import CardSettings from './components/CardSettings'
import { Timeline1 } from '@/src/components/timelines'
import Section from '@/src/components/dashboard/Section'
import Image from 'next/image'
import RouterWithParams from '@/src/utils/util'
import ModalServico from '@/src/components/modal/ModalServico'

import servicos from '../../json/servicos.json'
import TabelaDependentes from '@/src/components/TabelaDependentes'

import Dependente from '@/src/core/Dependente'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const AssociadoShowPage = (props: any) => {
  const router = useRouter()

  const { id } = router.query

  const items = servicos

  const [openTab, setOpenTab] = useState(1)

  const itemsBreadcrumbs = [
    { title: 'Home', url: '/dashboard', last: false },
    { title: 'Lista Associados', url: '/associado', last: false },
    { title: 'Associado', url: `/associado/${id}`, last: true },
  ]

  const dependente = [
    new Dependente(
      '1',
      'TESTE DEPENDENTE',
      '10/11/2021',
      '123232',
      '213123123123',
      'SOLTEIRO',
      'teste@gmail.com',
      'MASCULINO',
    ),
    new Dependente(
      '2',
      'FILHO 01',
      '10/11/2021',
      '1313123',
      '13131313',
      'CASADO',
      'filho1@email.com',
      'FEMININO',
    ),
    new Dependente(
      '3',
      'FILHO 02',
      '10/11/2021',
      '3232323',
      '31312313',
      'SOLTEIRO',
      'filho2@gmail.com',
      'FEMININO',
    ),
  ]

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/associado/${id}`,
    fetcher,
    {
      onError: (error) => {
        console.log(error)
        if (error.response.status === 401 || error.response.status === 403) {
          Router.push('/login')
        }
      },
    },
  )

  return data ? (
    <div>
      <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
        <div className="pt-4 px-4">
          <div className="flex flex-row mb-4">
            <div className="w-full">
              <Breadcrumb
                items={itemsBreadcrumbs}
                home={true}
                icon="chevrons"
              />
            </div>
          </div>

          <Card>
            <div className="intro-y box px-5 pt-0 mt-0">
              <div className="flex flex-1 lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-0 -mx-5">
                <div className="flex flex-1 px-5 items-start justify-start lg:justify-start">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                    <Image
                      className="rounded-full"
                      src={data.imagem}
                      alt=""
                      width={120}
                      height={120}
                    />
                  </div>
                  <div className="ml-5">
                    <div className="w-40 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                      {data.nome}
                    </div>
                    <div className="text-slate-500"> {data.nomeGuerra}</div>
                  </div>
                </div>
                <div className="mt-0 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400  lg:border-t-0 pt-0 lg:pt-0">
                  <div className="font-medium text-start lg:text-left lg:mt-3">
                    Contato Detalhes
                  </div>
                  <div className="flex flex-col justify-center items-start lg:items-start mt-4">
                    <div className="truncate sm:whitespace-normal flex items-center">
                      <IcEmail />
                      {data.email}
                    </div>
                    <div className="truncate sm:whitespace-normal flex items-center mt-3">
                      <IcInstagram />
                      Instagram {data.nomeGuerra}
                    </div>
                    <div className="truncate sm:whitespace-normal flex items-center mt-3">
                      <IcTwitter />
                      Twitter {data.nomeGuerra}
                    </div>
                  </div>
                </div>

                <div className="mt-0 lg:mt-0 flex-1 flex items-center justify-center px-5  lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-0 lg:pt-0">
                  {/* GRID SERVICOS */}
                  <div className={`   gap-4 col-span-1 order-4    `}>
                    <div className="grid lg:grid-cols-5 md:grid-cols-5  grid-wrap gap-2 pt-2 ">
                      {items.map((item: any, i: any) => (
                        <>
                          <ModalServico
                            key={i}
                            title={item.title}
                            subTitle={item.subTitle}
                            src={item.src}
                          />
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex flex-wrap mt-4">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 1
                          ? 'text-white bg-blue-400'
                          : 'text-blueGray-600 bg-gray-50')
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(1)
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      <i className="fas fa-space-shuttle text-base mr-1"></i>{' '}
                      Editar Dados
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 2
                          ? 'text-white bg-blue-400'
                          : 'text-blueGray-600 bg-gray-50')
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(2)
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      <i className="fas fa-cog text-base mr-1"></i> Dependentes
                    </a>
                  </li>

                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 3
                          ? 'text-white bg-blue-400'
                          : 'text-blueGray-600 bg-gray-50')
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(3)
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      <i className="fas fa-briefcase text-base mr-1"></i>{' '}
                      Financeiro
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 4
                          ? 'text-white bg-blue-400'
                          : 'text-blueGray-600 bg-gray-50')
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(4)
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      <i className="fas fa-briefcase text-base mr-1"></i>{' '}
                      Auxílio Peculio
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center bg-gray-100">
                    <a
                      className={
                        'text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal ' +
                        (openTab === 5
                          ? 'text-white bg-blue-400'
                          : 'text-blueGray-600 bg-gray-50')
                      }
                      onClick={(e) => {
                        e.preventDefault()
                        setOpenTab(5)
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      <i className="fas fa-briefcase text-base mr-1"></i>{' '}
                      Auxílio Funeral
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="flex flex-wrap ">
            <div className="lg:w-8/12 pr-4 py-4">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <CardSettings />
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className="flex flex-col bg-white border gap-2  pb-10 border-b-2 border-gray-100">
                    <div className="flex flex-row justify-start px-1">
                      <p className="text-principal  p-2 font-semibold  text-base ">
                        LISTAGEM DE DEPENDENTES
                      </p>
                    </div>

                    <div className="py-2">
                      <TabelaDependentes dependente={dependente} />
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className=" sm:w-4/12 md:w-4/12 lg:w-4/12 xl:w-4/12  px-0 py-4">
              <Section
                title="Financeiro"
                description={<span>Últimos 6 meses</span>}
                right={''}
              >
                <div className="flex flex-row w-full">
                  {/* <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">Customers</h2>
                  </header> */}

                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Tipo</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Valor</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Vencimento
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">
                              Status
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        <tr key={1}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">Auxílio financeiro</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              $2,890.66
                            </div>
                          </td>

                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              15/06/2022
                            </div>
                          </td>

                          <td className="p-2 whitespace-nowrap">Aberto</td>
                        </tr>
                        <tr key={2}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">Aberto</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-red-500">
                              $2,767.04
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-red-500">
                              15/04/2022
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">Em atraso</td>
                        </tr>
                        <tr key={3}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">Auxílio financeiro</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-red-500">
                              $2,996.00
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-red-500">
                              15/03/2022
                            </div>
                          </td>

                          <td className="p-2 whitespace-nowrap">Em atraso</td>
                        </tr>
                        <tr key={4}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">Auxílio financeiro</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              $1,220.66
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              15/06/2022
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">Aberto</td>
                        </tr>
                        <tr key={5}>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">Auxílio financeiro</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              $1,890.66
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              15/06/2022
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">Aberto</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Section>

              <div className="py-4">
                <Section
                  title="Atividades"
                  description={<span>Últimos 6 meses</span>}
                  right={''}
                >
                  <div className="flex flex-row w-full">
                    <Timeline1 />
                  </div>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  ) : null
}

export default AssociadoShowPage

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
    revalidate: 20,
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  return {
    paths: [],
    fallback: 'blocking', //
  }
}
