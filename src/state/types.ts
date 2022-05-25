import BigNumber from "bignumber.js";

export enum Rarity {
  COMMON,
  SILVER,
  GOLDEN,
}

export enum Process {
  NOT_DETERMINED,
  WAITING,
  OPENED,
  FINISHED,
}

export interface AnalyzeData {
  process: Process;
  rarity: Rarity;
  startAt: number;
  endAt: number;
  untilSec: number;
  price: BigNumber;
  maxSupply: number;
  supply: number;
}

export interface NftData {
  tokenId: string;
  image: string;
  rarity: Rarity;
}

export interface SerializedMintUserData {
  nfts: NftData[];
  ethBalance?: SerializedBigNumber;
}

export interface DeserializedMintUserData {
  nfts: NftData[];
  ethBalance?: BigNumber;
}

interface MintPublicCoreProps {
  goldenMintStartAt: number;
  goldenMintEndAt: number;
  goldenMaxSupply: number;
  goldenSupply: number;
  silverMintStartAt: number;
  silverMintEndAt: number;
  silverMaxSupply: number;
  silverSupply: number;
  commonMintStartAt: number;
  commonMintEndAt: number;
  commonMaxSupply: number;
  commonSupply: number;
  totalSupply: number;
}

export interface SerializedMintPublicData extends MintPublicCoreProps {
  goldenPrice: SerializedBigNumber;
  silverPrice: SerializedBigNumber;
  commonPrice: SerializedBigNumber;
}

export interface DeserializedMintPublicData extends MintPublicCoreProps {
  goldenPrice: BigNumber;
  silverPrice: BigNumber;
  commonPrice: BigNumber;
}

export interface SerializedMintState {
  publicData: SerializedMintPublicData;
  userData: SerializedMintUserData;
}

export interface State {
  mint: SerializedMintState;
}
