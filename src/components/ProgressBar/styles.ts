import styled from 'styled-components'

type ProgressBarType = {
  mt?: string
}

export const ProgressBar = styled.div<ProgressBarType>`
  margin-top: ${props => props.mt ? props.mt : 0};
`

export const ProgressRange = styled.div``
