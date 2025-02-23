import { useRef } from "react";
import { Image, TouchableOpacity } from "react-native";

import { format } from "date-fns";

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from "@components";

import { useAuth, useChat } from "@services";
import { Message } from "src/domain/Conversation";

import { ChatRepliedMessage } from "./ChatRepliedMessage";

type ChatMessageProps = Message & { showAvatar?: boolean };

export const ChatMessage = ({
  id,
  text,
  author,
  createdAt,
  showAvatar = true,
  repliedMessage,
}: ChatMessageProps) => {
  const { session } = useAuth();

  const { setShowOptionsMessage } = useChat();

  const { setRepliedMessage, setSelectedMessagePosition, setMessageToOptions } =
    useChat();

  const isMine = author?.id === session?.user?.id;

  const messageRef = useRef<TouchableOpacity>(null);

  const handleLongPress = () => {
    if (messageRef.current) {
      messageRef.current.measureInWindow((x, y, width, height) => {
        setSelectedMessagePosition({
          top: y,
          left: isMine ? null : x,
          right: isMine ? x : null,
          width: width,
          height: height,
        });
        setMessageToOptions({ author, createdAt, id, text, repliedMessage });
        setShowOptionsMessage(true);
      });
    }
  };

  return (
    <TouchableOpacityBox
      ref={messageRef}
      justifyContent={isMine ? "flex-end" : "flex-start"}
      flexDirection={"row"}
      columnGap={"s12"}
      onLongPress={isMine ? handleLongPress : undefined}
      delayLongPress={500}
    >
      {!isMine && showAvatar && <UserAvatar />}
      <Box
        maxWidth="85%"
        minWidth={isMine ? undefined : "60%"}
        borderRadius="s8"
        backgroundColor={isMine ? "primary" : "chatMessageBackground"}
        shadowColor={isMine ? "buttonShadow" : "chatMessageShadow"}
        {...$shadow}
      >
        {repliedMessage && <ChatRepliedMessage isMine={isMine} />}
        <Box paddingVertical="s8" paddingHorizontal="s12">
          {!isMine && author?.name && (
            <Text
              marginBottom={"s12"}
              color={"chatMessageText"}
              weight="semiBold"
            >
              {author?.name}
            </Text>
          )}
          <Text color={isMine ? "neutralLighest" : "chatMessageText"}>
            {text}
          </Text>
          <Box alignItems="flex-end">
            {!isMine && (
              <TouchableOpacityBox
                hitSlop={10}
                onPress={() => setRepliedMessage({ author, id, text })}
              >
                <Text
                  weight="semiBold"
                  color={"backgroundConstrast"}
                  preset="paragraphsBig"
                >
                  Responder
                </Text>
              </TouchableOpacityBox>
            )}
            <Text
              preset="notes"
              weight="medium"
              color={isMine ? "neutralLighest" : "chatMessageText"}
            >
              {format(createdAt ?? new Date(), "HH:mm")}
            </Text>
          </Box>
        </Box>
      </Box>

      {isMine && showAvatar && <UserAvatar photo={author?.photo ?? ""} />}
    </TouchableOpacityBox>
  );
};

const UserAvatar = ({ photo }: { photo?: string }) => (
  <Box {...$userAvatarBox}>
    {photo ? (
      <Image
        source={{ uri: photo }}
        style={{
          width: "100%",
          height: undefined,
          aspectRatio: 1,
        }}
      />
    ) : (
      <Icon name="user" color="backgroundSecondConstrast" />
    )}
  </Box>
);

const $userAvatarBox: BoxProps = {
  width: 40,
  height: 40,
  overflow: "hidden",
  alignItems: "center",
  borderRadius: "full",
  justifyContent: "center",
  backgroundColor: "lightSilver",
};

const $shadow: BoxProps = {
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 5,
};
