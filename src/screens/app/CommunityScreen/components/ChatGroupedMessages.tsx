import React from "react";

import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

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
  const timeZone = "America/Sao_Paulo";
  const localDate = toZonedTime(date, timeZone);

  return (
    <Box rowGap={"s24"}>
      <Box alignItems={"center"}>
        <Text color="grayishSilver" weight="medium" preset="paragraphsBig">
          {format(localDate ?? new Date(), "dd 'de' MMMM 'de' yyyy")}
        </Text>
      </Box>
      {value.map((item, index) => (
        <ChatMessage key={index} {...item} />
      ))}
    </Box>
  );
};
