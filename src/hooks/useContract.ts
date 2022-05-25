
import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { getMulticallContract, getOssNftContract } from "utils/contractHelpers";

export const useMulticallContract = () => {
  const { library } = useWeb3React();
  return useMemo(() => getMulticallContract(library.getSigner()), [library]);
};

export const useOssNftContract = () => {
  const { library } = useWeb3React();
  return useMemo(() => getOssNftContract(library.getSigner()), [library]);
};

