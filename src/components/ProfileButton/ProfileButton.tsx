import { Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import * as Haptics from "expo-haptics";

import { useGetProfile } from "@domain";
import { useAuth } from "@services";

import { BoxProps, TouchableOpacityBox } from "../Box/Box";
import { Icon } from "../Icon/Icon";

export const ProfileButton = () => {
  const navigation = useNavigation();

  const { session } = useAuth();

  const { profile } = useGetProfile(session?.user?.id ?? "");

  const photoUrl = profile?.photo ?? session?.user?.user_metadata?.avatar_url;

  return (
    <TouchableOpacityBox
      onPress={() => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigation.navigate("ProfileScreen", {
          userId: session?.user?.id ?? "",
        });
      }}
      hitSlop={10}
      {...$profileButtonBox}
    >
      {photoUrl ? (
        <Image
          source={{ uri: photoUrl }}
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

const $profileButtonBox: BoxProps = {
  backgroundColor: "lightSilver",
  width: 28,
  height: 28,
  alignItems: "center",
  borderRadius: "full",
  justifyContent: "center",
  overflow: "hidden",
};
