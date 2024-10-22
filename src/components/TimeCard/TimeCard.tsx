import { Box, BoxProps } from "../Box/Box";
import { Text } from "../Text/Text";

import { TimeItem } from "./components";

interface TimeCardProps {
  time: string;
  label: string;
  boxProps?: BoxProps;
}

export const TimeCard = ({ time, label, boxProps }: TimeCardProps) => {
  const paddedTime = time.padStart(2, "0");
  const [firstNumber, secondNumber] = paddedTime;
  return (
    <Box rowGap="s8" alignItems="center" {...boxProps}>
      <Box flexDirection="row" columnGap="s4" alignItems="center">
        <TimeItem time={firstNumber} />
        <TimeItem time={secondNumber} />
      </Box>
      <Text preset="paragraphsBig" weight="medium" color="neutralLighest">
        {label}
      </Text>
    </Box>
  );
};
