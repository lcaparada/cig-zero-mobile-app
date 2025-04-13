import { useEffect } from "react";
import { KeyboardAvoidingView } from "react-native";

import { Box } from "@components";
import { useAppSafeAreaContext } from "@hooks";

import { useUpdateLastTimeOpenedChat } from "@domain";
import { useChat } from "@services";

import { ChatHeader, ChatBody, MessageOptions } from "./components";

export const CommunityScreen = () => {
  const { top, bottom } = useAppSafeAreaContext();

  const { showOptionsMessage } = useChat();

  const { handleUpdateLastTimeOpenedChat } = useUpdateLastTimeOpenedChat();

  function updateLastTimeOpenedChat() {
    try {
      handleUpdateLastTimeOpenedChat({});
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    updateLastTimeOpenedChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      flex={1}
      rowGap={"s4"}
      backgroundColor={"primary"}
      style={{ paddingTop: top }}
    >
      <ChatHeader />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={"padding"}>
        <ChatBody style={{ paddingBottom: bottom }} />
      </KeyboardAvoidingView>
      {showOptionsMessage && <MessageOptions />}
    </Box>
  );
};
