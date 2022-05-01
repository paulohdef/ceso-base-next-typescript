import { NextPage, GetServerSideProps } from 'next'
import Breadcrumb from '../../components/breadcrumbs'

import Layout from '../../components/templates/Layout'
import Card from '../../components/templates/shortcodes/card'
import { withIronSessionSsr } from 'iron-session/next'
import axios from 'axios'
import ironConfig from '../../utils/iron-config'
import useSWR from 'swr'
import Router from 'next/router'

import TableBasicAssociado from '@/src/components/TableAssociado.tsx'

interface AssociadoProps {}

const itemsBreadcrumbs = [
  { title: 'Home', url: '/dashboard', last: false },
  { title: 'Associado', url: '/associado', last: true },
]

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const AssociadoPage: NextPage<AssociadoProps> = (props: any) => {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/associado`,
    fetcher,
    {
      fallbackData: props.listAssociado,
      refreshInterval: 2,
      onError: (error) => {
        console.log(error)
        if (error.response.status === 401 || error.response.status === 403) {
          Router.push('/login')
        }
      },
    },
  )

  // if (error)
  //   return <div>Um erro ocorreu! por favor avise os desenvolvedores.</div>
  // if (!data) return <div>Loading...</div>

  return (
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

          <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            <Card className="xl:col-span-3 ">
              <TableBasicAssociado listAssociado={data} />
            </Card>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default AssociadoPage

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
      `${process.env.NEXT_PUBLIC_API_HOST}/associado`,
      {
        headers: {
          cookie: context.req.headers.cookie as string,
        },
      },
    )

    return {
      props: {
        listAssociado: data,
      },
    }
  },
  ironConfig,
)
