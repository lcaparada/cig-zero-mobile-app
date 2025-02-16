import { useNavigation } from "@react-navigation/native";

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from "@components";
import { shadow } from "@theme";

export const Community = () => {
  const navigation = useNavigation();

  return (
    <Box paddingHorizontal={"s25"} paddingVertical={"s30"}>
      <TouchableOpacityBox
        {...$touchableBoxWrapper}
        {...shadow}
        onPress={() => navigation.navigate("CommunityScreen")}
      >
        <Icon name="globe" size="s32" color="buttonConstrast" />
        <Box flex={1}>
          <Text
            preset="paragraphsXL"
            weight="semiBold"
            color={"buttonConstrast"}
          >
            Comunidade
          </Text>
          <Text
            preset="paragraphsBig"
            weight="medium"
            textAlign={"left"}
            color={"buttonConstrast"}
          >
            Converse e se conecte com outras pessoas.
          </Text>
        </Box>
      </TouchableOpacityBox>
    </Box>
  );
};

const $touchableBoxWrapper: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  columnGap: "s8",
  paddingVertical: "s18",
  backgroundColor: "primary",
  paddingHorizontal: "s20",
  borderRadius: "s16",
};
