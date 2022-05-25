import { SerializedMintPublicData, SerializedMintUserData } from "state/types";
import multicall from "utils/multicall";
import ossNftABI from "config/abi/ossNft.json";
import { getOssNftAddress } from "utils/addressHelpers";
import BigNumber from "bignumber.js";
import { simpleRpcProvider } from "utils/providers";

const fetchMintUserData = async (account): Promise<SerializedMintUserData> => {
  try {
    const ethBalance = await simpleRpcProvider.getBalance(account);
    return {
      nfts: [],
      ethBalance: new BigNumber(ethBalance.toString()).toJSON(),
    };
  } catch (err) {
    console.error(err);
  }
};

export default fetchMintUserData;
