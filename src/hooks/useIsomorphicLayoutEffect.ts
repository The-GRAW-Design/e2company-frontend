import { useEffect, useLayoutEffect } from "react";

/** `useLayoutEffect` no navegador e `useEffect` no servidor (sem aviso de SSR). */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
