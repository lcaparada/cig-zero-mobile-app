import { useNavigation } from "@react-navigation/native";
import { CopilotStep, walkthroughable } from "react-native-copilot";

import { Box, BoxProps, Icon, Text, TouchableOpacityBox } from "@components";
import { shadow } from "@theme";

const WalkthroughableBox = walkthroughable(Box);

export const Community = () => {
  const navigation = useNavigation();

  return (
    <CopilotStep
      text="Esta seção é a comunidade – um espaço para compartilhar experiências, trocar aprendizados e se apoiar na jornada para parar de fumar."
      order={4}
      name="community"
    >
      <WalkthroughableBox paddingHorizontal={"s25"} paddingVertical={"s30"}>
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
      </WalkthroughableBox>
    </CopilotStep>
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
