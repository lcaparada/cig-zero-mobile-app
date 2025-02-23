import { useCallback, useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";
import { useQueryClient } from "@tanstack/react-query";
import * as Crypto from "expo-crypto";

import {
  usePublishMessage,
  useGetConversationMessages,
  Message,
} from "@domain";
import { QueryKeys } from "@infra";
import { useAuth, useChat, useToastService } from "@services";

export const useChatBody = () => {
  const flatListRef = useRef<FlatList>(null);
  const { session } = useAuth();
  const {
    repliedMessage,
    setRepliedMessage,
    groupedAndSortedMessages,
    setGroupedAndSortedMessages,
  } = useChat();
  const { showToast } = useToastService();

  const { fetchNextPage, isLoading } = useGetConversationMessages({
    userId: undefined,
  });
  const { handlePublishMessage } = usePublishMessage();

  const queryClient = useQueryClient();

  const [showButton, setShowButton] = useState(false);

  const handleAddNewMessage = (text: string) => {
    const userMetadata = session?.user?.user_metadata;
    try {
      handlePublishMessage({
        id: Crypto.randomUUID(),
        text,
        repliedConversationMessageId: repliedMessage?.id,
        targetUserId: repliedMessage?.author?.id,
      });
      updateInUI({
        id: Crypto.randomUUID(),
        text,
        author: {
          id: session?.user.id ?? "",
          name: userMetadata?.name ?? "",
          photo: userMetadata?.avatar_url ?? "",
        },
        repliedMessage: null,
        createdAt: new Date().toISOString(),
      });
      setRepliedMessage(null);
      handleScrollToBottom();
    } catch (error: any) {
      showToast({ message: error.message, type: "error", duration: 5000 });
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setShowButton(scrollY >= 100);
  };

  const updateInUI = (payload: Message) => {
    const dateString = payload.createdAt.split("T")[0];

    setGroupedAndSortedMessages({
      ...groupedAndSortedMessages,
      [dateString]: [...groupedAndSortedMessages[dateString], payload],
    });
  };

  const handleScrollToBottom = () => {
    setTimeout(
      () => flatListRef?.current?.scrollToOffset({ offset: 0, animated: true }),
      50
    );
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        queryClient.refetchQueries({
          queryKey: [QueryKeys.GetConversationMessages],
        });
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  );

  return {
    isLoading,
    showButton,
    flatListRef,
    handleScroll,
    fetchNextPage,
    handleAddNewMessage,
    handleScrollToBottom,
    data: groupedAndSortedMessages,
  };
};
