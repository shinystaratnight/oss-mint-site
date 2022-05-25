import { useCallback } from "react";
import { useOssNftContract } from "hooks/useContract";
import { mintNft } from "utils/calls/mint";

const useMintNfts = (rarity) => {
  const nftContract = useOssNftContract();

  const handleMint = useCallback(
    async (numNft, ethAmount) => {
      const txHash = await mintNft(nftContract, rarity, numNft, ethAmount);
      console.info(txHash);
    },
    [nftContract, rarity]
  );

  return { onMint: handleMint };
};

export default useMintNfts;
