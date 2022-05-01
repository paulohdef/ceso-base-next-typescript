import { GetStaticPaths, GetStaticProps } from 'next'
import axios from 'axios'
import useSWR from 'swr'
import Router, { useRouter } from 'next/router'
import Layout from '../../components/templates/Layout'
import Card from '../../components/templates/shortcodes/card'

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

const RequerimentShowPage = (props: any) => {
  const router = useRouter()
  const { id } = router.query

  console.log('retorno requerimento' + id)

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/requeriment/${id}`,
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

  console.log('retorno requerimento' + data)

  return data ? (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="pt-4 px-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">
            {/* <TableBasic requisicao={requerimento} /> */}

            <h1> {data.descricao} </h1>

            {/* <ModalRequerimento /> */}
          </Card>
        </div>
      </div>
    </Layout>
  ) : null
}

export default RequerimentShowPage

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
