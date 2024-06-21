import { configureChains } from "@wagmi/core";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";
import { publicProvider } from "@wagmi/core/providers/public";
import { mainnet } from "wagmi";
import { goerli } from "wagmi/chains";

import config from "./index";

const chainArray = config.alchemyChain === "goerli" ? goerli : mainnet;

export const { chains, publicClient } = configureChains(
	[chainArray],
	[alchemyProvider({ apiKey: config.alchemyApiKey }), publicProvider()],
);
