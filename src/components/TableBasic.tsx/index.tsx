// import Cliente from "../core/Cliente";

import Requisicao from '../../core/Requisicao'

// import { IconeEdit, IconeExcluir } from "./icons";

interface TableBasicProps {
  requisicao: Requisicao[]
  // clienteSelecionado?: (cliente: Cliente) => void
  // clienteExcluido?: (cliente: Cliente) => void
}

export default function TableBasic(props: TableBasicProps) {
  // const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function rendereizarCabecalho() {
    return (
      <tr>
        <th className={` text-left text-xs p-2`}>Requisição</th>
        <th className={` text-left text-xs p-2`}>Data</th>
        <th className={` text-left text-xs p-2`}>Despacho</th>
        <th className={` text-left text-xs p-2`}>Descrição</th>
        <th className={` text-left text-xs p-2`}>Situação</th>
        <th className={` text-left text-xs p-2`}>Departamento</th>
        <th className={` text-left text-xs p-2`}>Status</th>
        <th className={` text-left text-xs p-2`}>Tipo</th>
        {/* {exibirAcoes ?  <th className={` text-center p-2`}>Ações</th> : false} */}
      </tr>
    )
  }

  function renderizarDados() {
    return props.requisicao?.map((req, i) => {
      return (
        <tr
          key={req.id}
          className={`${i % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'}`}
        >
          <td className={` text-left text-xs p-2`}> {req.id} </td>
          <td className={` text-left text-xs  p-2`}> {req.datarequisicao} </td>
          <td className={` text-left text-xs  p-2`}> {req.datadespacho} </td>
          <td className={` text-left text-xs  p-2`}> {req.descricao} </td>
          <td className={` text-left text-xs  p-2`}> {req.situacao} </td>
          <td className={` text-left text-xs  p-2`}> {req.departamento} </td>
          <td className={` text-left text-xs  p-2`}> {req.status} </td>
          <td className={` text-left text-xs  p-2`}> {req.tipo} </td>
          {/* {  exibirAcoes ? renderizarAcoes(finan) : false} */}
        </tr>
      )
    })
  }

  // function renderizarAcoes(financeiro: Financeiro) {

  //     return (
  //         <td className="flex justify-center md:justify-start">
  //             {props.clienteSelecionado ? (
  //                 <button onClick={ () => props.clienteSelecionado?.(financeiro) }
  //                 className={`
  //                     flex justify-center items-center
  //                      text-gray-300-600 rounded-full p-2 m-1
  //                      hover:bg-purple-50
  //                 `}>  { IconeEdit } </button>
  //             ) : false}

  //             {props.clienteExcluido ? (
  //                 <button onClick={ () => props.clienteExcluido?.(financeiro) }
  //                 className={`
  //                     flex justify-center items-center
  //                      text-red-600 rounded-full p-2 m-1
  //                      hover:bg-purple-50
  //                 `}>  { IconeExcluir } </button>
  //             ) : false}

  //         </td>
  //     )
  // }

  return (
    <table
      className={`
              w-full    overflow-hidden
        `}
    >
      <thead
        className={`
                 border-t-2 border-b-2 border-gray-300
            `}
      >
        {rendereizarCabecalho()}
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  )
}
