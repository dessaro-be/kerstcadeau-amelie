"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { WizardOption } from "@/lib/wizard-data";

interface OptionButtonProps {
  option: WizardOption;
  isSelected: boolean;
  onSelect: (value: string) => void;
}

export function OptionButton({
  option,
  isSelected,
  onSelect,
}: OptionButtonProps) {
  return (
    <Button
      variant={isSelected ? "default" : "outline"}
      className={cn(
        "h-auto min-h-[4rem] w-full flex-col gap-1 py-4 transition-all duration-200",
        isSelected && "ring-2 ring-primary ring-offset-2 scale-[1.02]",
        !isSelected && "hover:scale-[1.02] hover:border-primary/50"
      )}
      onClick={() => onSelect(option.value)}
    >
      <span className="text-base font-medium">{option.label}</span>
      {option.description && (
        <span
          className={cn(
            "text-xs font-normal",
            isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {option.description}
        </span>
      )}
    </Button>
  );
}
