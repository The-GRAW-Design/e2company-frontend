"use client";

import type { ReactNode } from "react";
import { ScrollTriggerRefresh } from "./ScrollTriggerRefresh";
import { SmoothScrollProvider } from "./SmoothScrollProvider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ScrollTriggerRefresh />
      {children}
    </SmoothScrollProvider>
  );
}
