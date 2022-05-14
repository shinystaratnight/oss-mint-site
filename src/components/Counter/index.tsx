import React from 'react'
import * as Element from './styles'

interface Props {
  counter: number;
  unit: string;
}
const Counter: React.FC<Props> = ({ counter, unit }) => {
  return (
    <Element.CounterItem>
      <div className="wrapper">
        <p className="counter">{counter}</p>
      </div>
      <p className="unit">{unit}</p>
    </Element.CounterItem>
  )
}

export default Counter
