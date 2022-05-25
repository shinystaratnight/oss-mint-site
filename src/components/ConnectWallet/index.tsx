import { ConnectorNames } from "config";
import React from "react";
import Item from "./Item";

const ConnectWallet = ({ handleConnect }) => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <Item
            image="/metamask.svg"
            title="Metamask"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          <Item
            image="/trustwallet.svg"
            title="TrustWallet"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          <Item
            image="/walletconnect.svg"
            title="WalletConnect"
            handleClick={() => handleConnect(ConnectorNames.WalletConnect)}
          />
          <Item
            image="/coinbase.png"
            title="Coinbase Wallet"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          <Item
            image="/safepal.svg"
            title="SafePal Wallet"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          <Item
            image="/paypal.png"
            title="TokenPocket"
            handleClick={() => handleConnect(ConnectorNames.Injected)}
          />
          {/* <Item image="/math.png" title="Math Wallet" /> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConnectWallet;
