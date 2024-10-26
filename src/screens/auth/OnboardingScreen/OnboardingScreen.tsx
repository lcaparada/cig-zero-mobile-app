import { Screen } from "@components";

import { useOnboardingScreen } from "./useOnboardingScreen";

export const OnboardingScreen = () => {
  const {
    step,
    navigation,
    handleNextStep,
    handleRenderSteps,
    handleCanGoNextPage,
    handleToPreviousStep,
    handleNavigateToStartScreen,
  } = useOnboardingScreen();

  const MAX_STEPS = 8;

  return (
    <Screen
      scrollable
      canGoBackSpecificyScreen={() =>
        step === 1 ? navigation.goBack() : handleToPreviousStep()
      }
      insets={{ bottom: "s35", left: "s24", right: "s24", top: "s24" }}
      button={{
        text: "Próximo",
        action: () =>
          step === MAX_STEPS ? handleNavigateToStartScreen() : handleNextStep(),
        disabled: !handleCanGoNextPage(),
      }}
      progressBar={{ progress: (step / MAX_STEPS) * 100 }}
    >
      {handleRenderSteps()}
    </Screen>
  );
};
