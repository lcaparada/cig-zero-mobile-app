import { format } from "date-fns";

import { Box, BoxProps, Text } from "@components";

import { useAuth } from "@services";
import { Message } from "src/domain/Conversation";

type ChatMessageProps = Message;

export const ChatMessage = ({
  authorId,
  text,
  createdAt,
}: ChatMessageProps) => {
  const { session } = useAuth();
  const isMine = authorId === session?.user?.id;
  return (
    <Box alignItems={isMine ? "flex-end" : "flex-start"}>
      <Box
        rowGap={"s4"}
        maxWidth={"80%"}
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
            {format(createdAt, "hh:mm")}
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
