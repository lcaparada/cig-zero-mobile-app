import { useRef } from "react";
import { Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { differenceInMinutes, format } from "date-fns";

import { TouchableOpacity } from "react-native";
import * as Haptics from "expo-haptics";
import { usePostHog } from "posthog-react-native";

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from "@components";

import { PostHogEventsName } from "@constraints";
import { useAuth, useChat } from "@services";
import { Message, useGetRepliedMessage } from "src/domain/Conversation";

import { ChatRepliedMessage } from "./ChatRepliedMessage";

type ChatMessageProps = Message & { showAvatar?: boolean };

export const ChatMessage = ({
  id,
  text,
  author,
  wasEdited,
  createdAt,
  showAvatar = true,
  repliedConversationMessageId,
}: ChatMessageProps) => {
  const { session } = useAuth();

  const navigation = useNavigation();

  const posthog = usePostHog();

  const { setShowOptionsMessage } = useChat();

  const { setRepliedMessage, setSelectedMessagePosition, setMessageToOptions } =
    useChat();

  const isMine = author?.id === session?.user?.id;

  const messageRef = useRef<React.ElementRef<typeof TouchableOpacity>>(null);

  const { data: repliedMessage } = useGetRepliedMessage(
    repliedConversationMessageId ?? ""
  );

  const onLongPress = () => {
    posthog.capture(PostHogEventsName.PRESS_TO_OPEN_MESSAGE_OPTIONS);
    if (differenceInMinutes(new Date(), createdAt) < 10) {
      if (messageRef.current) {
        messageRef.current.measureInWindow((x, y, width, height) => {
          setSelectedMessagePosition({
            top: y,
            left: isMine ? null : x,
            right: isMine ? x : null,
            width: width,
            height: height,
          });
          setMessageToOptions({
            author,
            createdAt,
            id,
            text,
            repliedConversationMessageId,
            wasEdited: false,
          });
          setShowOptionsMessage(true);
        });
      }
    }
  };

  const navigateToProfile = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate("ProfileScreen", { userId: author?.id ?? "" });
  };

  return (
    <TouchableOpacityBox
      ref={messageRef}
      justifyContent={isMine ? "flex-end" : "flex-start"}
      flexDirection={"row"}
      columnGap={"s12"}
      onPress={navigateToProfile}
      onLongPress={isMine ? onLongPress : undefined}
      delayLongPress={500}
    >
      {!isMine && showAvatar && <UserAvatar photo={author?.photo ?? ""} />}
      <Box
        maxWidth="85%"
        minWidth={isMine ? undefined : "60%"}
        borderRadius="s8"
        backgroundColor={isMine ? "primary" : "chatMessageBackground"}
        shadowColor={isMine ? "buttonShadow" : "chatMessageShadow"}
        {...$shadow}
      >
        {!!repliedMessage && (
          <ChatRepliedMessage {...repliedMessage} isMine={isMine} />
        )}
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
          <Box
            flexDirection={"row"}
            alignItems={"flex-start"}
            justifyContent={wasEdited ? "space-between" : "flex-end"}
          >
            {wasEdited && (
              <Box mr={isMine ? "s20" : undefined}>
                <Text
                  preset="notes"
                  color={
                    isMine ? "neutralLighest" : "backgroundSecondConstrast"
                  }
                >
                  Editada
                </Text>
              </Box>
            )}

            <Box>
              {!isMine && (
                <TouchableOpacityBox
                  hitSlop={10}
                  onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    posthog.capture(
                      PostHogEventsName.PRESS_TO_RESPOND_A_MESSAGE
                    );
                    setRepliedMessage({ author, id, text });
                  }}
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
