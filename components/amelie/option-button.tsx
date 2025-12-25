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
        "h-auto min-h-[3.5rem] w-full flex-col gap-0.5 py-2 px-2 transition-all duration-200 text-left",
        isSelected && "ring-2 ring-primary ring-offset-1 scale-[1.02]",
        !isSelected && "hover:scale-[1.02] hover:border-primary/50"
      )}
      onClick={() => onSelect(option.value)}
    >
      <span className="text-sm font-medium leading-tight">{option.label}</span>
      {option.description && (
        <span
          className={cn(
            "text-[10px] font-normal leading-tight",
            isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
          )}
        >
          {option.description}
        </span>
      )}
    </Button>
  );
}
