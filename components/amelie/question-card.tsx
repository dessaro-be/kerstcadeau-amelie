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
    <Card className="w-full max-w-md">
      <CardHeader className="text-center">
        <div className="text-muted-foreground mb-2 text-sm">
          Stap {currentStep + 1} van {totalSteps}
        </div>
        <CardTitle className="text-2xl">{question.title}</CardTitle>
        {question.subtitle && (
          <CardDescription>{question.subtitle}</CardDescription>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {question.options.map((option) => (
            <OptionButton
              key={option.value}
              option={option}
              isSelected={selectedValues.includes(option.value)}
              onSelect={(value) => onToggle(question.id, value)}
            />
          ))}
        </div>

        <div className="flex gap-2 pt-4">
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
