import { Modal } from "react-native";

import { PostHogEventsName } from "@constraints";

import { Screen } from "../Screen/Screen";

import { useOnboardingModal } from "./useOnboardingModal";

interface OnboardingModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OnboardingModal = ({
  visible,
  setVisible,
}: OnboardingModalProps) => {
  const {
    step,
    posthog,
    handleNextStep,
    handleRenderSteps,
    handleCanGoNextPage,
    handleToPreviousStep,
    handleRequestForNotification,
  } = useOnboardingModal();

  const MAX_STEPS = 8;

  const isLastStep = step === MAX_STEPS;
  const isFirstStep = step === 1;

  return (
    <Modal transparent animationType="none" visible={visible}>
      <Screen
        canGoBackSpecificyScreen={
          isFirstStep ? undefined : () => handleToPreviousStep()
        }
        button={{
          text: "Próximo",
          action: () => {
            if (isLastStep) {
              posthog.capture(
                PostHogEventsName.PRESS_TO_NAVIGATE_TO_START_SCREEN
              );
              handleRequestForNotification();
              // TO DO : OPEN SUBSCRIPTION MODAL;
            } else {
              posthog.capture(PostHogEventsName.PRESS_TO_NEXT_STEP, { step });
              handleNextStep();
            }
          },
          disabled: !handleCanGoNextPage(),
        }}
        insets={{ bottom: "s35", left: "s24", right: "s24", top: "s24" }}
        scrollable
        progressBar={{ progress: (step / MAX_STEPS) * 100 }}
      >
        {handleRenderSteps()}
      </Screen>
    </Modal>
  );
};
