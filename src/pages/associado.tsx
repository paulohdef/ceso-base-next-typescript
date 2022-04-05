import { NextPage } from 'next'
import Layout from '../components/templates/Layout'

interface AssociadoProps {}

const AssociadoPage: NextPage<AssociadoProps> = (props) => {
  return (
    <div>
      <Layout titulo="Dashboar" subTitulo="Administrar suas informações">
        <div className="pt-6 px-6">
          <h1>Associado Page</h1>
        </div>
      </Layout>
    </div>
  )
}

export default AssociadoPage
