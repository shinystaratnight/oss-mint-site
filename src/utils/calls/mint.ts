import BigNumber from "bignumber.js";
import { Rarity } from "state/types";

export const mintNft = async (nftContract, rarity, numNft, ethAmount) => {
  let tx;
  if (rarity === Rarity.COMMON) {
    tx = await nftContract.mintCommon(numNft, 0, 0, [], { value: ethAmount });
  } else if (rarity === Rarity.SILVER) {
    tx = await nftContract.mintSilver(numNft, 0, 0, [], { value: ethAmount });
  } else {
    tx = await nftContract.mintGolden(numNft, 0, 0, [], { value: ethAmount });
  }

  const receipt = await tx.wait();
  return receipt.status;
};
