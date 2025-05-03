import { useNavigation } from "@react-navigation/native";

import * as Haptics from "expo-haptics";

import { Box, Text, Icon, BoxProps, Avatar } from "@components";
import { shadow } from "@theme";
import { useAuth, UserMetadata } from "@services";

export const ChatHeader = () => {
  const navigation = useNavigation();

  const { session } = useAuth();

  const userMetadata = session?.user.user_metadata as UserMetadata;

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
          <Avatar
            size={28}
            textSize="paragraphsBig"
            bgColor="neutralLighest"
            textColor="primary"
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              navigation.navigate("ProfileScreen", {
                userId: session?.user?.id ?? "",
              });
            }}
            name={userMetadata.name}
            photo={userMetadata.avatar_url}
          />
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
