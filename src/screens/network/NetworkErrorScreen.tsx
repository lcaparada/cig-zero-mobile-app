import { Dimensions, Image } from "react-native";

import { Box, Screen, Text } from "@components";

export const NetworkErrorScreen = () => {
  const { width: SCREEN_WIDTH } = Dimensions.get("screen");
  const MARGIN_HORIZONTAL = 24;
  const ILLUSTRATION_SIZE = (SCREEN_WIDTH - MARGIN_HORIZONTAL * 2) / 1.2;

  return (
    <Screen centerItems>
      <Text
        mt={"s12"}
        weight="bold"
        preset="titleSmall"
        color={"primary"}
        textAlign={"center"}
      >
        CigZero
      </Text>
      <Box flex={1} justifyContent={"center"} alignItems={"center"}>
        <Image
          source={require("../../assets/illustrations/saving-plug-electric-power-light.png")}
          resizeMode="contain"
          style={{
            alignSelf: "center",
            width: ILLUSTRATION_SIZE,
            height: ILLUSTRATION_SIZE,
          }}
        />
        <Text
          mt="s20"
          weight="bold"
          color={"backgroundConstrast"}
          preset="titleBig"
          textAlign={"center"}
        >
          Sem Conexão com a Internet
        </Text>
        <Text
          mt={"s20"}
          textAlign={"center"}
          weight="medium"
          color={"backgroundSecondConstrast"}
          preset="paragraphsLarge"
        >
          Parece que você está offline. Verifique sua conexão com a internet e
          tente novamente.
        </Text>
      </Box>
    </Screen>
  );
};
