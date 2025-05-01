import config from "@/config";

export const formatNumber = new Intl.NumberFormat("en", {
	notation: "compact",
}).format;

export const fetchCoinMarketData = async (tokenName = "IQ") => {
	const CACHE_TIME = 60 * 60 * 24;
	try {
		const response = await fetch(
			`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${tokenName}`,
			{
				headers: {
					"X-CMC_PRO_API_KEY": config.cmcApiKey,
				},
				next: { revalidate: CACHE_TIME },
			},
		);

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const data = await response.json();
		const tokenDetails = data.data[tokenName];
		const circulatingSupply = tokenDetails.circulating_supply;
		const marketCap = tokenDetails.quote.USD.market_cap;
		const volume = tokenDetails.quote.USD.volume_24h;

		return {
			circulatingSupply,
			marketCap,
			volume,
		};
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
};
