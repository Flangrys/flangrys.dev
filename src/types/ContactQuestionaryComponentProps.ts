import type {QuestionPhaseType, QuestionStepType} from "@libs/portfolio.const.ts";

export interface FormPhaseHandler {
    currentPhase?: QuestionPhaseType;

    setCurrentPhase(phase: QuestionPhaseType): void;
}

export interface FormStepHandler {
    currentStep?: QuestionStepType;

    setCurrentStep(step: QuestionStepType): void;
}