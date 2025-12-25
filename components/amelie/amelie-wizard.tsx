"use client";

import { useWizard } from "@/hooks/use-wizard";
import { LandingScreen } from "./landing-screen";
import { WizardStep } from "./wizard-step";
import { QuestionCard } from "./question-card";
import { LoadingScreen } from "./loading-screen";
import { VoucherDisplay } from "./voucher-display";

export function AmelieWizard() {
  const {
    phase,
    currentStep,
    answers,
    direction,
    currentQuestion,
    totalSteps,
    isFirstStep,
    startWizard,
    selectOption,
    goBack,
    restart,
  } = useWizard();

  if (phase === "landing") {
    return <LandingScreen onStart={startWizard} />;
  }

  if (phase === "loading") {
    return <LoadingScreen />;
  }

  if (phase === "voucher") {
    return <VoucherDisplay answers={answers} onRestart={restart} />;
  }

  // phase === "wizard"
  return (
    <WizardStep direction={direction} stepKey={currentStep}>
      <QuestionCard
        question={currentQuestion}
        currentValue={answers[currentQuestion.id]}
        onSelect={selectOption}
        onBack={goBack}
        showBack={!isFirstStep}
        currentStep={currentStep}
        totalSteps={totalSteps}
      />
    </WizardStep>
  );
}
