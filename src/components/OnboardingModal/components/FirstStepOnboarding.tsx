import { Easing, FadeIn } from "react-native-reanimated";

import { AnimatedBoxRNR } from "src/components/Box/Box";
import { FormTextInput } from "src/components/Form/FormTextInput";
import { Text } from "src/components/Text/Text";

import { OnboardingControlBase } from "../types";

export const FirstStepOnboarding = ({
  control,
}: Pick<OnboardingControlBase, "control">) => {
  return (
    <AnimatedBoxRNR
      entering={FadeIn.delay(100)
        .duration(500)
        .easing(Easing.inOut(Easing.ease))}
    >
      <Text weight="semiBold" textAlign={"center"} preset="titleSmall">
        Qual é o seu nome?
      </Text>
      <FormTextInput
        name="name"
        control={control}
        boxProps={{ mt: "s30" }}
        icon="user"
        placeholder="Digite o seu nome"
      />
    </AnimatedBoxRNR>
  );
};
