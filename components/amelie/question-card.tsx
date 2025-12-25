"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { OptionButton } from "./option-button";
import type { WizardQuestion, WizardAnswers } from "@/lib/wizard-data";

interface QuestionCardProps {
  question: WizardQuestion;
  selectedValues: string[];
  onToggle: (questionId: keyof WizardAnswers, value: string) => void;
  onNext: () => void;
  onBack?: () => void;
  showBack: boolean;
  hasSelections: boolean;
  currentStep: number;
  totalSteps: number;
  isLastStep: boolean;
}

export function QuestionCard({
  question,
  selectedValues,
  onToggle,
  onNext,
  onBack,
  showBack,
  hasSelections,
  currentStep,
  totalSteps,
  isLastStep,
}: QuestionCardProps) {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="text-center pb-4">
        <div className="text-muted-foreground mb-2 text-sm">
          Stap {currentStep + 1} van {totalSteps}
        </div>
        <CardTitle className="text-2xl">{question.title}</CardTitle>
        {question.subtitle && (
          <CardDescription>{question.subtitle}</CardDescription>
        )}
        {selectedValues.length > 0 && (
          <div className="text-sm text-primary font-medium mt-2">
            {selectedValues.length} geselecteerd
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-2 max-h-[50vh] overflow-y-auto pr-1">
          {question.options.map((option) => (
            <OptionButton
              key={option.value}
              option={option}
              isSelected={selectedValues.includes(option.value)}
              onSelect={(value) => onToggle(question.id, value)}
            />
          ))}
        </div>

        <div className="flex gap-2 pt-4 sticky bottom-0 bg-card">
          {showBack && (
            <Button
              variant="outline"
              onClick={onBack}
              className="flex-1"
            >
              Terug
            </Button>
          )}
          <Button
            onClick={onNext}
            disabled={!hasSelections}
            className={showBack ? "flex-1" : "w-full"}
          >
            {isLastStep ? "Bekijk resultaat" : "Volgende"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
