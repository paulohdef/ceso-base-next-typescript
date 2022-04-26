import { NextPage } from 'next/types'
import ModalRequerimento from '../components/modal/Modal-Requerimento'
import TableBasic from '../components/TableBasic.tsx'
import Layout from '../components/templates/Layout'
import Card from '../components/templates/shortcodes/card'
import Requisicao from '../core/Requisicao'

type RequerimentPageProps = {
  requerimento: Requisicao[]
}

const RequerimentPage: NextPage<RequerimentPageProps> = (props) => {
  return (
    <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
      <div className="pt-4 px-4">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
          <Card className="xl:col-span-3 ">
            {/* <TableBasic requisicao={requerimento} /> */}
            <TableBasic />

            <ModalRequerimento />
          </Card>
        </div>
      </div>
    </Layout>
  )
}

export default RequerimentPage
