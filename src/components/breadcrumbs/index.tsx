import Link from 'next/link'
import { IcChevronRight, IcHome } from '../icons'
import PropTypes from 'prop-types'

interface Item {
  home?: boolean
  title: string
  url: string
  last: boolean
}
interface BreadcrumbProps {
  home?: boolean
  icon?: string
  items: Item[]
}

const Breadcrumb = ({
  home = false,
  icon = 'arrow',
  items,
}: BreadcrumbProps) => (
  <nav className="w-full flex">
    <ol className="list-none flex flex-row items-center justify-start">
      {home && (
        <li className="mr-2 flex items-center">
          <IcHome />
        </li>
      )}
      {items.map((item: any, i: any) => (
        <li className="flex items-center" key={i}>
          <Link href={item.url} passHref>
            <a className="mr-2">{item.title}</a>
          </Link>

          {!item.last && icon === 'chevrons' && <IcChevronRight />}
        </li>
      ))}
    </ol>
  </nav>
)
Breadcrumb.propTypes = {
  home: PropTypes.bool,
  icon: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      home: PropTypes.bool,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      last: PropTypes.bool.isRequired,
    }),
  ).isRequired,
}
export default Breadcrumb
