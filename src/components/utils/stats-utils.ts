import axios from 'axios';

export const numFormatter = Intl.NumberFormat('en', {
	notation: 'compact',
}).format;

export const fetchPriceChange = async () => {
	try {
		const res = await axios.get('/api/cmc-token-details', {
			params: { tokenName: 'IQ' },
		});
		const response = res.data;
		const { data } = response.response;
		const tokenDetails = data.IQ;
		const circulatingSupply = tokenDetails.circulating_supply;
		const marketCap = tokenDetails.quote.USD.market_cap;
		const volume = tokenDetails.quote.USD.volume_24h;
		return {
			circulatingSupply,
			marketCap,
			volume,
		};
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
};
