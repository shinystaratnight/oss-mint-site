import NumberField from "components/NumberField";
import Button from "components/Button";
import ProgressBar from "components/ProgressBar";
import * as Element from "./styles";

const Mint = () => {
  return (
    <div className="container">
      <Element.MintSection>
        <Element.HeadSection className="mb-5">
          <p>Mint - 1st round</p>
          <Element.ButtonsContainer>
            <Element.StatusButton>
              <Element.DotFillIcon color="#e5b447" />
              Pending transaction
            </Element.StatusButton>
            <Element.StatusButton>
              <Element.DotFillIcon color="#0cc712" />
              Live
            </Element.StatusButton>
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

        {/* <Element.NotificationSection className="mt-5">
          <div className="d-flex align-items-center">
            <Element.ExclamationIcon />
            <p className="m-0 ms-3">
              Please switch your metamask to Ethereum Mainnet network in order
              to take a part in the mint
            </p>
          </div>
          <div className="mt-3 mt-lg-0">
            <Element.SwitchNetworkButton onClick={handleOpenNetworkModal}>
              Switch Network
            </Element.SwitchNetworkButton>
          </div>
        </Element.NotificationSection> */}
      </Element.MintSection>
    </div>
  );
};

export default Mint;
