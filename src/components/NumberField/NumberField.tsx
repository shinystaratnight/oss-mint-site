import React, { FC, useState } from 'react'

import * as Element from './styles'

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const NumberField: FC<Props> = (props) => {

  const { onChange } = props

  const [innerVal, setInnerVal] = useState('0')

  const pattern = /^[0-9]*$/
  
  return (
    <Element.FormControl className='position-relative'>
      <Element.InputForm
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder=""
        value={innerVal}
        onChange={(e) => {
          e.preventDefault();
          if (e.target.value === '' || pattern?.test(e.target.value)) {
            setInnerVal(parseInt(e.target.value).toString())
            onChange(e)
          } else {
            setInnerVal(innerVal ?? '0')
          }
        }}
      />
      <Element.ControlBtn
        className='btn position-absolute discount-btn'
        onClick={() => {
          setInnerVal((parseInt(innerVal) - 1).toString())
        }}
      >
        <Element.ArrowDownIcon />
      </Element.ControlBtn>
      <Element.ControlBtn
        onClick={() => {
          setInnerVal((parseInt(innerVal) + 1).toString())
        }}
        className='btn position-absolute add-btn'
      >
        <Element.ArrowUpIcon />
      </Element.ControlBtn>
    </Element.FormControl>
  )
}

export default NumberField
