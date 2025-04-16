import { Box, Icon, Text } from "@components";

export const ChatEmpty = () => (
  <Box flex={1} alignItems={"center"} rowGap={"s8"} justifyContent={"center"}>
    <Text color={"backgroundConstrast"} textAlign={"center"}>
      Parece que não há nenhuma mensagem no momento.
    </Text>
    <Icon name="chat" size="s48" />
  </Box>
);
