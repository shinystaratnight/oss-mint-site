import styled from 'styled-components'

export const CounterItem = styled.div`
  text-align: center;

  .wrapper {
    height: 9rem;
    width: 7rem;
    border: 1px solid #7061d2;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      width: 6rem;
    }
  }

  .counter {
    font-size: 60px;
    line-height: 90px;
    font-weight: 700;
    margin-bottom: 0;
  }

  .unit {
    padding-top: 5px;
    font-weight: 500;
  }
`

