import config from "@/config";
import { useBalance } from "wagmi";

export const useErc20 = () => {
  const { data: totalValueLocked } = useBalance({
    address: config.hiiqAddress as `0x${string}`,
    token: config.iqAddress as `0x${string}`,
  });

  const tvl = () => {
    if (totalValueLocked) {
      const result = Number(totalValueLocked.formatted);
      return result;
    }
    return 0;
  };

  return {
    tvl: tvl(),
  };
};
