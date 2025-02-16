import { Box, Text } from "@components";

import { Message } from "src/domain/Conversation";

import { ChatMessage } from "./ChatMessage";

type ChatGroupedMessagesProps = {
  date: string;
  value: Message[];
};

export const ChatGroupedMessages = ({
  date,
  value,
}: ChatGroupedMessagesProps) => {
  return (
    <Box rowGap={"s24"}>
      <Box alignItems={"center"}>
        <Text color="grayishSilver" weight="medium" preset="paragraphsBig">
          {date}
        </Text>
      </Box>
      {value.map((item, index) => (
        <ChatMessage key={index} {...item} />
      ))}
    </Box>
  );
};
