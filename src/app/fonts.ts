import { Inter, Sora } from "next/font/google";

/** Fonte de texto corrido (Inter variável, com itálico). */
export const inter = Inter({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

/** Fonte de títulos (Sora variável). */
export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});
