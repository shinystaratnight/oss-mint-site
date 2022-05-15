import styled from 'styled-components';

export const NetworkItem = styled.a`
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 6px;
  border: 2px solid var(--primary-color);
  color: var(--white-color);
  height: 120px;

  &:hover {
    color: var(--primary-color);
  }
`;

export const NetworkItemName = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const SubHead = styled.div`
  height: 1px;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: var(--primary-color);
  position: relative;

  &:before {
    content: "TESTNET";
    position: absolute;
    font-size: 16px;
    line-height: 16px;
    background-color: rgb(91, 71, 133);
    padding: 0 4px;
    top: -8px;
    left: 16px;
    color: var(--white-color);
  }
`;
