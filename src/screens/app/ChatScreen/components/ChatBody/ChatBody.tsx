import { FlatList, ViewProps } from "react-native";

import { Box, Button } from "@components";

import { ChatGroupedMessages } from "../ChatGroupedMessages";
import { ChatInput } from "../ChatInput";
import { ChatSkeleton } from "../ChatSkeleton";
import { ChatWritingIndicator } from "../ChatWritingIndicator/ChatWritingIndicator";

import { useChatBody } from "./useChatBody";

type ChatBodyProps = ViewProps;

export const ChatBody = (props: ChatBodyProps) => {
  const {
    data,
    isFetching,
    showButton,
    flatListRef,
    isAddMessageToPrivateConversationPending,
    handleScroll,
    handleAddNewMessage,
    handleScrollToBottom,
  } = useChatBody();
  return (
    <Box
      flex={1}
      rowGap={"s24"}
      padding={"s24"}
      backgroundColor={"neutralLighest"}
      {...props}
    >
      <Box flex={1}>
        {!isFetching ? (
          <FlatList
            inverted
            ref={flatListRef}
            scrollEnabled={true}
            onScroll={handleScroll}
            data={Object.entries(data)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            contentContainerStyle={{
              rowGap: 24,
              flexGrow: 1,
            }}
            renderItem={({ item, index }) => {
              const [key, value] = item;
              return (
                <ChatGroupedMessages key={index} date={key} value={value} />
              );
            }}
            ListHeaderComponent={() =>
              isAddMessageToPrivateConversationPending ? (
                <Box marginBottom={"s6"}>
                  <ChatWritingIndicator />
                </Box>
              ) : null
            }
          />
        ) : (
          <ChatSkeleton />
        )}
        {showButton && (
          <Box position={"absolute"} right={0} bottom={0}>
            <Button
              width={45}
              height={45}
              iconName="chevronDown"
              onPress={handleScrollToBottom}
            />
          </Box>
        )}
      </Box>
      {!isFetching ? (
        <ChatInput
          disabled={isAddMessageToPrivateConversationPending}
          onSubmit={handleAddNewMessage}
        />
      ) : null}
    </Box>
  );
};
