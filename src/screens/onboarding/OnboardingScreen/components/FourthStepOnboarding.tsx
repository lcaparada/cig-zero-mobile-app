import { FormNumericInput } from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

export const FourthStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <FormNumericInput
      control={control}
      name="howManyCigarettesPerDay"
      title="Quantos cigarros você fuma por dia?"
      valueDescription="Cigarros"
    />
  );
};
