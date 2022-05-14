import styled from 'styled-components'
import { Discord } from '@styled-icons/bootstrap/Discord'

export const DiscordIconWrapper = styled.a`
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

export const DiscordIcon = styled(Discord)`
  width: 1.5rem;
  height: 1.5rem;
`
