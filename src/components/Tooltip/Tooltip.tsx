import * as Haptics from "expo-haptics";
import { usePostHog } from "posthog-react-native";

import { PostHogEventsName } from "@constraints";

import { Box, TouchableOpacityBox } from "../Box/Box";
import { Text } from "../Text/Text";
import { IStep, Labels } from "rn-tourguide";

export interface TooltipProps {
  isFirstStep?: boolean;
  isLastStep?: boolean;
  currentStep: IStep;
  labels?: Labels;
  handleNext?: () => void;
  handlePrev?: () => void;
  handleStop?: () => void;
}

export const Tooltip = ({
  currentStep,
  handleNext,
  handlePrev,
  handleStop,
  isFirstStep,
  isLastStep,
  labels,
}: TooltipProps) => {
  const posthog = usePostHog();

  return (
    <Box
      backgroundColor={"background"}
      paddingHorizontal={"s24"}
      paddingVertical={"s24"}
      borderRadius={"s16"}
    >
      <Text preset="paragraphsBig" color={"backgroundConstrast"}>
        {currentStep?.text}
      </Text>
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
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              posthog.capture(PostHogEventsName.PRESS_TO_SKIP_TUTORIAL, {
                step: currentStep?.order,
              });
              if (handleStop) handleStop();
            }}
          >
            <Text preset="paragraphs" color={"primary"}>
              {labels?.skip || "Pular"}
            </Text>
          </TouchableOpacityBox>
        ) : null}
        {!isFirstStep ? (
          <TouchableOpacityBox
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              posthog.capture(
                PostHogEventsName.PRESS_TO_PREVIOUS_STEP_TUTORIAL,
                {
                  step: currentStep?.order,
                }
              );
              if (handlePrev) handlePrev();
            }}
          >
            <Text preset="paragraphs" color={"primary"}>
              {labels?.previous || "Anterior"}
            </Text>
          </TouchableOpacityBox>
        ) : null}
        {!isLastStep ? (
          <TouchableOpacityBox
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              posthog.capture(PostHogEventsName.PRESS_TO_NEXT_STEP_TUTORIAL, {
                step: currentStep?.order,
              });
              if (handleNext) handleNext();
            }}
          >
            <Text preset="paragraphs" color={"primary"}>
              {labels?.next || "Próximo"}
            </Text>
          </TouchableOpacityBox>
        ) : (
          <TouchableOpacityBox
            onPress={() => {
              posthog.capture(PostHogEventsName.PRESS_TO_FINISH_TUTORIAL, {
                step: currentStep?.order,
              });
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              if (handleStop) handleStop();
            }}
          >
            <Text preset="paragraphs" color={"primary"}>
              {labels?.finish || "Finalizar"}
            </Text>
          </TouchableOpacityBox>
        )}
      </Box>
    </Box>
  );
};
