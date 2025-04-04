import { Box, BoxProps, Text } from "@components";

interface ChatRepliedMessageProps {
  text: string;
  isMine: boolean;
  authorName: string;
}

export const ChatRepliedMessage = ({
  isMine,
  authorName,
  text,
}: ChatRepliedMessageProps) => {
  return (
    <Box paddingHorizontal={"s8"} paddingTop={"s6"}>
      <Box
        {...$repliedMessageBox}
        backgroundColor={isMine ? "mutedSlate" : "chatMessageShadow"}
      >
        <Box
          backgroundColor={isMine ? "neutralLighest" : "primary"}
          width={6}
          height={"100%"}
        />
        <Box paddingVertical={"s6"} paddingRight={"s6"}>
          <Text
            color={"neutralLighest"}
            preset="paragraphsBig"
            weight="semiBold"
          >
            {authorName}
          </Text>
          <Text color={"neutralLighest"} preset="paragraphs">
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const $repliedMessageBox: BoxProps = {
  width: "100%",
  overflow: "hidden",
  columnGap: "s8",
  alignItems: "center",
  paddingRight: "s12",
  borderRadius: "s8",
  flexDirection: "row",
};
