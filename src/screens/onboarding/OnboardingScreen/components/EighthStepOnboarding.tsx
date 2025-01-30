import { FormOnboardingInput, OnboardingInputItemData } from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

const items: OnboardingInputItemData[] = [
  { text: "Sim", value: "YES" },
  { text: "Não", value: "NO" },
];

export const EighthStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <FormOnboardingInput
      control={control}
      name="likeToReceiveDailyReminders"
      title="Você gostaria de receber lembretes diários?"
      items={items}
    />
  );
};
