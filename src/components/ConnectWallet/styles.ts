import styled from 'styled-components';

export const ConnectItem = styled.a`
  height: 120px;
  margin-top: .5rem;
  margin-bottom: .5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-radius: 6px;
  border: 2px solid var(--primary-color);
  color: var(--white-color);

  &:hover {
    color: var(--primary-color)
  }
`;

export const ConnectItemName = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
