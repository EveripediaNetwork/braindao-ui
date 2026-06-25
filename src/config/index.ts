const config = {
	iqAddress: "0x579cea1889991f68acc35ff5c3dd0621ff29b0c9",
	hiiqAddress: "0x1bf5457ecaa14ff63cc89efd560e251e814e16ba",
	sophiaAgentAddress: "0x4dBcC239b265295500D2Fe2d0900629BDcBBD0fB",
	iqGatewayUrl: "https://gateway.braindao.org",
	alchemyApiKey: String(process.env.NEXT_PUBLIC_ALCHEMY_API_KEY),
	iqGatewayKey: process.env.NEXT_PUBLIC_IQ_GATEWAY_KEY || "",
	posthogApiKey: process.env.NEXT_PUBLIC_POSTHOG_KEY || "",
};

export default config;
