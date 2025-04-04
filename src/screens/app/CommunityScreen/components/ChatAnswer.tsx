import { Box, BoxProps, Icon, Text } from "@components";

import { useChat } from "@services";

export const ChatAnswer = () => {
  const { repliedMessage, setRepliedMessage } = useChat();

  return (
    <Box {...$wrapper}>
      <Box flexDirection={"row"} flex={1} columnGap={"s8"}>
        <Box
          width={5}
          height={"100%"}
          position={"absolute"}
          backgroundColor={"primary"}
        />
        <Box paddingLeft={"s14"}>
          <Text color={"backgroundConstrast"} weight="bold">
            {repliedMessage?.author?.name}
          </Text>
          <Text preset="paragraphsBig" color={"backgroundConstrast"}>
            {repliedMessage?.text}
          </Text>
        </Box>
      </Box>
      <Icon
        name="xCircle"
        size="s24"
        color="backgroundConstrast"
        strokeWidth={2}
        onPress={() => setRepliedMessage(null)}
      />
    </Box>
  );
};

const $wrapper: BoxProps = {
  width: "100%",
  alignItems: "center",
  paddingRight: "s24",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "background",
};
