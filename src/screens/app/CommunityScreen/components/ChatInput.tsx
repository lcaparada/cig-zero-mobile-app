import { Fragment, useEffect, useState } from "react";

import { format } from "date-fns";
import { usePostHog } from "posthog-react-native";

import { Box, Button, TextInput } from "@components";
import { useFirstTime } from "@hooks";

import { PostHogEventsName } from "@constraints";
import { useGetUserLastSmoke } from "@domain";
import { useAuth, useChat } from "@services";

import { ChatAnswer } from "./ChatAnswer";

type ChatInputProps = {
  onSubmit: (text: string) => void;
};

export const ChatInput = ({ onSubmit }: ChatInputProps) => {
  const { session } = useAuth();

  const [text, setText] = useState("");
  const { repliedMessage } = useChat();

  const { smokingRecord } = useGetUserLastSmoke(session?.user.id ?? "");

  const posthog = usePostHog();

  const { isFirstTime } = useFirstTime({ key: "first_time_in_community" });

  useEffect(() => {
    if (isFirstTime) {
      setText(
        `Olá, pessoal, tudo bem ? estou na luta contra o fumo e já estou sem fumar desde ${format(
          smokingRecord ?? new Date(),
          "d 'de' MMMM 'de' yyyy 'às' HH:mm"
        )}`
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFirstTime]);

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
            multiline
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
