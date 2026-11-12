import type { NextConfig } from "next";

/**
 * Subcaminho do GitHub Pages (`/e2company-frontend`), definido no workflow
 * de deploy. Fica vazio no desenvolvimento local.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Site 100% estático: `next build` gera a pasta `out/` publicada no GitHub Pages.
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  // O GitHub Pages não tem servidor para otimizar imagens; os arquivos já
  // estão em WebP/SVG no tamanho de exibição.
  images: { unoptimized: true },
  // Sem cacheComponents/partialPrefetching: o PPR não funciona em `output: "export"`.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
