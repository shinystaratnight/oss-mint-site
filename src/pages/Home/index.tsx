import React from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import Counter from '../../components/Counter'
import CounterSeparator from '../../components/CounterSeparator'
import * as Element from './styles'
import TwitterIcon from '../../components/TwitterIcon'
import DiscordIcon from '../../components/DiscordIcon'
import TelegramIcon from '../../components/TelegramIcon'

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

      <Element.BeforeMintSection>

      </Element.BeforeMintSection>

      <div className="container">
        <Element.CounterSection>
          <div className="section-container">
            <Element.SubTitle>We're planning to launch the AngelBlock NFT mint towards the end of April 2022. We'll announce the exact date soon.</Element.SubTitle>
            
            <div className="stats-container">
              <Element.StatsDisplay>
                <div className="label">Price:</div>
                <Element.EthereumIcon />
                <div className="content">0,069 ETH</div>
              </Element.StatsDisplay>

              <Element.StatsDisplay>
                <div className="label">Total Supply:</div>
                <div className="content">6,900</div>
              </Element.StatsDisplay>
              
              <Element.StatsDisplay>
                <div className="label">Mint Date:</div>
                <div className="content">Tue, May 24th - 16:00 GMT</div>
              </Element.StatsDisplay>
            </div>

            <Element.SocialLinkSection>
              <p>Follow us:</p>
              <div className="social-icons">
                <TwitterIcon />
                <DiscordIcon />
                <TelegramIcon />
              </div>
            </Element.SocialLinkSection>

          </div>
        </Element.CounterSection>

        <Element.CounterSection>
          <div className="section-container">
            <Element.SubTitle>Wait for it! AngelBlock NFT will be available for minting in:</Element.SubTitle>
            
            <div className="counters-container">
              <Counter counter={10} unit="Days" />
              <CounterSeparator />
              <Counter counter={2} unit="Hours" />
              <CounterSeparator />
              <Counter counter={26} unit="Minutes" />
              <CounterSeparator />
              <Counter counter={35} unit="Seconds" />
            </div>

            <div className="stats-container">
              <Element.StatsDisplay>
                <div className="label">Price:</div>
                <Element.EthereumIcon />
                <div className="content">0,069 ETH</div>
              </Element.StatsDisplay>

              <Element.StatsDisplay>
                <div className="label">Total Supply:</div>
                <div className="content">6,900</div>
              </Element.StatsDisplay>
              
              <Element.StatsDisplay>
                <div className="label">Mint Date:</div>
                <div className="content">Tue, May 24th - 16:00 GMT</div>
              </Element.StatsDisplay>
            </div>

            <Element.SocialLinkSection>
              <p>Follow us:</p>
              <div className="social-icons">
                <TwitterIcon />
                <DiscordIcon />
                <TelegramIcon />
              </div>
            </Element.SocialLinkSection>

          </div>
        </Element.CounterSection>

        <Element.CounterSection>
          <div className="section-container">
            <div className="d-flex flex-column justify-content-start align-items-center">
              <Element.Title>Woooah!</Element.Title>
              <Element.SubTitle>The first round of minting is over. 3400 NFTs has been minted. We'll inform here about 2nd round.</Element.SubTitle>
            </div>
            
            <div className="stats-container">
              <Element.StatsDisplay>
                <div className="label">Price:</div>
                <Element.EthereumIcon />
                <div className="content">0,069 ETH</div>
              </Element.StatsDisplay>

              <Element.StatsDisplay>
                <div className="label">Total Supply:</div>
                <div className="content">6,900</div>
              </Element.StatsDisplay>
              
              <Element.StatsDisplay>
                <div className="label">Mint Date:</div>
                <div className="content">Tue, May 24th - 16:00 GMT</div>
              </Element.StatsDisplay>
            </div>

            <Element.SocialLinkSection>
              <p>Follow us:</p>
              <div className="social-icons">
                <TwitterIcon />
                <DiscordIcon />
                <TelegramIcon />
              </div>
            </Element.SocialLinkSection>
          </div>
        </Element.CounterSection>

        <div className="container">
          <div className="section-container">
            <div>
              <p>Mint - 1st round</p>
              <div>
                <button>Pending transaction</button>
                <button>Live</button>
                <button>1 of 2 Rounds</button>
              </div>
            </div>
            
            <div className="row px-4">
              <div className="col-lg-6">
                <div style={{textAlign: "left"}}>
                  <p>6,900 dope Angels and</p>
                  <p>Demons NFTs living on</p>
                  <p>the Ethereum Blockchain</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div style={{textAlign: "right"}}>
                  <p>1100 minted</p>
                  <p>2300 available</p>
                  <p>6900 total supply</p>
                </div>
              </div>
            </div>
            <div style={{width: '500px'}}>
            <ProgressBar
              completed={40}
              height="14px"
              isLabelVisible={false}
              bgColor="var(--label-color)"
              baseBgColor="#261d38"
            />
            </div>
            <div className="stats-container">
              <Element.StatsDisplay>
                <div className="label">Price:</div>
                <Element.EthereumIcon />
                <div className="content">0,069 ETH</div>
              </Element.StatsDisplay>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
