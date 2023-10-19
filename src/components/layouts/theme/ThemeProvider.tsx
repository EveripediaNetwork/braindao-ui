'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'
import { createConfig, WagmiConfig } from 'wagmi'
import { connectors, publicClient, webSocketPublicClient } from '@/config/wagmi'

const client = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

const ClientProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <WagmiConfig config={client}>{children}</WagmiConfig>
    </ThemeProvider>
  )
}

export default ClientProviders
