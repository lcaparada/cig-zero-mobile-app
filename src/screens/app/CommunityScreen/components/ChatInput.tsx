import { Fragment, useState } from "react";

import { usePostHog } from "posthog-react-native";

import { Box, Button, TextInput } from "@components";

import { PostHogEventsName } from "@constraints";
import { useChat } from "@services";

import { ChatAnswer } from "./ChatAnswer";

type ChatInputProps = {
  onSubmit: (text: string) => void;
};

export const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const [text, setText] = useState("");
  const { repliedMessage } = useChat();

  const posthog = usePostHog();

  return (
    <Fragment>
      {repliedMessage && <ChatAnswer />}
      <Box
        flexDirection={"row"}
        paddingHorizontal={"s24"}
        alignItems={"center"}
        columnGap={"s8"}
      >
        <Box flex={1}>
          <TextInput
            value={text}
            placeholder="Digite a mensagem"
            onChangeText={(text) => setText(text)}
          />
        </Box>
        <Button
          iconName="send"
          width={54}
          height={54}
          disabled={text === ""}
          onPress={() => {
            posthog.capture(PostHogEventsName.PRESS_TO_SEND_MESSAGE_ON_CHAT);
            onSubmit(text);
            setText("");
          }}
        />
      </Box>
    </Fragment>
  );
};
