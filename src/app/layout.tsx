import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Providers } from "@/providers";
import { inter, sora } from "./fonts";
import "lenis/dist/lenis.css";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Crescimento não é sorte. É estratégia!`,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: siteConfig.locale,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${sora.variable} h-full antialiased`}>
      <body className="min-h-full">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
