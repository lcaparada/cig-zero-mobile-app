import { useNavigation } from "@react-navigation/native";

import { Box, BoxProps, Icon, Text } from "@components";

export const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <Box backgroundColor={"primary"} {...$shadow}>
      <Box
        mt={"s12"}
        mb={"s24"}
        paddingLeft={"s24"}
        paddingRight={"s24"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box position={"absolute"} left={24}>
          <Icon
            size="s22"
            strokeWidth={2}
            name="arrowLeft"
            color="neutralLighest"
            onPress={() => navigation.goBack()}
          />
        </Box>
        <Text weight="semiBold" preset="titleSmall" color={"neutralLighest"}>
          Chat
        </Text>
      </Box>
    </Box>
  );
};

const $shadow: BoxProps = {
  shadowColor: "buttonShadow",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 5,
};
