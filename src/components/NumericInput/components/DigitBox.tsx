import { Box, BoxProps } from "src/components/Box/Box";
import { Text } from "src/components/Text/Text";

export const DigitBox = ({ value }: { value: string }) => (
  <Box {...$box}>
    <Text weight="medium" preset="titleSmall" color="backgroundConstrast">
      {value}
    </Text>
  </Box>
);

const $box: BoxProps = {
  width: 40,
  height: 60,
  borderRadius: "s12",
  borderWidth: 1.5,
  alignItems: "center",
  justifyContent: "center",
  borderColor: "backgroundConstrast",
};
