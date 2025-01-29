import { FormOnboardingInput } from "src/components/Form/OnboardingInput";
import { OnboardingInputItemData } from "src/components/OnboardingInput/onboardingTypes";

import { OnboardingControlBase } from "../types";

const items: OnboardingInputItemData[] = [
  { text: "1 ano", value: "1" },
  { text: "2-5 anos", value: "2_5" },
  { text: "6-10 anos", value: "6_10" },
  { text: "10+ anos", value: "10" },
];

export const FourthStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <FormOnboardingInput
      control={control}
      name="howManyYearsSmoke"
      title="Quantos anos você fuma?"
      items={items}
    />
  );
};
