import config from "@/config";
import { formatNumber } from "@/modules/helpers/numFormatter";
import axios, { AxiosError } from "axios";
import { unstable_cache } from "next/cache";
import {
	type CMCTokenData,
	cmcTokenDataSchema,
	sophiaStatsSchema,
} from "./_schema";

const CACHE_DURATION_SECONDS_24_HR_IN_SECONDS = 24 * 60 * 60;

export const getIqStats = unstable_cache(
	async () => {
		try {
			const [cmcData] = await Promise.all([fetchMarketCapData()]);

			if (!cmcData) {
				return {
					price: null,
					mcap: null,
					iqPriceChange: null,
					formattedPriceChange: null,
					iqMCapChange: null,
					formattedMCapChange: null,
				};
			}

			const price = formatNumber(cmcData.current_price, {
				minDecimals: 4,
				maxDecimals: 4,
			});

			const mcap = formatNumber(cmcData.market_cap, {
				minDecimals: 2,
				maxDecimals: 2,
				compact: true,
			});

			const iqPriceChange = cmcData.price_change_percentage_24h;
			const iqMCapChange = cmcData.market_cap_change_percentage_24h;

			const formattedPriceChange = formatNumber(iqPriceChange, {
				minDecimals: 2,
				maxDecimals: 2,
				signed: true,
			});

			const formattedMCapChange = formatNumber(iqMCapChange, {
				minDecimals: 2,
				maxDecimals: 2,
				signed: true,
			});

			return {
				price,
				mcap,
				iqPriceChange,
				formattedPriceChange,
				iqMCapChange,
				formattedMCapChange,
			};
		} catch (error) {
			console.error("Error in getIqDetails:", error);
			return {
				price: null,
				mcap: null,
				iqPriceChange: null,
				formattedPriceChange: null,
				iqMCapChange: null,
				formattedMCapChange: null,
			};
		}
	},
	["iq-stats"],
	{ revalidate: CACHE_DURATION_SECONDS_24_HR_IN_SECONDS },
);

export async function getSophiaStats() {
	try {
		const response = await axios.get(
			"https://app.iqai.com/api/agents/stats?address=0x4dBcC239b265295500D2Fe2d0900629BDcBBD0fB",
		);

		return sophiaStatsSchema.parse(response.data);
	} catch (error) {
		console.error("Error fetching Sophia stats:", error);
		return null;
	}
}

async function fetchMarketCapData(): Promise<CMCTokenData> {
	try {
		const response = await axios.get(`${config.iqGatewayUrl}`, {
			headers: {
				"x-api-key": config.iqGatewayKey,
			},
			params: {
				url: "https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=everipedia",
				cacheDuration: CACHE_DURATION_SECONDS_24_HR_IN_SECONDS,
			},
		});
		return cmcTokenDataSchema.parse(response.data[0]);
	} catch (error) {
		if (error instanceof AxiosError) {
			throw new Error(`CoinMarketCap API error: ${error.message}`);
		}
		throw error;
	}
}
