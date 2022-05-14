import styled from 'styled-components'
import { ArrowRight } from '@styled-icons/feather/ArrowRight'
import { Ethereum } from '@styled-icons/simple-icons/Ethereum'


export const Navbar = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    color: var(--white-color);
    font-size: 34px;
    line-height: 34px;
    vertical-align: middle;
    text-decoration: none;
    display: flex;
    align-items: center;

    span {
      margin-left: .5rem;
    }
  }
`

export const ArrowRightIcon = styled(ArrowRight)`
  width: 26px;
  height: 20px;
  vertical-align: middle;
  color: var(--white-color);
`

export const ConnectWalletButton = styled.button`
  background: #261d38;
  border: 2px solid var(--violet-color);
  color: var(--white-color);
  border-radius: 20px;
  padding: 7px 12px;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #1a0547;
  }
`

export const Banner = styled.div`
  background: radial-gradient(49.17% 49.17% at 49.1% 100%, #140C45 0%, #090718 100%);
  min-height: calc(100vh - 200px);
`

export const BannerContent = styled.div`
  grid-row: 5/7;
  grid-column: 7/13;
  color: var(--white-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    grid-row: 6/9;
    grid-column: 5/11;
  }
  
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    grid-row: 9/11;
    grid-column: 1/9;
  }
`

export const GradientLabel = styled.h2`
  background: var(--label-color);
  background-size: 400% 400%!important;
  background-clip: text!important;
  -webkit-background-clip: text!important;
  -webkit-text-fill-color: transparent!important;
  background-color: var(--white-color);
  font-weight: 700;
  line-height: 1.3
`

export const BannerTitle = styled(GradientLabel)`
  font-size: 72px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
`

export const PictureAlignmentWrapper = styled.div`  
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`
  
export const PictureAlignment = styled.div`
  display: grid;
  overflow: hidden;
  max-width: 2000px;
  width: 100%;
  grid-gap: 32px;
  gap: 32px;
  grid-template-rows: repeat(7, 1fr);
  grid-template-columns: repeat(15, 1fr);
  padding-left: 2rem;
  padding-right: 2rem;

  @media screen and (max-width: 1200px) {
    gap: 16px;
    grid-gap: 16px;
    grid-template-rows: repeat(7, 1fr);
    grid-template-columns: repeat(10, 1fr);
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 768px) {
    gap: 16px;
    grid-gap: 16px;
    grid-template-rows: repeat(10, 1fr);
    grid-template-columns: repeat(8, 1fr);
    padding-left: 1rem;
    padding-right: 1rem;
  }

  
  img {
    aspect-ratio: 1;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    animation-fill-mode: both;
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 16px;
  }

  img.picture-01 {
    grid-row: 1/3;
    grid-column: 7/9;
  }

  img.picture-02 {
    grid-row: 1/3;
    grid-column: 5/7;
  }

  img.picture-03 {
    grid-row: 1/5;
    grid-column: 9/13;
  }

  img.picture-04 {
    grid-row: 3/7;
    grid-column: 3/7;
  }

  img.picture-05 {
    grid-row: 1/3;
    grid-column: 1/3;
  }

  img.picture-06 {
    grid-row: 3/7;
    grid-column: 3/7;
  }

  img.picture-07 {
    grid-row: 1/3;
    grid-column: 3/5;
  }

  img.picture-08 {
    grid-row: 3/5;
    grid-column: 1/3;
  }

  img.picture-09 {
    grid-row: 3/7;
    grid-column: 7/9;
  }

  img.picture-10 {
    grid-row: 3/6;
    grid-column: 13/16;
  }

  img.picture-11 {
    grid-row: 1/3;
    grid-column: 13/15;
  }

  @media screen and (max-width: 1200px) {
    img.picture-01 {
      grid-row: 1/3;
      grid-column: 1/3;
    }
  
    img.picture-02 {
      grid-row: 1/3;
      grid-column: 3/5;
    }
  
    img.picture-03 {
      grid-row: 1/3;
      grid-column: 5/7;
    }
  
    img.picture-04 {
      grid-row: 1/4;
      grid-column: 7/10;
    }
  
    img.picture-05 {
      grid-row: 3/5;
      grid-column: 5/7;
    }
  
    img.picture-06 {
      grid-row: 4/6;
      grid-column: 7/9;
    }
  
    img.picture-07 {
      grid-row: 4/6;
      grid-column: 9/11;
    }
  
    img.picture-08 {
      grid-row: 3/7;
      grid-column: 1/5;
    }
  
    img.picture-09 {
      display: none;
    }
  
    img.picture-10 {
      display: none;
    }
  
    img.picture-11 {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    img.picture-01 {
      grid-row: 3/5;
      grid-column: 1/3;
    }
  
    img.picture-02 {
      grid-row: 1/5;
      grid-column: 3/7;
    }
  
    img.picture-03 {
      grid-row: 3/5;
      grid-column: 7/9;
    }
  
    img.picture-04 {
      grid-row: 5/9;
      grid-column: 1/5;
    }
  
    img.picture-05 {
      grid-row: 5/8;
      grid-column: 5/8;
    }
  
    img.picture-06 {
      display: none;
    }
  
    img.picture-07 {
      display: none;
    }
  
    img.picture-08 {
      display: none;
    }
  
    img.picture-09 {
      display: none;
    }
  
    img.picture-10 {
      display: none;
    }
  
    img.picture-11 {
      display: none;
    }
  }
`
export const BeforeMintSection = styled.div`

`

export const CounterSection = styled.div`
  padding-top: 8rem;
  padding-bottom: 8rem;

  .section-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 64px;
    gap: 64px;
  }

  .counters-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .stats-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-gap: 64px;
    gap: 64px;

    @media screen and (max-width: 960px) {
      flex-direction: column;
    }
  }
`

export const Title = styled(GradientLabel)`
  font-size: 60px;
`

export const SubTitle = styled(GradientLabel)`
  font-size:36px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`

export const EthereumIcon = styled(Ethereum)`
  width: 24px;
  height: 24px;
  padding: 4px;
  background: rgb(98, 126, 234);
  border-radius: 20px;
`

export const StatsDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 8px;
  gap: 8px;

  .label {
    color: #5b6587;
    font-size: 20px;
    line-height: 30px;
  }

  .content {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    color: var(--white-color);
  }
`

export const SocialLinkSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  grid-gap: 16px;
  gap: 16px;

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
  }

  .social-icons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 32px;
    gap: 32px;
  }
`

