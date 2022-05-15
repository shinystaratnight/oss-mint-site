import styled from 'styled-components';
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

export const FormControl = styled.div`
  .discount-btn {
    right: 16px;
  }
  .add-btn {
    right: 50px;
  }
`

export const InputForm = styled.input`
  background-color: #181630 !important;
  border-color: #343053 !important;
  color: white !important;
  height: 50px;
  border-radius: 50px;
  padding-left: 20px;

  &:focus {
    box-shadow: none;
  }
`

export const ArrowDownIcon = styled(KeyboardArrowDown)`
  width: 24px;
  height: 24px;
  color: #5e588d;
`
export const ArrowUpIcon = styled(KeyboardArrowDown)`
  width: 24px;
  height: 24px;
  color: #5e588d;
  transform: rotate(180deg);
`

export const ControlBtn = styled.button`
  padding: 0;
  width: 26px;
  height: 26px;
  border: 1px solid #343053;
  border-radius: 26px;
  top: 50%;
  transform: translateY(-50%);
  line-height: 1;

  &:focus {
    box-shadow: none;
  }
`