import { useState } from "react";

import { usePostHog } from "posthog-react-native";

import { Box, Button, TextInput } from "@components";

import { PostHogEventsName } from "@constraints";
import { useAuth } from "@services";

import { AddNewMessageParams } from "./ChatBody/useChatBody";

type ChatInputProps = {
  disabled: boolean;
  onSubmit: (params: AddNewMessageParams) => void;
};

export const ChatInput = ({ onSubmit, disabled }: ChatInputProps) => {
  const { session } = useAuth();
  const [text, setText] = useState("");

  const posthog = usePostHog();

  return (
    <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
      <Box flex={1}>
        <TextInput
          value={text}
          editable={!disabled}
          placeholder="Digite a mensagem"
          onChangeText={(text) => setText(text)}
        />
      </Box>
      <Button
        iconName="send"
        width={54}
        height={54}
        disabled={text === "" || disabled}
        onPress={() => {
          posthog.capture(PostHogEventsName.PRESS_TO_SEND_MESSAGE_ON_CHAT);
          onSubmit({ text, authorId: session?.user?.id });
          setText("");
        }}
      />
    </Box>
  );
};
