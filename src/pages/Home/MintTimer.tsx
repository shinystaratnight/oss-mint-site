import Counter from "components/Counter";
import CounterSeparator from "components/CounterSeparator";
import * as Element from "./styles";

const MintTimer = () => {
  return (
    <Element.CounterSection>
        <div className="section-container">
          <Element.SubTitle>
            Wait for it! AngelBlock NFT will be available for minting in:
          </Element.SubTitle>

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

          
        </div>
      </Element.CounterSection>

  )
}

export default MintTimer
