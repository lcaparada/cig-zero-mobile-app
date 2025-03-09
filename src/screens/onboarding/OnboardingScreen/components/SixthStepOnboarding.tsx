import { FormNumericInput } from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

export const SixthStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <FormNumericInput
      control={control}
      isPrice
      name="pricePackCigarrete"
      title="Qual o preço do maço de cigarro?"
      valueDescription=""
    />
  );
};
