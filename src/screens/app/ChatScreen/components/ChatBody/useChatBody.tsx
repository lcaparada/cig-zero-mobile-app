import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

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
  const flatListRef = useRef<FlatList>(null);

  const {
    isAddMessageToPrivateConversationPending,
    handleAddMessageToPrivateConversation,
  } = useAddMessageToPrivateConversation();
  const { isFetching, conversation } = useGetMessagesFromPrivateConversation();

  const [groupedMessagesByDate, setGroupedMessagesByDate] = useState<
    Record<string, Message[]>
  >({});

  const [showButton, setShowButton] = useState(false);

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
    handleScrollToBottom();
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

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setShowButton(scrollY >= 300);
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
      () => flatListRef?.current?.scrollToOffset({ offset: 0, animated: true }),
      50
    );
  };

  useEffect(() => {
    if (conversation) {
      const entriesArray = Object.entries(
        groupMessagesByDate(conversation.messages)
      );
      entriesArray.sort(
        (a, b) => new Date(b[0]).getTime() - new Date(a[0]).getTime()
      );
      setGroupedMessagesByDate(Object.fromEntries(entriesArray));
    }
  }, [conversation]);

  return {
    isFetching,
    showButton,
    flatListRef,
    data: groupedMessagesByDate,
    isAddMessageToPrivateConversationPending,
    handleScroll,
    handleAddNewMessage,
    handleScrollToBottom,
  };
};
