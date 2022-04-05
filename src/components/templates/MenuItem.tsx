import Link from 'next/link'

interface MenuItemProps {
  url?: string
  texto: string
  icone: any
  onClick?: (e: any) => void
  className?: string
}

export default function MenuItem(props: MenuItemProps) {
  function renderizarLink() {
    return (
      <a
        className={`
        className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group  bg-gray-100" ${props.className}   `}
      >
        {props.icone}

        <span
          className={`
              ml-3 flex-1 whitespace-nowrap
            `}
        >
          {props.texto}
        </span>
      </a>
    )
  }

  return (
    <li
      onClick={props.onClick}
      className={` 
              dark:hover:bg-gray-800 hover:text-blue-800
             cursor-pointer 
        `}
    >
      {props.url ? (
        <Link href={props.url} passHref>
          {renderizarLink()}
        </Link>
      ) : (
        renderizarLink()
      )}
    </li>
  )
}
