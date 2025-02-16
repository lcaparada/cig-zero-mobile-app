import { Image } from "react-native";

import { format } from "date-fns";

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from "@components";

import { useAuth } from "@services";
import { Message } from "src/domain/Conversation";

type ChatMessageProps = Message;

export const ChatMessage = ({
  authorId,
  text,
  createdAt,
}: ChatMessageProps) => {
  const { session } = useAuth();
  const isMine = authorId === session?.user?.id;

  return (
    <Box
      justifyContent={isMine ? "flex-end" : "flex-start"}
      flexDirection="row"
      columnGap="s12"
    >
      {!isMine && <UserAvatar />}
      <Box
        maxWidth="85%"
        borderRadius="s8"
        paddingVertical="s8"
        paddingHorizontal="s12"
        backgroundColor={isMine ? "primary" : "chatMessageBackground"}
        shadowColor={isMine ? "buttonShadow" : "chatMessageShadow"}
        {...$shadow}
      >
        <Text color={isMine ? "neutralLighest" : "chatMessageText"}>
          {text}
        </Text>
        <Box alignItems="flex-end">
          {!isMine && (
            <TouchableOpacityBox hitSlop={10}>
              <Text weight="semiBold" preset="paragraphsBig">
                Responder
              </Text>
            </TouchableOpacityBox>
          )}
          <Text
            preset="notes"
            weight="medium"
            color={isMine ? "neutralLighest" : "chatMessageText"}
          >
            {format(createdAt, "HH:mm")}
          </Text>
        </Box>
      </Box>

      {isMine && (
        <UserAvatar photo={session?.user?.user_metadata?.avatar_url} />
      )}
    </Box>
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
  borderRadius: "full",
  backgroundColor: "lightSilver",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
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
