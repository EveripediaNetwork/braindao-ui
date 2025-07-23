import config from "@/config";

export const HEX_BASE = 16;
export const WEI_TO_ETHER_DIVISOR = 10e17;

interface EthCallParams {
	from?: string;
	to: string;
	data: string;
}

type RPCParams = [EthCallParams, string] | unknown[];

export const alchemyFetch = async (method: string, params: RPCParams) => {
	const response = await fetch(
		`https://eth-mainnet.alchemyapi.io/v2/${config.alchemyApiKey}`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				jsonrpc: "2.0",
				id: 1,
				method: method,
				params: params,
			}),
		},
	);

	const data = await response.json();
	if (data.error) {
		throw new Error(data.error.message);
	}
	return data.result;
};
