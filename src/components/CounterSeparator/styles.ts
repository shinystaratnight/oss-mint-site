import styled from 'styled-components'

export const Wrapper = styled.p`
  font-size: 72px;
  line-height: 108px;
  margin: 0;
  padding-left: 7px;
  padding-right: 7px;

  @media screen and (max-width: 576px) {
    font-size: 49px;
    line-height: 45px;
  }
  @media screen and (max-width: 370px) {
    font-size: 32px;
    line-height: 38px;
  }
`
