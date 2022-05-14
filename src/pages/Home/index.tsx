import React from 'react'
import GradientLabel from '../../components/GradientLabel'
import * as Element from './styles'

const Home = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Element.Navbar>
          <a className="logo" href="#">
            <img src="logo.png" width={60} height={60} alt="" />
            <span>OSS MINT</span>
          </a>
          <Element.ConnectWalletButton>
            Connect Wallet
            <Element.ArrowRightIcon />
          </Element.ConnectWalletButton>
        </Element.Navbar>
      </div>
      
      <Element.Banner>
        <Element.PictureAlignmentWrapper>
          <Element.PictureAlignment>
            <img className="picture-01" alt="" src="nfts/NFT_01.jpg" />
            <img className="picture-02" alt="" src="nfts/NFT_02.jpg" />
            <img className="picture-03" alt="" src="nfts/NFT_03.jpg" />
            <img className="picture-04" alt="" src="nfts/NFT_04.jpg" />
            <img className="picture-05" alt="" src="nfts/NFT_05.jpg" />
            <img className="picture-06" alt="" src="nfts/NFT_06.jpg" />
            <img className="picture-07" alt="" src="nfts/NFT_07.jpg" />
            <img className="picture-08" alt="" src="nfts/NFT_08.jpg" />
            <img className="picture-09" alt="" src="nfts/NFT_09.jpg" />
            <img className="picture-10" alt="" src="nfts/NFT_10.jpg" />
            <img className="picture-11" alt="" src="nfts/NFT_11.jpg" />
            <Element.BannerContent>
              <Element.BannerTitle>6,900</Element.BannerTitle>
              <h1>Dope A** NFTs</h1>
            </Element.BannerContent>
          </Element.PictureAlignment>
        </Element.PictureAlignmentWrapper>
      </Element.Banner>
    </React.Fragment>
  )
}

export default Home
