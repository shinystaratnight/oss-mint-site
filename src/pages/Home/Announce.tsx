import React, { useEffect } from "react";
import { useMintDataAnalyze, useMintPublicData } from "state/mint/hooks";
import { Process, Rarity } from "state/types";
import * as Element from "./styles";

const MiddleAnnounce = () => {
  const analyzeData = useMintDataAnalyze();
  const { process, rarity, price, maxSupply, supply } = analyzeData;

  return (
    (process === Process.NOT_DETERMINED || process === Process.FINISHED) && (
      <div className="container">
        <Element.CounterSection>
          <div className="section-container">
            <div className="d-flex flex-column justify-content-start align-items-center">
              {rarity !== Rarity.GOLDEN && (
                <Element.Title>Woooah!</Element.Title>
              )}
              {process === Process.FINISHED ? (
                <Element.SubTitle>
                  The OS Sneakers NFT mint is over.{" "}
                  {supply.toLocaleString("en-US")} NFTs have been minted.
                </Element.SubTitle>
              ) : rarity === Rarity.GOLDEN ? (
                <Element.SubTitle>
                  We're planning to launch the OS Sneakers NFT mint towards the
                  end of June 2022. We'll announce the exact date soon.
                </Element.SubTitle>
              ) : (
                <Element.SubTitle>
                  {`The ${
                    rarity === Rarity.SILVER ? "first" : "second"
                  } round of minting is over. ${supply.toLocaleString(
                    "en-US"
                  )} NFTs have been minted.
                  We'll inform here about ${
                    rarity === Rarity.SILVER ? "2nd" : "3rd"
                  } round.`}
                </Element.SubTitle>
              )}
            </div>
            {process !== Process.FINISHED && (
              <div className="stats-container">
                <Element.StatsDisplay>
                  <div className="label">Price:</div>
                  <Element.EthereumIcon />
                  <div className="content">
                    {price.toNumber().toLocaleString("en-US", {
                      maximumFractionDigits: 3,
                    })}{" "}
                    BNB
                  </div>
                </Element.StatsDisplay>

                <Element.StatsDisplay>
                  <div className="label">Total Supply:</div>
                  <div className="content">
                    {maxSupply.toLocaleString("en-US")}
                  </div>
                </Element.StatsDisplay>

                {/* <Element.StatsDisplay>
                <div className="label">Mint Date:</div>
                <div className="content">Tue, May 24th - 16:00 GMT</div>
              </Element.StatsDisplay> */}
              </div>
            )}
          </div>
        </Element.CounterSection>
      </div>
    )
  );
};

export default MiddleAnnounce;
