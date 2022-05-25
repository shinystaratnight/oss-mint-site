import { SerializedMintPublicData, SerializedMintUserData } from "state/types";
import multicall from "utils/multicall";
import ossNftABI from "config/abi/ossNft.json";
import { getOssNftAddress } from "utils/addressHelpers";
import BigNumber from "bignumber.js";
import { simpleRpcProvider } from "utils/providers";
import { getOssNftContract } from "utils/contractHelpers";

const fetchMintUserData = async (account): Promise<SerializedMintUserData> => {
  try {
    const ossNftContract = getOssNftContract();
    const ossNftAddress = getOssNftAddress();
    const nftBalance = await ossNftContract.balanceOf(account);
    const nftBalanceNumber = Number(nftBalance._hex);
    let calls = [];
    for (let i = 0; i < nftBalanceNumber; i++) {
      calls.push({
        address: ossNftAddress,
        name: "tokenOfOwnerByIndex",
        params: [account, i],
      });
    }
    const response = await multicall(ossNftABI, calls);
    const nfts = response.map((data) => {
      return {
        tokenId: Number(data[0]._hex),
        image: "",
      };
    });

    const ethBalance = await simpleRpcProvider.getBalance(account);
    return {
      nfts: nfts,
      ethBalance: new BigNumber(ethBalance.toString()).toJSON(),
    };
  } catch (err) {
    console.error(err);
  }
};

export default fetchMintUserData;
