import { useSelector } from "react-redux";
import BigNumber from "bignumber.js";
import {
  AnalyzeData,
  DeserializedMintPublicData,
  DeserializedMintUserData,
  Process,
  Rarity,
  State,
} from "state/types";
import { BIG_ZERO } from "utils/bigNumber";
import { useWeb3React } from "@web3-react/core";
import { getBalanceAmount } from "utils/formatBalance";
import { useAppDispatch } from "state";
import useRefresh from "hooks/useRefresh";
import { useEffect, useState } from "react";
import { fetchMintPublicDataAsync, fetchMintUserDataAsync } from ".";

export const useMintPublicData = (): DeserializedMintPublicData => {
  const mintData = useSelector((state: State) => state.mint);
  const { goldenPrice, silverPrice, commonPrice, ...rest } =
    mintData.publicData;
  return {
    ...rest,
    goldenPrice: getBalanceAmount(new BigNumber(goldenPrice)),
    silverPrice: getBalanceAmount(new BigNumber(silverPrice)),
    commonPrice: getBalanceAmount(new BigNumber(commonPrice)),
  };
};

export const useMintUserData = (): DeserializedMintUserData => {
  const mintData = useSelector((state: State) => state.mint);
  const { ethBalance, ...rest } = mintData.userData;
  return {
    ...rest,
    ethBalance: getBalanceAmount(new BigNumber(ethBalance)),
  };
};

export const usePollMintDataWithUserData = () => {
  const dispatch = useAppDispatch();
  const { slowRefresh } = useRefresh();
  const { account } = useWeb3React();

  useEffect(() => {
    dispatch(fetchMintPublicDataAsync());
    if (account) {
      dispatch(fetchMintUserDataAsync({ account }));
    }
  }, [slowRefresh, account, dispatch]);
};

export const useMintDataAnalyze = (): AnalyzeData => {
  const publicMintData = useMintPublicData();
  const { baseRefresh } = useRefresh();

  const [analyzeData, setAnalyzeData] = useState<AnalyzeData>({
    endAt: 0,
    startAt: 0,
    untilSec: 0,
    price: new BigNumber(10),
    maxSupply: 1000,
    process: Process.NOT_DETERMINED,
    rarity: Rarity.GOLDEN,
    supply: 0,
  });

  useEffect(() => {
    const {
      goldenMintStartAt,
      goldenMintEndAt,
      goldenPrice,
      goldenMaxSupply,
      goldenSupply,
      silverMintStartAt,
      silverMintEndAt,
      silverPrice,
      silverMaxSupply,
      silverSupply,
      commonMintStartAt,
      commonMintEndAt,
      commonPrice,
      commonMaxSupply,
      commonSupply,
    } = publicMintData;

    const currentTime = Math.floor(new Date().getTime() / 1000);
    if (goldenMintStartAt === 0) {
      setAnalyzeData({
        ...analyzeData,
        price: goldenPrice,
        maxSupply: goldenMaxSupply,
        process: Process.NOT_DETERMINED,
        rarity: Rarity.GOLDEN,
      });
    } else if (currentTime < goldenMintStartAt) {
      setAnalyzeData({
        ...analyzeData,
        price: goldenPrice,
        maxSupply: goldenMaxSupply,
        process: Process.WAITING,
        rarity: Rarity.GOLDEN,
        startAt: goldenMintStartAt,
        untilSec: goldenMintStartAt - currentTime,
      });
    } else if (currentTime < goldenMintEndAt) {
      setAnalyzeData({
        ...analyzeData,
        price: goldenPrice,
        maxSupply: goldenMaxSupply,
        supply: goldenSupply,
        process: Process.OPENED,
        rarity: Rarity.GOLDEN,
        endAt: goldenMintEndAt,
        untilSec: goldenMintEndAt - currentTime,
      });
    } else if (silverMintStartAt == 0) {
      setAnalyzeData({
        ...analyzeData,
        price: silverPrice,
        maxSupply: silverMaxSupply,
        supply: goldenSupply,
        process: Process.NOT_DETERMINED,
        rarity: Rarity.SILVER,
      });
    } else if (currentTime < silverMintStartAt) {
      setAnalyzeData({
        ...analyzeData,
        price: silverPrice,
        maxSupply: silverMaxSupply,
        process: Process.WAITING,
        rarity: Rarity.SILVER,
        startAt: silverMintStartAt,
        untilSec: silverMintStartAt - currentTime,
      });
    } else if (currentTime < silverMintEndAt) {
      setAnalyzeData({
        ...analyzeData,
        price: silverPrice,
        maxSupply: silverMaxSupply,
        supply: silverSupply,
        process: Process.OPENED,
        rarity: Rarity.SILVER,
        endAt: silverMintEndAt,
        untilSec: silverMintEndAt - currentTime,
      });
    } else if (commonMintStartAt == 0) {
      setAnalyzeData({
        ...analyzeData,
        price: commonPrice,
        maxSupply: commonMaxSupply,
        supply: silverSupply,
        process: Process.NOT_DETERMINED,
        rarity: Rarity.COMMON,
      });
    } else if (currentTime < commonMintStartAt) {
      setAnalyzeData({
        ...analyzeData,
        price: commonPrice,
        maxSupply: commonMaxSupply,
        process: Process.WAITING,
        rarity: Rarity.COMMON,
        startAt: commonMintStartAt,
        untilSec: commonMintStartAt - currentTime,
      });
    } else if (currentTime < commonMintEndAt) {
      setAnalyzeData({
        ...analyzeData,
        price: commonPrice,
        maxSupply: commonMaxSupply,
        supply: commonSupply,
        process: Process.OPENED,
        rarity: Rarity.COMMON,
        endAt: commonMintEndAt,
        untilSec: commonMintEndAt - currentTime,
      });
    } else {
      setAnalyzeData({
        ...analyzeData,
        maxSupply: goldenMaxSupply + silverMaxSupply + commonMaxSupply,
        supply: goldenSupply + silverSupply + commonSupply,
        process: Process.FINISHED,
        rarity: Rarity.COMMON,
      });
    }
  }, [baseRefresh, publicMintData]);
  return analyzeData;
};
