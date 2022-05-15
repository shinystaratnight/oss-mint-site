import React from 'react'
import Counter from '../../components/Counter'
import CounterSeparator from '../../components/CounterSeparator'
import * as Element from './styles'
import TwitterIcon from '../../components/TwitterIcon'
import DiscordIcon from '../../components/DiscordIcon'
import TelegramIcon from '../../components/TelegramIcon'
import NumberField from '../../components/NumberField'
import Button from '../../components/Button'
import ProgressBar from '../../components/ProgressBar'
import ConnectWallet from '../../components/ConnectWallet'
import SwitchNetwork from '../../components/SwitchNetwork'
import 'rsuite/dist/rsuite.min.css'

const Home = () => {
  const [openConnect, setOpenConnect] = React.useState(false);
  const handleOpenConnect = () => setOpenConnect(true);
  const handleCloseConnect = () => setOpenConnect(false);

  const [openNetwork, setOpenNetwork] = React.useState(false);
  const handleOpenNetwork = () => setOpenNetwork(true);
  const handleCloseNetwork = () => setOpenNetwork(false);

  return (
    <React.Fragment>
      <Element.Modal backdrop={true} open={openConnect} onClose={handleCloseConnect}>
        <Element.Modal.Header>
          <Element.Modal.Title>Connect to a wallet</Element.Modal.Title>
        </Element.Modal.Header>
        <Element.Modal.Body>
          <ConnectWallet />
        </Element.Modal.Body>
      </Element.Modal>

      <Element.Modal backdrop={true} open={openNetwork} onClose={handleCloseNetwork}>
        <Element.Modal.Header>
          <Element.Modal.Title>Choose network</Element.Modal.Title>
        </Element.Modal.Header>
        <Element.Modal.Body>
          <SwitchNetwork />
        </Element.Modal.Body>
      </Element.Modal>

      <div className="container">
        <Element.Navbar>
          <a className="logo" href="#">
            <img src="logo.png" width={60} height={60} alt="" />
            <span>OSS MINT</span>
          </a>
          <Element.ConnectWalletButton onClick={handleOpenConnect}>
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

      <div className="container">
        <Element.MintSection>
          <Element.HeadSection className="mb-5">
            <p>Mint - 1st round</p>
            <Element.ButtonsContainer>
              <Element.StatusButton><Element.DotFillIcon color="#e5b447" />Pending transaction</Element.StatusButton>
              <Element.StatusButton><Element.DotFillIcon color="#0cc712" />Live</Element.StatusButton>
              <Element.StatusButton>1 of 2 Rounds</Element.StatusButton>
            </Element.ButtonsContainer>
          </Element.HeadSection>
          
          <div className="row mb-5">
            <div className="col-lg-6">
              <Element.MintLeftSection>
                <Element.MintLabel>6,900 dope Angels and</Element.MintLabel>
                <Element.MintLabel>Demons NFTs living on</Element.MintLabel>
                <Element.MintLabel>the Ethereum Blockchain</Element.MintLabel>
              </Element.MintLeftSection>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <Element.MintRightSection>
                <Element.MintLabel>1100 minted</Element.MintLabel>
                <Element.MintLabel>2300 available</Element.MintLabel>
                <Element.MintLabel>6900 total supply</Element.MintLabel>
              </Element.MintRightSection>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex">
                <NumberField onChange={() => {}} />
                <div className="ms-2"></div>
                <Button onClick={() => {}}>Mint</Button>
              </div>
              <div className="stats-container mt-4">
                <Element.StatsDisplay>
                  <div className="label">Price:</div>
                  <Element.EthereumIcon />
                  <div className="content">0,069 ETH</div>
                </Element.StatsDisplay>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <ProgressBar
                completed={15}
                start="1st round"
                end="1100/3400 minted"
              />
              <ProgressBar
                completed={40}
                start="You have minted"
                end="4/10"
                mt="24px"
              />
            </div>
          </div>
        </Element.MintSection>
      </div>

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
          <Element.MintSection>
            <Element.HeadSection className="mb-5">
              <p>Mint - 1st round</p>
              <Element.ButtonsContainer>
                <Element.StatusButton><Element.DotFillIcon color="#e5b447" />Pending transaction</Element.StatusButton>
                <Element.StatusButton><Element.DotFillIcon color="#0cc712" />Live</Element.StatusButton>
                <Element.StatusButton>1 of 2 Rounds</Element.StatusButton>
              </Element.ButtonsContainer>
            </Element.HeadSection>
            
            <div className="row mb-5">
              <div className="col-lg-6">
                <Element.MintLeftSection>
                  <Element.MintLabel>6,900 dope Angels and</Element.MintLabel>
                  <Element.MintLabel>Demons NFTs living on</Element.MintLabel>
                  <Element.MintLabel>the Ethereum Blockchain</Element.MintLabel>
                </Element.MintLeftSection>
              </div>
              <div className="col-lg-6 mt-4 mt-lg-0">
                <Element.MintRightSection>
                  <Element.MintLabel>1100 minted</Element.MintLabel>
                  <Element.MintLabel>2300 available</Element.MintLabel>
                  <Element.MintLabel>6900 total supply</Element.MintLabel>
                </Element.MintRightSection>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="d-flex">
                  <NumberField onChange={() => {}} />
                  <div className="ms-2"></div>
                  <Button onClick={() => {}}>Mint</Button>
                </div>
                <div className="stats-container mt-4">
                  <Element.StatsDisplay>
                    <div className="label">Price:</div>
                    <Element.EthereumIcon />
                    <div className="content">0,069 ETH</div>
                  </Element.StatsDisplay>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <ProgressBar
                  completed={15}
                  start="1st round"
                  end="1100/3400 minted"
                />
                <ProgressBar
                  completed={40}
                  start="You have minted"
                  end="4/10"
                  mt="24px"
                />
              </div>
            </div>

            <Element.NotificationSection className="mt-5">
              <div className="d-flex align-items-center">
                <Element.ExclamationIcon />
                <p className="m-0 ms-3">Please switch your metamask to Ethereum Mainnet network in order to take a part in the mint</p>
              </div>
              <div className="mt-3 mt-lg-0">
                <Element.SwitchNetworkButton onClick={handleOpenNetwork}>
                  Switch Network
                </Element.SwitchNetworkButton>
              </div>
            </Element.NotificationSection>
          </Element.MintSection>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home
