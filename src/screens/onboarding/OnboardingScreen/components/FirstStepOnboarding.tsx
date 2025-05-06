import { FormOnboardingInput, OnboardingInputItemData } from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

const items: OnboardingInputItemData[] = [
  { emoji: "👨", text: "Masculino", value: "MAS" },
  { emoji: "👩", text: "Feminino", value: "FEM" },
  { emoji: "👤", text: "Prefiro não dizer", value: "NDA" },
];

export const FirstStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <FormOnboardingInput
      control={control}
      name="gender"
      title="Qual é o seu gênero?"
      items={items}
    />
  );
};
