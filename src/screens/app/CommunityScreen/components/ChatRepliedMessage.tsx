import { Box, BoxProps, Text } from "@components";

interface ChatRepliedMessageProps {
  isMine: boolean;
}

export const ChatRepliedMessage = ({ isMine }: ChatRepliedMessageProps) => {
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
          <Text color={"backgroundConstrast"} weight="semiBold">
            Lucas
          </Text>
          <Text color={"backgroundConstrast"} preset="paragraphsBig">
            OI,tudo bem ?
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
