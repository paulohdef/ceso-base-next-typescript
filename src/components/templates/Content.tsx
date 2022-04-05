// @flow
import * as React from 'react'

interface ContentProps {
  children?: any
}

const Content: React.FC<ContentProps> = (props) => {
  return <div className="pt-0 px-0">{props.children}</div>
}

export default Content
