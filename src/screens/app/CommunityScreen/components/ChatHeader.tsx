import { Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from "@components";

import { useAuth } from "@services";

export const ChatHeader = () => {
  const navigation = useNavigation();
  const { session } = useAuth();

  return (
    <Box backgroundColor={"primary"} {...$shadow}>
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
          {/* <Icon
            size="s22"
            strokeWidth={2}
            name="users"
            color="neutralLighest"
            onPress={() => navigation.navigate("FriendsScreen")}
          /> */}
          <ProfileButton photo={session?.user?.user_metadata?.avatar_url} />
        </Box>
      </Box>
    </Box>
  );
};

const ProfileButton = ({ photo }: { photo?: string }) => {
  const navigation = useNavigation();

  const { session } = useAuth();

  return (
    <TouchableOpacityBox
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigation.navigate("ProfileScreen", {
          userId: session?.user?.id ?? "",
        });
      }}
      {...$profileButtonBox}
    >
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
        <Icon size="s18" strokeWidth={2} name="user" color="neutralDarkest" />
      )}
    </TouchableOpacityBox>
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

const $profileButtonBox: BoxProps = {
  backgroundColor: "lightSilver",
  width: 28,
  height: 28,
  alignItems: "center",
  borderRadius: "full",
  justifyContent: "center",
  overflow: "hidden",
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
