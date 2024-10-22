import { FormOnboardingInput, OnboardingInputItemData } from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

const items: OnboardingInputItemData[] = [
  { text: "1-5", value: "1_5" },
  { text: "6-10", value: "6_10" },
  { text: "11-20", value: "11_20" },
  { text: "21+", value: "21" },
];

export const FifthStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <FormOnboardingInput
      control={control}
      name="howManyCigarettesPerDay"
      title="Quantos cigarros você fuma por dia?"
      items={items}
    />
  );
};
