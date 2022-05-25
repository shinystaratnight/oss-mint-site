import { SerializedMintPublicData } from "state/types";
import multicall from "utils/multicall";
import ossNftABI from "config/abi/ossNft.json";
import { getOssNftAddress } from "utils/addressHelpers";
import BigNumber from "bignumber.js";

const fetchMintPublicData = async (): Promise<SerializedMintPublicData> => {
  const ossNftAddress = getOssNftAddress();
  const calls = [
    {
      address: ossNftAddress,
      name: "_goldenMintStartAt",
    },
    {
      address: ossNftAddress,
      name: "_goldenMintEndAt",
    },
    {
      address: ossNftAddress,
      name: "GOLDEN_MAX_SUPPLY",
    },
    {
      address: ossNftAddress,
      name: "totalSupplyGolden",
    },
    {
      address: ossNftAddress,
      name: "_goldenMaxPerUser",
    },
    {
      address: ossNftAddress,
      name: "_goldenPrice",
    },
    {
      address: ossNftAddress,
      name: "_silverMintStartAt",
    },
    {
      address: ossNftAddress,
      name: "_silverMintEndAt",
    },
    {
      address: ossNftAddress,
      name: "SILVER_MAX_SUPPLY",
    },
    {
      address: ossNftAddress,
      name: "totalSupplySilver",
    },
    {
      address: ossNftAddress,
      name: "_silverMaxPerUser",
    },
    {
      address: ossNftAddress,
      name: "_silverPrice",
    },
    {
      address: ossNftAddress,
      name: "_commonMintStartAt",
    },
    {
      address: ossNftAddress,
      name: "_commonMintEndAt",
    },
    {
      address: ossNftAddress,
      name: "COMMON_MAX_SUPPLY",
    },
    {
      address: ossNftAddress,
      name: "totalSupplyCommon",
    },
    {
      address: ossNftAddress,
      name: "_commonMaxPerUser",
    },
    {
      address: ossNftAddress,
      name: "_commonPrice",
    },
    {
      address: ossNftAddress,
      name: "totalSupply",
    },
  ];

  try {
    const [
      [goldenMintStartAt],
      [goldenMintEndAt],
      [goldenMaxSupply],
      [goldenSupply],
      [goldenMaxPerUser],
      [goldenPrice],
      [silverMintStartAt],
      [silverMintEndAt],
      [silverMaxSupply],
      [silverSupply],
      [silverMaxPerUser],
      [silverPrice],
      [commonMintStartAt],
      [commonMintEndAt],
      [commonMaxSupply],
      [commonSupply],
      [commonMaxPerUser],
      [commonPrice],
      [totalSupply],
    ] = await multicall(ossNftABI, calls);

    return {
      goldenMintStartAt: Number(goldenMintStartAt._hex),
      goldenMintEndAt: Number(goldenMintEndAt._hex),
      goldenMaxSupply: Number(goldenMaxSupply._hex),
      goldenSupply: Number(goldenSupply._hex),
      goldenMaxPerUser: Number(goldenMaxPerUser._hex),
      goldenPrice: new BigNumber(goldenPrice._hex).toJSON(),
      silverMintStartAt: Number(silverMintStartAt._hex),
      silverMintEndAt: Number(silverMintEndAt._hex),
      silverMaxSupply: Number(silverMaxSupply._hex),
      silverSupply: Number(silverSupply._hex),
      silverMaxPerUser: Number(silverMaxPerUser._hex),
      silverPrice: new BigNumber(silverPrice._hex).toJSON(),
      commonMintStartAt: Number(commonMintStartAt._hex),
      commonMintEndAt: Number(commonMintEndAt._hex),
      commonMaxSupply: Number(commonMaxSupply._hex),
      commonSupply: Number(commonSupply._hex),
      commonMaxPerUser: Number(commonMaxPerUser._hex),
      commonPrice: new BigNumber(commonPrice._hex).toJSON(),
      totalSupply: Number(totalSupply._hex),
    };
  } catch (err) {
    console.error(err);
  }
};

export default fetchMintPublicData;
