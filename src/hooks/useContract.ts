import { useMemo } from "react";
import { getMulticallContract, getOssNftContract } from "utils/contractHelpers";
import useActiveWeb3React from "./useActiveWeb3React";

export const useMulticallContract = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getMulticallContract(library.getSigner()), [library]);
};

export const useOssNftContract = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getOssNftContract(library.getSigner()), [library]);
};
