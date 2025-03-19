import { FormOnboardingInput, OnboardingInputItemData } from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

const items: OnboardingInputItemData[] = [
  { text: "Parar imediatamente", value: "STOP_NOW" },
  { text: "Reduzir gradualmente", value: "REDUCE_GRADUALLY" },
];

export const EighthStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <FormOnboardingInput
      control={control}
      name="quitImmediatelyOrReduceGradually"
      title="Você quer parar imediatamente ou reduzir gradualmente?"
      items={items}
    />
  );
};
