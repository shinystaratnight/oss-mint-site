import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import NumberField from "components/NumberField";
import Button from "components/Button";
import ProgressBar from "components/ProgressBar";
import * as Element from "./styles";
import { useMintDataAnalyze, useMintUserData } from "state/mint/hooks";
import { Process, Rarity } from "state/types";
import useMintNfts from "./hooks/useMintNfts";
import { getDecimalAmount } from "utils/formatBalance";
import { fetchMintPublicDataAsync, fetchMintUserDataAsync } from "state/mint";
import { useAppDispatch } from "state";

const Mint = () => {
  const analyzeData = useMintDataAnalyze();
  const { account } = useWeb3React();
  const dispatch = useAppDispatch();
  const { process, rarity, price, maxSupply, supply, maxPerUser } = analyzeData;
  const userData = useMintUserData(rarity);
  const { nfts: ownedNfts, ethBalance } = userData;
  const [numToMint, setNumToMint] = useState("0");
  const [pendingTx, setPendingTx] = useState(false);
  const { onMint } = useMintNfts(rarity);

  return (
    process === Process.OPENED && (
      <div className="container">
        <Element.MintSection>
          <Element.HeadSection className="mb-5">
            <p>
              Mint -{" "}
              {rarity === Rarity.GOLDEN
                ? "1st"
                : rarity === Rarity.SILVER
                ? "2nd"
                : "3rd"}{" "}
              round
            </p>
            <Element.ButtonsContainer>
              {/* <Element.StatusButton>
              <Element.DotFillIcon color="#e5b447" />
              Pending transaction
            </Element.StatusButton> */}
              <Element.StatusButton>
                <Element.DotFillIcon color="#0cc712" />
                Live
              </Element.StatusButton>
              <Element.StatusButton>
                {rarity === Rarity.GOLDEN
                  ? "1"
                  : rarity === Rarity.SILVER
                  ? "2"
                  : "3"}{" "}
                of 3 Rounds
              </Element.StatusButton>
            </Element.ButtonsContainer>
          </Element.HeadSection>

          <div className="row mb-5">
            <div className="col-lg-6">
              <Element.MintLeftSection>
                <Element.MintLabel>Mint OS Sneakers</Element.MintLabel>
                <Element.MintLabel>
                  {rarity === Rarity.GOLDEN
                    ? "Golden"
                    : rarity === Rarity.SILVER
                    ? "Silver"
                    : "Common"}{" "}
                  NFTs on the
                </Element.MintLabel>
                <Element.MintLabel>Binance Smart Chain</Element.MintLabel>
              </Element.MintLeftSection>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <Element.MintRightSection>
                <Element.MintLabel>
                  {supply.toLocaleString("en-US")} minted
                </Element.MintLabel>
                <Element.MintLabel>
                  {(maxSupply - supply).toLocaleString("en-US")} available
                </Element.MintLabel>
                <Element.MintLabel>
                  {maxSupply.toLocaleString("en-US")} total supply
                </Element.MintLabel>
              </Element.MintRightSection>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex">
                <NumberField
                  onChange={(value) => setNumToMint(value)}
                  value={numToMint}
                />
                <div className="ms-2"></div>
                <Button
                  disabled={!account || Number(numToMint) < 1 || pendingTx}
                  onClick={async () => {
                    try {
                      if (Number(numToMint) > 0) {
                        setPendingTx(true);
                        await onMint(
                          Number(numToMint),
                          getDecimalAmount(
                            price.times(Number(numToMint))
                          ).toJSON()
                        );
                        dispatch(fetchMintPublicDataAsync());
                        dispatch(fetchMintUserDataAsync({ account }));
                      }
                    } catch (err) {
                      console.error(err);
                    } finally {
                      setPendingTx(false);
                    }
                  }}
                >
                  Mint
                </Button>
              </div>
              <div className="stats-container mt-4">
                <Element.StatsDisplay>
                  <div className="label">Price:</div>
                  <Element.BinanceIcon />
                  <div className="content">
                    {price
                      .toNumber()
                      .toLocaleString("en-US", { maximumFractionDigits: 3 })}
                    {Number(numToMint) > 0
                      ? ` * ${Number(numToMint)} = ${(
                          price.toNumber() * Number(numToMint)
                        ).toLocaleString("en-US", {
                          maximumFractionDigits: 3,
                        })}`
                      : ""}{" "}
                    BNB
                  </div>
                </Element.StatsDisplay>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <ProgressBar
                completed={(supply / maxSupply) * 100}
                start={`${
                  rarity === Rarity.GOLDEN
                    ? "1st"
                    : rarity === Rarity.SILVER
                    ? "2nd"
                    : "3rd"
                } round`}
                end={`${supply}/${maxSupply} minted`}
              />
              {account && maxPerUser > 0 && (
                <ProgressBar
                  completed={(ownedNfts.length / maxPerUser) * 100}
                  start="You have minted"
                  end={`${ownedNfts.length}/${maxPerUser}`}
                  mt="24px"
                />
              )}
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
    )
  );
};

export default Mint;
