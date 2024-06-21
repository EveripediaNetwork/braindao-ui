"use client";

import { publicClient } from "@/config/wagmi";
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";
import { WagmiConfig, createConfig } from "wagmi";
import { CSPostHogProvider } from "../CgPosthogProvider";

const client = createConfig({
  autoConnect: true,
  publicClient,
});

const ClientProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <WagmiConfig config={client}>
        <CSPostHogProvider>{children}</CSPostHogProvider>
      </WagmiConfig>
    </ThemeProvider>
  );
};

export default ClientProviders;
