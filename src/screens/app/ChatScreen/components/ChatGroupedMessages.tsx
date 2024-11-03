import { format } from "date-fns";

import { Box, Text } from "@components";

import { ChatMessage } from "./ChatMessage";

type Message = {
  text: string;
  isMine: boolean;
  sentAt: Date;
};

type Data = {
  [date: string]: Message[];
};

type ChatGroupedMessagesProps = {
  data: Data;
};

export const ChatGroupedMessages = ({ data }: ChatGroupedMessagesProps) =>
  Object.keys(data).map((key, index) => {
    return (
      <Box rowGap={"s24"} key={index}>
        <Box alignItems={"center"}>
          <Text color="grayishSilver">{format(key, "dd MMM yy")}</Text>
        </Box>
        {data[key].map((item, index) => (
          <ChatMessage key={index} {...item} />
        ))}
      </Box>
    );
  });
