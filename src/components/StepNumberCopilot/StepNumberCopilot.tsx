import { useCopilot } from "react-native-copilot";

import { Box, BoxProps } from "../Box/Box";
import { Text } from "../Text/Text";

export const StepNumberCopilot = () => {
  const { currentStepNumber } = useCopilot();

  return (
    <Box {...$boxWrapper}>
      <Text color={"neutralLighest"} preset="notes">
        {currentStepNumber}
      </Text>
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  width: 20,
  height: 20,
  alignItems: "center",
  borderColor: "neutralLighest",
  borderWidth: 2,
  borderRadius: "full",
  justifyContent: "center",
  backgroundColor: "primary",
};
