import type { CSSProperties } from "react";

/**
 * Converte uma medida do Figma (px no frame de referência) para CSS
 * proporcional. Depende de `--u` definido no ancestral, por exemplo
 * `[--u:calc(100cqw/1920)]` dentro de um container query.
 */
export const u = (px: number) => `calc(${px} * var(--u))`;

/** Igual a `u`, mas nunca menor que `minPx` (legibilidade em telas pequenas). */
export const uMin = (px: number, minPx: number) => `max(${minPx}px, ${u(px)})`;

/** Posição/tamanho absolutos em unidades do design. */
export function place(x: number, y: number, w?: number, h?: number): CSSProperties {
  return {
    left: u(x),
    top: u(y),
    ...(w !== undefined && { width: u(w) }),
    ...(h !== undefined && { height: u(h) }),
  };
}
