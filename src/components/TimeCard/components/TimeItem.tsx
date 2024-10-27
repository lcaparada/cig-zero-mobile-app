import { Box, BoxProps } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

interface TimeItemProps {
  time: string;
}

export const TimeItem = ({ time }: TimeItemProps) => {
  return (
    <Box>
      <Box {...$boxWrapper} {...$boxShadow}>
        <Text
          preset="displayXL"
          weight="semiBold"
          color={"backgroundConstrast"}
        >
          {time}
        </Text>
      </Box>
      <Box position={"absolute"} bottom={-3}>
        <Icon name="rings" />
      </Box>
    </Box>
  );
};

const $boxWrapper: BoxProps = {
  width: 46,
  height: 65,
  borderRadius: "s16",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "neutralLighest",
};

const $boxShadow: BoxProps = {
  shadowColor: "lightNeutralGray",
  shadowOffset: {
    width: 0,
    height: 2.5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 5,
};
