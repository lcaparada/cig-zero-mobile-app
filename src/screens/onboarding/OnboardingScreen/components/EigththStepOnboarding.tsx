import { FormOnboardingInput, OnboardingInputItemData } from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

const items: OnboardingInputItemData[] = [
  { emoji: "🫁", text: "Saúde", value: "HEALTHY" },
  { emoji: "💰", text: "Economia", value: "SAVINGS" },
  { emoji: "👪", text: "Família", value: "FAMILY" },
  { emoji: "✨", text: "Outros", value: "OTHER" },
];

export const EigththStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <FormOnboardingInput
      control={control}
      name="mainReasonForQuitting"
      title="Qual é seu principal motivo para parar?"
      items={items}
    />
  );
};
