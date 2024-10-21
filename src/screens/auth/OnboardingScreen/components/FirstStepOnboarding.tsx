import { Easing, FadeIn } from "react-native-reanimated";

import { AnimatedBoxRNR, FormTextInput, Text } from "@components";

import { OnboardingControlBase } from "../types/onboardingScreenTypes";

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
