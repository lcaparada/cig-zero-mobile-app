import { FormNumericInput } from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

export const FourthStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <FormNumericInput
      control={control}
      name="howManyYearsSmoke"
      title="Quantos anos você fuma?"
      valueDescription="Anos"
    />
  );
};
