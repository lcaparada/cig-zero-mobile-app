import { Box, BoxProps } from "../Box/Box";
import { Text } from "../Text/Text";

import { TimeItem } from "./components";

interface TimeCardProps {
  time: string;
  label: string;
  boxProps?: BoxProps;
}

export const TimeCard = ({ time, label, boxProps }: TimeCardProps) => {
  return (
    <Box rowGap={"s8"} alignItems={"center"} {...boxProps}>
      <Box flexDirection={"row"} columnGap={"s4"} alignItems={"center"}>
        {Array.from({ length: 2 }).map((_, index) => (
          <TimeItem key={index} time={time} />
        ))}
      </Box>
      <Text preset="paragraphsBig" weight="medium" color={"neutralLighest"}>
        {label}
      </Text>
    </Box>
  );
};
