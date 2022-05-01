import moment from 'moment'
import { PencilSVG, TrashSVG } from '../icons'
import Link from 'next/link'
import Pessoa from '@/src/core/Pessoa'
import Image from 'next/image'

interface TableAssociadoProps {
  listAssociado: Pessoa[]
}

const formatDate = (value: any) => {
  return moment().format('DD/MM/YYYY') //moment(value).format(moment.HTML5_FMT.DATE)
}

export default function TableBasicAssociado(props: TableAssociadoProps) {
  const { listAssociado } = props

  return (
    <table className={` w-full    overflow-hidden `}>
      <thead
        className={`
             border-t-2 border-b-2 border-gray-300
        `}
      >
        <tr>
          <th className={` text-left text-xs p-2`}>Matrícula</th>
          <th className={` text-left text-xs p-2`}>Nome</th>
          <th className={` text-left text-xs p-2`}>Nome guerra</th>
          <th className={` text-left text-xs p-2`}>Dt Nascimento</th>
          <th className={` text-left text-xs p-2`}>email</th>
          <th className={` text-left text-xs p-2`}>Endereço</th>
          <th className={` text-left text-xs p-2`}>CEP</th>
          <th className={` text-left text-xs p-2`}>Complemento</th>
        </tr>
      </thead>

      <tbody className="table__body">
        {listAssociado.map(
          (
            {
              id,
              imagem,
              matricula,
              nome,
              nomeGuerra,
              dataNascimento,
              email,
              endereco,
              cep,
              complemento,
            }: any,
            i: any,
          ) => (
            <tr
              key={i}
              className={`${i % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'}`}
            >
              <td className={` font-medium text-blue-900 p-2`}>{matricula}</td>

              <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                    <Image
                      className="rounded-full"
                      src={imagem}
                      alt=""
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="font-medium text-blue-900"> {nome} </div>
                </div>
              </td>

              {/* <td className={` text-left text-xs  p-2`}>
                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                  <Image
                    className="rounded-full"
                    src={imagem}
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
                <div className="font-medium text-gray-800"> {nome} </div>
              </td> */}
              <td className={` text-left text-xs  p-2`}> {nomeGuerra} </td>
              <td className={` text-left text-xs  p-2`}>
                {' '}
                {formatDate(dataNascimento)}{' '}
              </td>
              <td className={` text-left text-xs  p-2`}> {email} </td>

              <td className={` text-left text-xs  p-2`}>{endereco}</td>

              <td className={` text-left text-xs  p-2`}> {cep} </td>
              <td className={` text-left text-xs  p-2`}> {complemento} </td>

              <td>
                <Link href={`/associado/${id}`} passHref>
                  <button className="btn btn__compact btn__delete">
                    <PencilSVG />
                  </button>
                </Link>

                <button className="btn btn__compact btn__delete">
                  <TrashSVG />
                </button>
              </td>
            </tr>
          ),
        )}
      </tbody>
    </table>
  )
}
