import { Box, BoxProps } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

interface TimeItemProps {
  time: string;
  hasThreeNumber: boolean;
}

export const TimeItem = ({ time, hasThreeNumber }: TimeItemProps) => {
  return (
    <Box>
      <Box
        width={hasThreeNumber ? 40 : 46}
        height={hasThreeNumber ? 56 : 65}
        {...$boxWrapper}
        {...$boxShadow}
      >
        <Text
          preset={hasThreeNumber ? "displayExtra" : "displayXL"}
          weight="semiBold"
          color={"backgroundConstrast"}
        >
          {time}
        </Text>
      </Box>
      <Box
        position={"absolute"}
        top={hasThreeNumber ? -8.5 : -8}
        right={hasThreeNumber ? 4 : 6}
      >
        <Icon name={hasThreeNumber ? "rings" : "rings2"} color="background" />
      </Box>
    </Box>
  );
};

// -8

const $boxWrapper: BoxProps = {
  borderRadius: "s16",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "background",
};

const $boxShadow: BoxProps = {
  shadowColor: "timeCardShadow",
  shadowOffset: {
    width: 0,
    height: 2.5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 5,
};
