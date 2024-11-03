import { ScrollView, ViewProps } from "react-native";

import { Box, Button, TextInput } from "@components";

import { ChatGroupedMessages } from "../ChatGroupedMessages";
import { ChatWritingIndicator } from "../ChatWritingIndicator/ChatWritingIndicator";

import { useChatBody } from "./useChatBody";

type ChatBodyProps = ViewProps;

export const ChatBody = (props: ChatBodyProps) => {
  const { data, scrollViewRef, handleScrollToBottom } = useChatBody();
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
          <ChatGroupedMessages data={data} />
          <ChatWritingIndicator />
        </ScrollView>
      </Box>
      <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
        <Box flex={1}>
          <TextInput placeholder="Digite a mensagem" />
        </Box>
        <Button iconName="send" width={54} height={54} />
      </Box>
    </Box>
  );
};
