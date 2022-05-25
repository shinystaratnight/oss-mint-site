import styled from "styled-components";

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

    @media screen and (max-width: 852px) {
      width: 6rem;
      height: 7rem;
    }
    @media screen and (max-width: 576px) {
      width: 4rem;
      height: 5rem;
    }
    @media screen and (max-width: 370px) {
      width: 3rem;
      height: 3.3rem;
    }
  }

  .counter {
    font-size: 60px;
    line-height: 90px;
    font-weight: 700;
    margin-bottom: 0;

    @media screen and (max-width: 852px) {
      font-size: 50px;
      line-height: 75px;
    }
    @media screen and (max-width: 576px) {
      font-size: 35px;
      line-height: 50px;
    }
    @media screen and (max-width: 370px) {
      font-size: 25px;
      line-height: 40px;
      font-weight: 500;
    }
  }

  .unit {
    padding-top: 5px;
    font-weight: 500;

    @media screen and (max-width: 370px) {
      font-size: 12px;
    }
  }
`;
