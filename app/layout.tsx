import "./globals.css";
import type { Metadata } from "next";
import { Suspense } from "react";
import Analytics from "./_components/gtm/Analytics";
import { Providers } from "./providers";
import Header from "./header";
import Footer from "./footer";

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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
