import styled from 'styled-components'
import { Telegram } from '@styled-icons/bootstrap/Telegram'

export const TelegramIconWrapper = styled.a`
  border: 1px solid #7061d2;
  background-color: transparent;
  color: var(--white-color);
  min-width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: #1a0547;
    color: var(--white-color);
    text-decoration: none;
  }
`

export const TelegramIcon = styled(Telegram)`
  width: 1.5rem;
  height: 1.5rem;
`
