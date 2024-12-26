import { Platform, ViewStyle } from "react-native";

import { Review } from "@constraints";
import { Box, BoxProps } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

type ReviewItemProps = Review & BoxProps;

export const ReviewItem = ({ name, review, style }: ReviewItemProps) => {
  return (
    <Box
      rowGap={"s4"}
      padding={"s16"}
      borderRadius={"s16"}
      backgroundColor={"background"}
      style={Platform.OS === "android" ? [style] : [style, shadow]}
    >
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box flexDirection={"row"} columnGap={"s8"} alignItems={"center"}>
          <Text
            preset="default"
            weight="semiBold"
            color={"backgroundConstrast"}
          >
            {name}
          </Text>
        </Box>
        <Box flexDirection={"row"} alignItems={"center"} columnGap={"s4"}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Icon
              key={index}
              size="s14"
              name="star"
              fill="amber"
              color="amber"
              strokeWidth={2.5}
            />
          ))}
        </Box>
      </Box>
      <Text weight="medium" preset="default" color="backgroundSecondConstrast">
        {review}
      </Text>
    </Box>
  );
};

export const shadow: ViewStyle = {
  shadowColor: "dark",
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.15,
  shadowRadius: 4.65,

  elevation: 8,
};
