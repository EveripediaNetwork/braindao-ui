"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

const ClientProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ClientProviders;
