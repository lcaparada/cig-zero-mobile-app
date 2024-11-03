import { KeyboardAvoidingView, Platform } from "react-native";

import { Box } from "@components";
import { useAppSafeAreaContext } from "@hooks";

import { ChatHeader, ChatBody } from "./components";

export const ChatScreen = () => {
  const { top, bottom } = useAppSafeAreaContext();
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
    </Box>
  );
};
