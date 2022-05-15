import React from 'react';
import Item from './Item';

const ConnectWallet = () => {
  return (
     <React.Fragment>
       <div className="container-fluid">
        <div className="row">
          <Item image="/metamask.svg" title="Metamask" />
          <Item image="/trustwallet.svg" title="TrustWallet" />
          <Item image="/walletconnect.svg" title="WalletConnect" />
          <Item image="/coinbase.png" title="Coinbase Wallet" />
          <Item image="/safepal.svg" title="SafePal Wallet" />
          <Item image="/paypal.png" title="TokenPocket" />
          <Item image="/math.png" title="Math Wallet" />
        </div>
       </div>
     </React.Fragment>
  );
}

export default ConnectWallet;
