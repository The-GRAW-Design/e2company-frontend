import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

/** Largura útil do design: 1640px (140px de margem em 1920px). */
export function Container({ children, as: Tag = "div", className }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 2xl:px-0", className)}>
      {children}
    </Tag>
  );
}
