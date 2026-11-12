import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type StepCardProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Card "Passo a passo" do Figma (metodologia e FAQ). */
export function StepCard({ title, children, className }: StepCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-3 rounded-2xl border-[0.5px] border-laranja bg-grafite-800/20 px-6 py-5 shadow-card sm:px-[39px] sm:py-[25px]",
        className,
      )}
    >
      <h3 className="text-gradient-ciano font-display text-base leading-snug font-semibold sm:text-xl">
        {title}
      </h3>
      <div className="text-base leading-normal text-white sm:text-lg">{children}</div>
    </article>
  );
}
