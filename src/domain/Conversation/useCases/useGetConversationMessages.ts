import { useEffect } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import { useGroupedMessagesByDate } from "@hooks";

import { QueryKeys } from "@infra";
import { useChat } from "@services";

import { conversationsService } from "../conversationsService";
import { ConversationMessage } from "../conversationsTypes";

const LIMIT = 10;

export const useGetConversationMessages = ({ userId }: { userId?: string }) => {
  const { setGroupedAndSortedMessages } = useChat();

  const { groupMessagesByDate, groupAndSortMessages } =
    useGroupedMessagesByDate();

  const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
    useInfiniteQuery<ConversationMessage, Error>({
      queryKey: [QueryKeys.GetConversationMessages, userId],
      queryFn: ({ pageParam = 0 }) => {
        return conversationsService.getConversationMessages({
          offset: pageParam as number,
          limit: LIMIT,
          userId,
          conversationType: "GLOBAL",
        });
      },
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.messages.length < 5) return undefined;
        return allPages.length + 1;
      },

      initialPageParam: 0,
      staleTime: 0,
    });

  const loadNextPage = () => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    if (data) {
      const newConversationMessages = data.pages.reduce<ConversationMessage>(
        (prev, curr) => ({
          conversationId: curr.conversationId ?? prev.conversationId,
          messages: [...prev.messages, ...curr.messages],
        }),
        { conversationId: null, messages: [] }
      );
      const groupedMessages = groupMessagesByDate(
        newConversationMessages.messages
      );
      const groupedAndSortedMessages = groupAndSortMessages(groupedMessages);
      setGroupedAndSortedMessages(groupedAndSortedMessages);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return {
    isLoading,
    hasNextPage,
    fetchNextPage: loadNextPage,
    isFetchingNextPage,
  };
};
