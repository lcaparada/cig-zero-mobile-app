import { Screen } from "@components";

import { PostHogEventsName } from "@constraints";

import { useOnboardingScreen } from "./useOnboardingScreen";

export const OnboardingScreen = () => {
  const {
    step,
    posthog,
    handleNextStep,
    handleRenderSteps,
    handleCanGoNextPage,
    handleToPreviousStep,
    handleNavigateToFeaturesScreen,
  } = useOnboardingScreen();

  const MAX_STEPS = 8;

  const isLastStep = step === MAX_STEPS;

  return (
    <Screen
      scrollable
      canGoBackSpecificyScreen={
        step === 1 ? undefined : () => handleToPreviousStep()
      }
      insets={{ bottom: "s35", left: "s24", right: "s24", top: "s24" }}
      button={{
        text: "Próximo",
        action: () => {
          if (isLastStep) {
            posthog.capture(
              PostHogEventsName.PRESS_TO_NAVIGATE_TO_START_SCREEN
            );
            handleNavigateToFeaturesScreen();
          } else {
            posthog.capture(PostHogEventsName.PRESS_TO_NEXT_STEP, { step });
            handleNextStep();
          }
        },
        disabled: !handleCanGoNextPage(),
      }}
      progressBar={{ progress: (step / MAX_STEPS) * 100 }}
    >
      {handleRenderSteps()}
    </Screen>
  );
};
