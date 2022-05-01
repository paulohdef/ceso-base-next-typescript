import Dependente from '@/src/core/Dependente'

interface TabelaDependentesProps {
  dependente: Dependente[]
  // pessoaSelecionado?: (cliente: Pessoa) => void
  // pessoaExcluido?: (cliente: Pessoa) => void
}

export default function TabelaDependentes(props: TabelaDependentesProps) {
  // const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function rendereizarCabecalho() {
    return (
      <tr>
        <th className={` text-left text-xs p-2`}>Nome</th>
        <th className={` text-left text-xs p-2`}>Dt Nascimento</th>
        <th className={` text-left text-xs p-2`}>RG</th>
        <th className={` text-left text-xs p-2`}>CPF</th>
        <th className={` text-left text-xs p-2`}>Estado Civil</th>
        <th className={` text-left text-xs p-2`}>email</th>
        <th className={` text-left text-xs p-2`}>Sexo</th>
        {/* {exibirAcoes ?  <th className={` text-center p-2`}>Ações</th> : false} */}
      </tr>
    )
  }

  function renderizarDados() {
    return props.dependente?.map((req, i) => {
      return (
        <tr key={i} className={`${i % 2 === 0 ? 'bg-blue-100' : 'bg-blue-50'}`}>
          <td className={` text-left text-xs p-2`}> {req.nome} </td>
          <td className={` text-left text-xs  p-2`}> {req.dataNascimento} </td>
          <td className={` text-left text-xs  p-2`}> {req.rg} </td>
          <td className={` text-left text-xs  p-2`}> {req.cpf} </td>
          <td className={` text-left text-xs  p-2`}> {req.estadoCivil} </td>
          <td className={` text-left text-xs  p-2`}> {req.email} </td>
          <td className={` text-left text-xs  p-2`}> {req.sexo} </td>

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
