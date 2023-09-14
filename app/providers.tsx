// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { WidgetsProvider } from "@sitecore-search/react";
import {
  SEARCH_ENV,
  SEARCH_CUSTOMER_KEY,
  SEARCH_API_KEY,
} from "@/constants/search";
import { Environment } from "@sitecore-search/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <WidgetsProvider
          env={SEARCH_ENV as Environment}
          customerKey={SEARCH_CUSTOMER_KEY}
          apiKey={SEARCH_API_KEY}
        >
          {children}
        </WidgetsProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
