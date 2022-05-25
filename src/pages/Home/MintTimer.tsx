import dateFormat from 'dateformat'
import Counter from "components/Counter";
import CounterSeparator from "components/CounterSeparator";
import { useMintDataAnalyze } from "state/mint/hooks";
import { Process, Rarity } from "state/types";
import getTimePeriods from "utils/getTimePeriods";
import * as Element from "./styles";

const MintTimer = () => {
  const analyzeData = useMintDataAnalyze();
  const { process, rarity, untilSec, startAt, endAt, price, maxSupply } =
    analyzeData;

  const timePeriods = getTimePeriods(untilSec)

  return (
    process === Process.WAITING && (
      <Element.CounterSection>
        <div className="section-container">
          <Element.SubTitle>
            Wait for it! OS Sneakers NFT (
            {rarity === Rarity.GOLDEN
              ? "GOLDEN"
              : rarity === Rarity.SILVER
              ? "SILVER"
              : "COMMON"}
            ) will be available for minting in:
          </Element.SubTitle>

          <div className="counters-container">
            <Counter counter={timePeriods.days} unit="Days" />
            <CounterSeparator />
            <Counter counter={timePeriods.hours} unit="Hours" />
            <CounterSeparator />
            <Counter counter={timePeriods.minutes} unit="Minutes" />
            <CounterSeparator />
            <Counter counter={timePeriods.seconds} unit="Seconds" />
          </div>

          <div className="stats-container">
            <Element.StatsDisplay>
              <div className="label">Price:</div>
              <Element.BinanceIcon />
              <div className="content">
                {price
                  .toNumber()
                  .toLocaleString("en-US", { maximumFractionDigits: 3 })}{" "}
                BNB
              </div>
            </Element.StatsDisplay>

            <Element.StatsDisplay>
              <div className="label">Total Supply:</div>
              <div className="content">{maxSupply.toLocaleString("en-US")}</div>
            </Element.StatsDisplay>

            <Element.StatsDisplay>
              <div className="label">Mint Date:</div>
              <div className="content">{dateFormat(new Date(startAt * 1000), 'ddd, mmm dd HH:MM (Z)')}</div>
            </Element.StatsDisplay>
          </div>
        </div>
      </Element.CounterSection>
    )
  );
};

export default MintTimer;
