import { usePostHog } from "posthog-react-native";
import { useCopilot } from "react-native-copilot";

import { PostHogEventsName } from "@constraints";

import { Box, TouchableOpacityBox } from "../Box/Box";
import { Text } from "../Text/Text";

export const TooltipCopilot = () => {
  const { goToNext, goToPrev, stop, currentStep, isFirstStep, isLastStep } =
    useCopilot();

  const posthog = usePostHog();

  const handleStop = () => {
    void stop();
  };
  const handleNext = () => {
    void goToNext();
  };

  const handlePrev = () => {
    void goToPrev();
  };

  return (
    <Box>
      <Text preset="paragraphsBig">{currentStep?.text}</Text>
      <Box
        flexDirection={"row"}
        justifyContent={"flex-end"}
        columnGap={"s8"}
        mt={"s10"}
        mb={"s10"}
      >
        {!isLastStep ? (
          <TouchableOpacityBox
            onPress={() => {
              posthog.capture(PostHogEventsName.PRESS_TO_SKIP_TUTORIAL, {
                step: currentStep?.order,
              });
              handleStop();
            }}
          >
            <Text preset="paragraphs" color={"primary"}>
              Pular
            </Text>
          </TouchableOpacityBox>
        ) : null}
        {!isFirstStep ? (
          <TouchableOpacityBox
            onPress={() => {
              posthog.capture(
                PostHogEventsName.PRESS_TO_PREVIOUS_STEP_TUTORIAL,
                {
                  step: currentStep?.order,
                }
              );
              handlePrev();
            }}
          >
            <Text preset="paragraphs" color={"primary"}>
              Anterior
            </Text>
          </TouchableOpacityBox>
        ) : null}
        {!isLastStep ? (
          <TouchableOpacityBox
            onPress={() => {
              posthog.capture(PostHogEventsName.PRESS_TO_NEXT_STEP_TUTORIAL, {
                step: currentStep?.order,
              });
              handleNext();
            }}
          >
            <Text preset="paragraphs" color={"primary"}>
              Próximo
            </Text>
          </TouchableOpacityBox>
        ) : (
          <TouchableOpacityBox
            onPress={() => {
              posthog.capture(PostHogEventsName.PRESS_TO_FINISH_TUTORIAL, {
                step: currentStep?.order,
              });
              handleStop();
            }}
          >
            <Text preset="paragraphs" color={"primary"}>
              Finalizar
            </Text>
          </TouchableOpacityBox>
        )}
      </Box>
    </Box>
  );
};
