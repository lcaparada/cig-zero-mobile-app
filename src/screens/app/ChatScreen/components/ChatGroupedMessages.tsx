import { format } from "date-fns";

import { Box, Text } from "@components";

import { Message } from "src/domain/Conversation";

import { ChatMessage } from "./ChatMessage";

type ChatGroupedMessagesProps = {
  data: {
    [date: string]: Message[];
  };
};

export const ChatGroupedMessages = ({ data }: ChatGroupedMessagesProps) =>
  Object.keys(data).map((key, index) => {
    return (
      <Box rowGap={"s24"} key={index}>
        <Box alignItems={"center"}>
          <Text color="grayishSilver" weight="medium" preset="paragraphsBig">
            {format(key, "dd MMM yy")}
          </Text>
        </Box>
        {data[key].map((item, index) => (
          <ChatMessage key={index} {...item} />
        ))}
      </Box>
    );
  });
