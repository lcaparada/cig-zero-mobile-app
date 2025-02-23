import { KeyboardAvoidingView, Platform } from "react-native";

import { Box } from "@components";
import { useAppSafeAreaContext } from "@hooks";

import { useChat } from "@services";

import { ChatHeader, ChatBody, MessageOptions } from "./components";

export const CommunityScreen = () => {
  const { top, bottom } = useAppSafeAreaContext();

  const { showOptionsMessage } = useChat();

  return (
    <Box
      flex={1}
      rowGap={"s4"}
      backgroundColor={"primary"}
      style={{ paddingTop: top }}
    >
      <ChatHeader />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ChatBody style={{ paddingBottom: bottom }} />
      </KeyboardAvoidingView>
      {showOptionsMessage && <MessageOptions />}
    </Box>
  );
};
