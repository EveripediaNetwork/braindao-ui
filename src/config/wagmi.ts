import { configureChains, mainnet } from "wagmi";
import { goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import config from "./index";

const chainArray = config.alchemyChain === "goerli" ? goerli : mainnet;

export const { chains, publicClient } = configureChains(
	[chainArray],
	[alchemyProvider({ apiKey: config.alchemyApiKey }), publicProvider()],
);
