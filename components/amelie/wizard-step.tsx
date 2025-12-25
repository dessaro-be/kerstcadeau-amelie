"use client";

import { cn } from "@/lib/utils";
import type { Direction } from "@/hooks/use-wizard";

interface WizardStepProps {
  children: React.ReactNode;
  direction: Direction;
  stepKey: string | number;
}

export function WizardStep({ children, direction, stepKey }: WizardStepProps) {
  const animationClass =
    direction === "forward" ? "animate-slide-in-right" : "animate-slide-in-left";

  return (
    <div
      key={stepKey}
      className={cn(
        "flex min-h-screen items-center justify-center p-4",
        animationClass
      )}
    >
      {children}
    </div>
  );
}
