import { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native";

import { useKeyboardStatus } from "@hooks";

import {
  Message,
  useAddMessageToPrivateConversation,
  useGetMessagesFromPrivateConversation,
} from "src/domain/Conversation";

export type AddNewMessageParams = {
  text: string;
  authorId?: string | null;
};

export const useChatBody = () => {
  const { isKeyboardOpen } = useKeyboardStatus();
  const scrollViewRef = useRef<ScrollView>(null);

  const {
    isAddMessageToPrivateConversationPending,
    handleAddMessageToPrivateConversation,
  } = useAddMessageToPrivateConversation();
  const { isLoading, conversation } = useGetMessagesFromPrivateConversation();

  const [groupedMessagesByDate, setGroupedMessagesByDate] = useState<
    Record<string, Message[]>
  >({});

  const groupMessagesByDate = (messages: Message[]) => {
    return messages.reduce<Record<string, Message[]>>((groups, message) => {
      const date = message.createdAt.split("T")[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(message);
      return groups;
    }, {});
  };

  const handleAddNewMessage = ({
    text,
    authorId = null,
  }: AddNewMessageParams) => {
    const payload: Message = {
      text,
      authorId,
      createdAt: new Date().toISOString(),
    };
    updateInUI(payload);
    handleAddMessageToPrivateConversation({
      text,
      conversationId: conversation?.conversationId ?? "",
    }).then(({ author_id, created_at, text }) => {
      updateInUI({
        text,
        authorId: author_id,
        createdAt: created_at,
      });
    });
  };

  const updateInUI = (payload: Message) => {
    const dateString = payload.createdAt.split("T")[0];
    setGroupedMessagesByDate((prevGroupedMessagesByDate) => {
      const updatedGroupedMessages = {
        ...prevGroupedMessagesByDate,
        [dateString]: [
          ...(prevGroupedMessagesByDate[dateString] || []),
          payload,
        ],
      };
      return updatedGroupedMessages;
    });
  };

  const handleScrollToBottom = () => {
    setTimeout(
      () => scrollViewRef?.current?.scrollToEnd({ animated: true }),
      50
    );
  };

  useEffect(() => {
    if (isKeyboardOpen) {
      handleScrollToBottom();
    }
  }, [isKeyboardOpen]);

  useEffect(() => {
    if (conversation) {
      setGroupedMessagesByDate(groupMessagesByDate(conversation.messages));
    }
  }, [conversation]);

  return {
    isLoading,
    scrollViewRef,
    data: groupedMessagesByDate,
    isAddMessageToPrivateConversationPending,
    handleAddNewMessage,
    handleScrollToBottom,
  };
};
