import React, { useEffect } from "react";

import * as Element from "./styles";

import ConnectWallet from "../../components/ConnectWallet";
import SwitchNetwork from "../../components/SwitchNetwork";
import "rsuite/dist/rsuite.min.css";
import { ConnectorLocalStorageKey, ConnectorNames } from "config";
import useAuth from "hooks/useAuth";
import WalletInfo from "components/WalletInfo";
import { useWeb3React } from "@web3-react/core";
import { truncateWalletString } from "utils";
import {
  useMintPublicData,
  usePollMintDataWithUserData,
} from "state/mint/hooks";
import Mint from "./Mint";
import Announce from "./Announce";
import Footer from "./Footer";
import MintTimer from "./MintTimer";
import Banner from "./Banner";

const Home = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();

  const [connectModalOpened, setConnectModalOpened] = React.useState(false);
  const handleOpenConnectModal = () => setConnectModalOpened(true);
  const handleCloseConnectModal = () => setConnectModalOpened(false);

  const [walletModalOpened, setWalletModalOpened] = React.useState(false);
  const handleOpenWalletModal = () => setWalletModalOpened(true);
  const handleCloseWalletModal = () => setWalletModalOpened(false);

  const [networkModalOpened, setNetworkModalOpened] = React.useState(false);
  const handleOpenNetworkModal = () => setNetworkModalOpened(true);
  const handleCloseNetworkModal = () => setNetworkModalOpened(false);

  const handleConnect = (connectorId: ConnectorNames) => {
    login(connectorId);
    localStorage.setItem(ConnectorLocalStorageKey, connectorId);
    handleCloseConnectModal();
  };

  const handleDisconnect = () => {
    logout();
    handleCloseWalletModal();
  };

  usePollMintDataWithUserData();

  return (
    <React.Fragment>
      <Element.Modal
        backdrop={true}
        open={connectModalOpened}
        onClose={handleCloseConnectModal}
      >
        <Element.Modal.Header>
          <Element.Modal.Title>Connect to a wallet</Element.Modal.Title>
        </Element.Modal.Header>
        <Element.Modal.Body>
          <ConnectWallet handleConnect={handleConnect} />
        </Element.Modal.Body>
      </Element.Modal>

      <Element.Modal
        backdrop={true}
        open={walletModalOpened}
        onClose={handleCloseWalletModal}
      >
        <Element.Modal.Header>
          <Element.Modal.Title>Your wallet</Element.Modal.Title>
        </Element.Modal.Header>
        <Element.Modal.Body>
          <WalletInfo handleDisconnect={handleDisconnect} />
        </Element.Modal.Body>
      </Element.Modal>

      <Element.Modal
        backdrop={true}
        open={networkModalOpened}
        onClose={handleCloseNetworkModal}
      >
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
            <Element.HeaderTitle>OSS MINT</Element.HeaderTitle>
          </a>
          {account ? (
            <Element.ConnectWalletButton onClick={handleOpenWalletModal}>
              {truncateWalletString(account)}
            </Element.ConnectWalletButton>
          ) : (
            <Element.ConnectWalletButton onClick={handleOpenConnectModal}>
              Connect Wallet
              <Element.ArrowRightIcon />
            </Element.ConnectWalletButton>
          )}
        </Element.Navbar>
      </div>
      <Banner />
      <Announce />
      <MintTimer />
      <Mint />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
