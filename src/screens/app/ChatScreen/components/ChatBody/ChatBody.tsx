import { ScrollView, ViewProps } from "react-native";

import { Box } from "@components";

import { ChatGroupedMessages } from "../ChatGroupedMessages";
import { ChatInput } from "../ChatInput";
import { ChatSkeleton } from "../ChatSkeleton";
import { ChatWritingIndicator } from "../ChatWritingIndicator/ChatWritingIndicator";

import { useChatBody } from "./useChatBody";

type ChatBodyProps = ViewProps;

export const ChatBody = (props: ChatBodyProps) => {
  const {
    data,
    isLoading,
    scrollViewRef,
    isAddMessageToPrivateConversationPending,
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
        <ScrollView
          style={{ flex: 1 }}
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 5, rowGap: 24 }}
          onContentSizeChange={handleScrollToBottom}
        >
          {!isLoading ? (
            <>
              <ChatGroupedMessages data={data} />
              {isAddMessageToPrivateConversationPending && (
                <ChatWritingIndicator />
              )}
            </>
          ) : (
            <ChatSkeleton />
          )}
        </ScrollView>
      </Box>
      {!isLoading ? <ChatInput onSubmit={handleAddNewMessage} /> : null}
    </Box>
  );
};
