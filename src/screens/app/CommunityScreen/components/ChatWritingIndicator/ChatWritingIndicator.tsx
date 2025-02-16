import { AnimatedBoxRNR, Box, BoxProps } from "@components";

import { useChatWritingIndicator } from "./useChatWritingIndicator";

export const ChatWritingIndicator = () => {
  const { animatedStyle } = useChatWritingIndicator();
  return (
    <Box alignItems={"flex-start"}>
      <Box
        height={30}
        rowGap={"s4"}
        borderRadius={"s8"}
        paddingVertical={"s8"}
        paddingHorizontal={"s12"}
        justifyContent={"center"}
        backgroundColor={"lightSilver"}
        shadowColor={"mediumSilver"}
        {...$shadow}
      >
        <Box flexDirection={"row"} columnGap={"s4"}>
          {Array.from({ length: 3 }).map((_, index) => (
            <AnimatedBoxRNR
              key={index}
              width={5}
              height={5}
              backgroundColor={"neutralMedium"}
              borderRadius={"s48"}
              style={animatedStyle}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const $shadow: BoxProps = {
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 5,
};
