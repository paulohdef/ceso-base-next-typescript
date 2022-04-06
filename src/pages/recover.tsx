import { NextPage } from 'next'
import Link from 'next/link'
import ForgotPassword from '../components/forms/forgot-password'
import CenteredForm from '../components/templates/Centered-form'

const RecoverPassword: NextPage = () => {
  return (
    <CenteredForm
      title="Esqueceu a senha"
      subtitle="Por favor entre com seu endereço de email para recuperar sua senha."
    >
      <ForgotPassword message="Thanks for your message. We'll get back to you as soon as possible" />

      <div className="w-full mt-2">
        <span>
          <Link href="/login">
            <a className="link">Voltar para login</a>
          </Link>
        </span>
      </div>
    </CenteredForm>
  )
}

export default RecoverPassword
