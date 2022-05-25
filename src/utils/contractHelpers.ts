import { ethers } from "ethers";
import multicallAbi from "config/abi/multicall.json";
import ossNftAbi from "config/abi/ossNft.json";
import { simpleRpcProvider } from "utils/providers";
import { getMulticallAddress, getOssNftAddress } from "./addressHelpers";

export function getContract(
  abi,
  address,
  signer?: ethers.Signer | ethers.providers.Provider
) {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
}

export const getMulticallContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(multicallAbi, getMulticallAddress(), signer);
};

export const getOssNftContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(ossNftAbi, getOssNftAddress(), signer);
};
