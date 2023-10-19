import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect';
import { MetaMaskConnector } from '@wagmi/core/connectors/metaMask';
import { mainnet } from 'wagmi';
import { configureChains } from '@wagmi/core';
import { goerli } from 'wagmi/chains';
import { alchemyProvider } from '@wagmi/core/providers/alchemy';
import { publicProvider } from '@wagmi/core/providers/public';

import config from './index';

const chainArray = config.alchemyChain === 'goerli' ? goerli : mainnet;

export const { chains, publicClient } = configureChains(
	[chainArray],
	[alchemyProvider({ apiKey: config.alchemyApiKey }), publicProvider()]
);
