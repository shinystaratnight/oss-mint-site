import React from 'react'
import ReactProgressBar from '@ramonak/react-progress-bar'
import * as Element from './styles'

interface Props {
  completed: number,
  start: string,
  end: string,
  mt?: string,
}

const ProgressBar: React.FC<Props> = (props) => {
  const { completed, start, end, mt } = props

  return (
    <Element.ProgressBar mt={mt}>
      <ReactProgressBar
        completed={completed}
        height="14px"
        isLabelVisible={false}
        bgColor="var(--label-color)"
        baseBgColor="#261d38"
      />
      <Element.ProgressRange className="d-flex align-items-center justify-content-between mt-1 mb-2">
        <div>{start}</div>
        <div>{end}</div>
      </Element.ProgressRange>

    </Element.ProgressBar>
  )
}

export default ProgressBar
