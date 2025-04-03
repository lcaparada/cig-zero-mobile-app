import { ThemeColors } from "@theme";

import { Box } from "../Box/Box";
import { Text } from "../Text/Text";

interface TimeInformationProps {
  value: number;
  label: string;
  color?: ThemeColors;
}

export const TimeInformation = ({
  label,
  value,
  color,
}: TimeInformationProps) => {
  return (
    <Box alignItems={"center"}>
      <Text weight="bold" color={color ?? "primary"} preset="titleBig">
        {value}
      </Text>
      <Text weight="medium" color={color ?? "primary"} preset="paragraphsBig">
        {label}
      </Text>
    </Box>
  );
};
