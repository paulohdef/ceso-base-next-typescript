// @flow
import * as React from 'react'
interface CardProps {
  children?: any
  className?: string
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div
      className={`
            bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  ${props.className}
        `}
    >
      {props.children}
    </div>
  )
}

export default Card
