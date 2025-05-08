import config from "@/config";

const CACHE_TIME = 60 * 60 * 24;
export const formatNumber = new Intl.NumberFormat("en", {
	notation: "compact",
}).format;

export const fetchCoinMarketData = async (tokenName = "IQ") => {
	const proxyUrl = new URL(config.iqGatewayUrl);
	const targetUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${tokenName}`;

	proxyUrl.searchParams.append("url", targetUrl);
	proxyUrl.searchParams.append("cacheDuration", CACHE_TIME.toString());

	try {
		const response = await fetch(proxyUrl.href, {
			headers: {
				"x-api-key": config.iqGatewayKey,
			},
		});

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
