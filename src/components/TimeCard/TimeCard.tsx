import { Box, BoxProps } from "../Box/Box";
import { Text } from "../Text/Text";

import { TimeItem } from "./components";

interface TimeCardProps {
  time: string;
  label: string;
  boxProps?: BoxProps;
  thirdNumberInDays: boolean;
}

export const TimeCard = ({
  time,
  label,
  boxProps,
  thirdNumberInDays,
}: TimeCardProps) => {
  const paddedTime = time.padStart(2, "0");
  const [firstNumber, secondNumber, thirdNumber] = paddedTime;

  return (
    <Box rowGap="s8" alignItems="center" {...boxProps}>
      <Box flexDirection="row" columnGap="s4" alignItems="center">
        <TimeItem hasThreeNumber={thirdNumberInDays} time={firstNumber} />
        <TimeItem hasThreeNumber={thirdNumberInDays} time={secondNumber} />
        {thirdNumber && (
          <TimeItem hasThreeNumber={thirdNumberInDays} time={thirdNumber} />
        )}
      </Box>
      <Text preset="paragraphsBig" weight="medium" color="buttonConstrast">
        {label}
      </Text>
    </Box>
  );
};
