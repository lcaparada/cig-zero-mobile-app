import { FormOnboardingInput } from "src/components/Form/OnboardingInput";
import { OnboardingInputItemData } from "src/components/OnboardingInput/onboardingTypes";

import { OnboardingControlBase } from "../types";

const items: OnboardingInputItemData[] = [
  { text: "Parar imediatamente", value: "STOP_NOW" },
  { text: "Reduzir gradualmente", value: "REDUCE_GRADUALLY" },
];

export const SixthStepOnboarding = ({
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
