import React, { FC } from 'react'

import * as Element from './styles'

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: FC<Props> = (props) => {

  const { children, onClick } = props

  return (
    <Element.ButtonDom className='btn' onClick={onClick}>
      {children}
      <Element.RightIcon />
    </Element.ButtonDom>
  )
}

export default Button
