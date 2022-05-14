import React from 'react'
import { Label } from './styles'

interface Props {
  children: React.ReactNode
}

const GradientLabel: React.FC<Props> = ({children}) => {
  return (
    <Label>{children}</Label>
  )
}

export default GradientLabel
