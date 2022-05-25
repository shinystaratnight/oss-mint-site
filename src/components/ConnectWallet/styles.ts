import styled from 'styled-components';

export const ConnectItem = styled.a`
  height: 120px;
  margin-top: .5rem;
  margin-bottom: .5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 6px;
  border: 2px solid rgb(37 37 66);
  color: var(--white-color);

  &:hover {
    color: var(--primary-color);
    background: #090624;
  }
`;

export const ConnectItemName = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
