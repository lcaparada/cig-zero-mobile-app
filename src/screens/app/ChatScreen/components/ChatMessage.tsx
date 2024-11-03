import { format } from "date-fns";

import { Box, BoxProps, Text } from "@components";

type ChatMessageProps = {
  text: string;
  sentAt: Date;
  isMine: boolean;
};

export const ChatMessage = ({ isMine, text, sentAt }: ChatMessageProps) => {
  return (
    <Box alignItems={isMine ? "flex-end" : "flex-start"}>
      <Box
        rowGap={"s4"}
        borderRadius={"s8"}
        paddingVertical={"s8"}
        paddingHorizontal={"s12"}
        backgroundColor={isMine ? "primary" : "lightSilver"}
        shadowColor={isMine ? "buttonShadow" : "mediumSilver"}
        {...$shadow}
      >
        <Box>
          <Text color={isMine ? "neutralLighest" : "neutralDarkest"}>
            {text}
          </Text>
        </Box>
        <Box alignItems={"flex-end"}>
          <Text
            preset="notes"
            weight="medium"
            color={isMine ? "neutralLighest" : "neutralDarkest"}
          >
            {format(sentAt, "hh:mm")}
          </Text>
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
