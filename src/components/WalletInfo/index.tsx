import { useWeb3React } from "@web3-react/core";
import { BLOCK_EXPLORER_URLS, ConnectorNames } from "config";
import React from "react";
import { useMintUserData } from "state/mint/hooks";
import CopyAddress from "./CopyAddress";
import * as Element from "./styles";

const WalletInfo = ({ handleDisconnect }) => {
  const { account, chainId } = useWeb3React();
  const { ethBalance } = useMintUserData();

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <CopyAddress account={account} />
          <Element.WalletBalanceRow>
            <div>Your Balance: </div>
            <div>
              {ethBalance
                .toNumber()
                .toLocaleString("en-US", { maximumFractionDigits: 6 })}{" "}
              BNB
            </div>
          </Element.WalletBalanceRow>
          <Element.WalletFooter>
            <Element.ConnectedAccount
              href={`${BLOCK_EXPLORER_URLS[chainId]}/address/${account}`}
              target="_blank"
            >
              View on BscScan
            </Element.ConnectedAccount>
            <Element.DisconnectWallet onClick={handleDisconnect}>
              Disconnect Wallet
            </Element.DisconnectWallet>
          </Element.WalletFooter>
        </div>
      </div>
    </React.Fragment>
  );
};

export default WalletInfo;
