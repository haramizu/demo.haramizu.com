import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import Analytics from "./_components/gtm/Analytics";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Haramizu Demo",
  description: "This is demo site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="dark">
      <body>
        <Suspense>
          <Analytics />
        </Suspense>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
