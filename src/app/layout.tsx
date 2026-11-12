import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { inter, sora } from "./fonts";
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
