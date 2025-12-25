"use client";

import { useState, useCallback } from "react";
import {
  Phase,
  WizardAnswers,
  WIZARD_QUESTIONS,
  INITIAL_ANSWERS,
} from "@/lib/wizard-data";

export type Direction = "forward" | "backward";

export function useWizard() {
  const [phase, setPhase] = useState<Phase>("landing");
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<WizardAnswers>(INITIAL_ANSWERS);
  const [direction, setDirection] = useState<Direction>("forward");

  const startWizard = useCallback(() => {
    setPhase("wizard");
    setCurrentStep(0);
    setDirection("forward");
  }, []);

  // Toggle selection for multi-select
  const toggleOption = useCallback(
    (questionId: keyof WizardAnswers, value: string) => {
      setAnswers((prev) => {
        const currentValues = prev[questionId];
        const isSelected = currentValues.includes(value);

        if (isSelected) {
          // Remove the value
          return {
            ...prev,
            [questionId]: currentValues.filter((v) => v !== value),
          };
        } else {
          // Add the value
          return {
            ...prev,
            [questionId]: [...currentValues, value],
          };
        }
      });
    },
    []
  );

  // Go to next step (called when user clicks "Volgende")
  const goNext = useCallback(() => {
    if (currentStep < WIZARD_QUESTIONS.length - 1) {
      setDirection("forward");
      setCurrentStep((prev) => prev + 1);
    } else {
      // Last question, show loading then voucher
      setPhase("loading");
      setTimeout(() => setPhase("voucher"), 2500);
    }
  }, [currentStep]);

  const goBack = useCallback(() => {
    if (currentStep > 0) {
      setDirection("backward");
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const restart = useCallback(() => {
    setPhase("landing");
    setCurrentStep(0);
    setAnswers(INITIAL_ANSWERS);
    setDirection("forward");
  }, []);

  const currentQuestion = WIZARD_QUESTIONS[currentStep];
  const currentSelections = answers[currentQuestion?.id] || [];
  const hasSelections = currentSelections.length > 0;

  return {
    // State
    phase,
    currentStep,
    answers,
    direction,

    // Computed
    currentQuestion,
    totalSteps: WIZARD_QUESTIONS.length,
    progress: ((currentStep + 1) / WIZARD_QUESTIONS.length) * 100,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === WIZARD_QUESTIONS.length - 1,
    hasSelections,

    // Actions
    startWizard,
    toggleOption,
    goNext,
    goBack,
    restart,
  };
}
