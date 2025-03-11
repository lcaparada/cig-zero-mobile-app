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
    <Box height={60} paddingHorizontal={"s8"} paddingTop={"s6"}>
      <Box
        {...$repliedMessageBox}
        backgroundColor={isMine ? "mutedSlate" : "chatMessageShadow"}
      >
        <Box
          backgroundColor={isMine ? "neutralLighest" : "primary"}
          width={6}
          height={"100%"}
        />
        <Box>
          <Text
            color={"backgroundConstrast"}
            preset="paragraphsBig"
            weight="semiBold"
          >
            {authorName}
          </Text>
          <Text color={"backgroundConstrast"} preset="paragraphs">
            {text}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const $repliedMessageBox: BoxProps = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  columnGap: "s8",
  alignItems: "center",
  paddingRight: "s12",
  borderRadius: "s8",
  flexDirection: "row",
};
