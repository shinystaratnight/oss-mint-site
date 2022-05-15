import React from 'react';
import Item from './Item';
import * as Element from './styles';

const SwitchNetwork = () => {
  return (
     <React.Fragment>
       <div className="container-fluid">
        <div className="row">
          <Item image="/ic-eth.svg" title="Ethereum" />
          <Item image="/ic-bsc.png" title="BNB Smart Chain" />
          <Item image="/ic-matic.png" title="Matic(Polygon)" />
          <Item image="/ic-kucoin.png" title="KuCoin" />
          <Item image="/ic-avax.svg" title="Avalanche" />
          <Item image="/ic-fantom.svg" title="Fantom Opera" />
          <Item image="/ic-cronos.svg" title="Cronos" />
        </div>
        
        <Element.SubHead className="mt-5"></Element.SubHead>
        
        <div className="row">
          <Item image="/ic-bsc.png" title="BNB Smart Chain" />
          <Item image="/ic-matic.png" title="Matic Mumbai" />
        </div>
       </div>
     </React.Fragment>
  );
}

export default SwitchNetwork;
