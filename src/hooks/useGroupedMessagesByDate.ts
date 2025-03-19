import { useState } from "react";

import { Message } from "@domain";

export const useGroupedMessagesByDate = () => {
  const [groupedMessagesByDate, setGroupedMessagesByDate] = useState<
    Record<string, Message[]>
  >({});

  const groupMessagesByDate = (
    messages: Message[]
  ): Record<string, Message[]> => {
    return messages.reduce<Record<string, Message[]>>((groups, message) => {
      const date = message.createdAt.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
      return groups;
    }, {});
  };

  const groupAndSortMessages = (
    groupedMessages: Record<string, Message[]>
  ): Record<string, Message[]> => {
    return Object.entries(groupedMessages)
      .sort(
        ([dateA], [dateB]) =>
          new Date(dateB).getTime() - new Date(dateA).getTime()
      )
      .reduce<Record<string, Message[]>>((acc, [date, messages]) => {
        acc[date] = messages.sort(
          (msgA, msgB) =>
            new Date(msgA.createdAt).getTime() -
            new Date(msgB.createdAt).getTime()
        );
        return acc;
      }, {});
  };

  return {
    groupedMessagesByDate,
    groupMessagesByDate,
    groupAndSortMessages,
    setGroupedMessagesByDate,
  };
};
