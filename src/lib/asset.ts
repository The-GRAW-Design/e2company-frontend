/**
 * Prefixo do site quando publicado em subcaminho (GitHub Pages:
 * `/e2company-frontend`). Vazio no desenvolvimento local.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Caminho de um arquivo de `public/` com o `basePath` aplicado.
 * Necessário porque `next/image` e os componentes React Bits recebem a URL
 * crua e não acrescentam o `basePath` sozinhos.
 */
export function asset(path: `/${string}`) {
  return `${basePath}${path}`;
}
