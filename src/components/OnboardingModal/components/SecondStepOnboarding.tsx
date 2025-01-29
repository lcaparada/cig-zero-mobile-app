import { FormOnboardingInput } from "src/components/Form/OnboardingInput";
import { OnboardingInputItemData } from "src/components/OnboardingInput/onboardingTypes";

import { OnboardingControlBase } from "../types";

const items: OnboardingInputItemData[] = [
  { emoji: "👨", text: "Masculino", value: "MAS" },
  { emoji: "👩", text: "Feminino", value: "FEM" },
  { emoji: "👤", text: "Prefiro não dizer", value: "NDA" },
];

export const SecondStepOnboarding = ({
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
