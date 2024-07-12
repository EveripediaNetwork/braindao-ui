import config from "@/config";
import { HEX_BASE, WEI_TO_ETHER_DIVISOR, alchemyFetch } from "./alchemyFetch";

const getTotalHiiqSupply = async () => {
	try {
		const data = await alchemyFetch("eth_call", [
			{
				to: config.hiiqAddress,
				data: "0x18160ddd",
			},
			"latest",
		]);

		const totalHiiq = Number.parseInt(data, HEX_BASE) / WEI_TO_ETHER_DIVISOR;
		return totalHiiq;
	} catch (error) {
		console.error("🚨 Error getting total hiIQ supply", error);
		throw new Error("🚨 Error getting total hiIQ supply");
	}
};

export const getLockOverview = async () => {
	const totalHiiqSupply = await getTotalHiiqSupply();

	return {
		totalSupplyError: totalHiiqSupply === 0,
		isFetchingTotalSupply: false,
		totalHiiqSupply,
	};
};
