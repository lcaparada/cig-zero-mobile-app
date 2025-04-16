import { useNavigation } from "@react-navigation/native";

import { Box, Text, Icon, BoxProps, ProfileButton } from "@components";
import { shadow } from "@theme";

export const ChatHeader = () => {
  const navigation = useNavigation();

  return (
    <Box backgroundColor={"primary"} {...shadow}>
      <Box {...$boxWrapper}>
        <Box position={"absolute"} left={24}>
          <Icon
            size="s22"
            strokeWidth={2}
            name="arrowLeft"
            color="neutralLighest"
            onPress={navigation.goBack}
          />
        </Box>
        <Text weight="semiBold" preset="titleSmall" color={"neutralLighest"}>
          Comunidade
        </Text>
        <Box {...$iconBox}>
          <ProfileButton />
        </Box>
      </Box>
    </Box>
  );
};

const $iconBox: BoxProps = {
  right: 24,
  position: "absolute",
  columnGap: "s16",
  alignItems: "center",
  flexDirection: "row",
};

const $boxWrapper: BoxProps = {
  mt: "s12",
  mb: "s24",
  paddingLeft: "s24",
  paddingRight: "s24",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};
