import { FlatList, ListRenderItemInfo, ViewProps } from "react-native";

import { usePostHog } from "posthog-react-native";

import { ActivityIndicator, Box, Button, Icon, Text } from "@components";

import { PostHogEventsName } from "@constraints";
import { Message } from "@domain";

import { ChatGroupedMessages } from "../ChatGroupedMessages";
import { ChatInput } from "../ChatInput";
import { ChatSkeleton } from "../ChatSkeleton";

import { useChatBody } from "./useChatBody";
import { ChatEmpty } from "../ChatEmpty";

type ChatBodyProps = ViewProps;
type GroupedMessagesItem = [string, Message[]];

export const ChatBody = (props: ChatBodyProps) => {
  const {
    data,
    isLoading,
    showButton,
    flatListRef,
    handleScroll,
    fetchNextPage,
    isFetchingNextPage,
    handleAddNewMessage,
    handleScrollToBottom,
  } = useChatBody();

  const posthog = usePostHog();

  return (
    <Box flex={1} backgroundColor={"background"} {...props}>
      <Box
        flex={1}
        paddingHorizontal={"s24"}
        rowGap={"s24"}
        backgroundColor={"background"}
      >
        {isLoading ? (
          <ChatSkeleton />
        ) : (
          <FlatList
            inverted
            ref={flatListRef}
            scrollEnabled={true}
            onScroll={handleScroll}
            data={Object.entries(data)}
            ListEmptyComponent={ChatEmpty}
            onEndReached={() => {
              fetchNextPage();
            }}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
            initialNumToRender={10}
            ListFooterComponent={
              isFetchingNextPage ? <ActivityIndicator /> : null
            }
            keyExtractor={([key], index) => `${key}-${index}`}
            contentContainerStyle={{
              rowGap: 24,
              paddingBottom: 40,
              paddingTop: 40,
            }}
            renderItem={({
              item,
              index,
            }: ListRenderItemInfo<GroupedMessagesItem>) => {
              const [date, messages] = item;
              return (
                <ChatGroupedMessages key={index} date={date} value={messages} />
              );
            }}
          />
        )}

        {showButton && (
          <Box position={"absolute"} right={24} bottom={24}>
            <Button
              width={45}
              height={45}
              iconName="chevronDown"
              onPress={() => {
                posthog.capture(
                  PostHogEventsName.PRESS_TO_SCROLL_TO_BOTTOM_ON_CHAT
                );
                handleScrollToBottom();
              }}
            />
          </Box>
        )}
      </Box>
      {!isLoading ? <ChatInput onSubmit={handleAddNewMessage} /> : null}
    </Box>
  );
};
