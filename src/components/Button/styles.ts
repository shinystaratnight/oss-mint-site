import styled from 'styled-components';
import { ArrowRightShort } from '@styled-icons/bootstrap/ArrowRightShort'

export const ButtonDom = styled.button`
  background-color: #181630 !important;
  border-color: #343053 !important;
  color: var(--white-color) !important;
  height: 50px;
  border-radius: 50px;
  font-size: 16px;
  padding-left: 24px;
  padding-right: 24px;
  cursor: pointer;

  &:hover {
    background-color: #1a0547 !important;
    // color: var(--white-color) !important;
  }

  &:focus {
    box-shadow: none;
  }
`

export const RightIcon = styled(ArrowRightShort)`
  width: 24px;
  // color: #423d67;
  color: var(--white-color);
  margin-left: 8px;
`
