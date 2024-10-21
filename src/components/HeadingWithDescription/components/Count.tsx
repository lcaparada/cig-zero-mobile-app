import { Box } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

import { formatNumber } from "../utils/formatNumber";

interface CountProps {
  current?: number;
  target?: number;
}

export const Count = ({ current, target }: CountProps) => {
  return (
    <Box
      backgroundColor={"primary"}
      borderRadius={"s16"}
      paddingVertical={"s4"}
      paddingHorizontal={"s8"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text preset="notes" color={"neutralLighest"} weight="semiBold">
        {formatNumber(current ?? 0)}/{formatNumber(target ?? 0)}
      </Text>
    </Box>
  );
};
