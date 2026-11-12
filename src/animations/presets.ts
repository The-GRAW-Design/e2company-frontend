/**
 * Valores padrão de movimento do site, para manter as animações dos
 * componentes React Bits coerentes entre si.
 */
export const ease = {
  out: "power3.out",
  inOut: "power2.inOut",
  expo: "expo.out",
  back: "back.out(1.6)",
} as const;

export const duration = {
  fast: 0.5,
  base: 0.9,
  slow: 1.4,
} as const;

export const stagger = {
  tight: 0.04,
  base: 0.12,
  loose: 0.2,
} as const;

/** Cores de marca usadas pelos efeitos (sparks, raios, bordas...). */
export const brandColors = {
  ciano: "#2588c3",
  cianoClaro: "#abdbf8",
  cianoMedio: "#3697d0",
  laranja: "#ff820d",
  laranjaEscuro: "#e24f00",
  ink: "#050505",
} as const;
