import { useCopilot } from "react-native-copilot";

import { Box, TouchableOpacityBox } from "../Box/Box";
import { Text } from "../Text/Text";

export const TooltipCopilot = () => {
  const { goToNext, goToPrev, stop, currentStep, isFirstStep, isLastStep } =
    useCopilot();

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
          <TouchableOpacityBox onPress={handleStop}>
            <Text preset="paragraphs" color={"primary"}>
              Pular
            </Text>
          </TouchableOpacityBox>
        ) : null}
        {!isFirstStep ? (
          <TouchableOpacityBox onPress={handlePrev}>
            <Text preset="paragraphs" color={"primary"}>
              Anterior
            </Text>
          </TouchableOpacityBox>
        ) : null}
        {!isLastStep ? (
          <TouchableOpacityBox onPress={handleNext}>
            <Text preset="paragraphs" color={"primary"}>
              Próximo
            </Text>
          </TouchableOpacityBox>
        ) : (
          <TouchableOpacityBox onPress={handleStop}>
            <Text preset="paragraphs" color={"primary"}>
              Finalizar
            </Text>
          </TouchableOpacityBox>
        )}
      </Box>
    </Box>
  );
};
