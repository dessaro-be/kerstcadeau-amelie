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
  currentValue: string | null;
  onSelect: (questionId: keyof WizardAnswers, value: string) => void;
  onBack?: () => void;
  showBack: boolean;
  currentStep: number;
  totalSteps: number;
}

export function QuestionCard({
  question,
  currentValue,
  onSelect,
  onBack,
  showBack,
  currentStep,
  totalSteps,
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
              isSelected={currentValue === option.value}
              onSelect={(value) => onSelect(question.id, value)}
            />
          ))}
        </div>

        {showBack && (
          <div className="pt-2">
            <Button
              variant="ghost"
              onClick={onBack}
              className="w-full text-muted-foreground"
            >
              Terug
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
