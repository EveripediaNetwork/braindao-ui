'use client';

import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'next-themes';
import { createConfig, WagmiConfig } from 'wagmi';
import { publicClient } from '@/config/wagmi';

const client = createConfig({
	autoConnect: true,
	publicClient,
});

const ClientProviders = ({ children }: PropsWithChildren) => {
	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
			<WagmiConfig config={client}>{children}</WagmiConfig>
		</ThemeProvider>
	);
};

export default ClientProviders;
