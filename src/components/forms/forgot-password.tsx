import { useState } from 'react'
// import Alert from '../alerts'

type ForgotProps = {
  message: string
}
const ForgotPassword = (props: ForgotProps) => {
  const { message } = props

  const [data, onSubmit] = useState(null)

  let items = [
    {
      label: 'Email',
      error: { required: 'Please enter a valid email' },
      name: 'email',
      type: 'email',
      placeholder: 'Enter you email',
    },
  ]

  return (
    <>
      <div className="flex flex-col">
        {data && message && (
          <div className="w-full mb-4">
            {/* <Alert
              color="bg-transparent border-green-500 text-green-500"
              borderLeft
              raised
            >
              {message}
            </Alert> */}
          </div>
        )}
      </div>
    </>
  )
}

export default ForgotPassword
