/* eslint-disable indent */
import hiIQABI from "@/abis/hiIQABI.abi";
import config from "@/config";
import { getPublicClient } from "@wagmi/core";
import { formatEther } from "viem";
import { useAccount, useContractRead } from "wagmi";

const readContract = {
  address: config.hiiqAddress as `0x${string}`,
  abi: hiIQABI,
};

export const useLockOverview = (userAddress?: string) => {
  const { address } = useAccount();

  const {
    data: totalHiiq,
    isError: totalSupplyError,
    isLoading: isFetchingTotalSupply,
  } = useContractRead({
    ...readContract,
    functionName: "totalSupply",
  });

  const getTotalHiiqSupply = () => {
    if (totalHiiq) {
      return Number(formatEther(totalHiiq));
    }
    return 0;
  };
  return {
    totalSupplyError,
    isFetchingTotalSupply,
    totalHiiqSupply: getTotalHiiqSupply(),
  };
};
