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

  const selectOption = useCallback(
    (questionId: keyof WizardAnswers, value: string) => {
      setAnswers((prev) => ({ ...prev, [questionId]: value }));

      // Auto-advance after short delay for smooth UX
      setTimeout(() => {
        if (currentStep < WIZARD_QUESTIONS.length - 1) {
          setDirection("forward");
          setCurrentStep((prev) => prev + 1);
        } else {
          // Last question answered, show loading
          setPhase("loading");
          setTimeout(() => setPhase("voucher"), 2500);
        }
      }, 300);
    },
    [currentStep]
  );

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

  return {
    // State
    phase,
    currentStep,
    answers,
    direction,

    // Computed
    currentQuestion: WIZARD_QUESTIONS[currentStep],
    totalSteps: WIZARD_QUESTIONS.length,
    progress: ((currentStep + 1) / WIZARD_QUESTIONS.length) * 100,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === WIZARD_QUESTIONS.length - 1,

    // Actions
    startWizard,
    selectOption,
    goBack,
    restart,
  };
}
