import { useNavigation } from "@react-navigation/native";

import { Box, Button, Screen, Text } from "@components";

export const WelcomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <Screen centerItems>
      <Box alignItems={"center"} justifyContent={"center"} rowGap={"s20"}>
        <Text preset="titleBig" weight="bold">
          Bem-vindo ao CigZero!
        </Text>
        <Text
          preset="paragraphsLarge"
          textAlign={"center"}
          color={"backgroundSecondConstrast"}
        >
          Estamos aqui para ajudar você a parar de fumar com dicas, suporte da
          comunidade e acompanhamento do seu progresso. Vamos juntos nessa
          jornada!
        </Text>
      </Box>
      <Button
        onPress={() => navigate("OnboardingScreen")}
        mt={"s40"}
        text="Começar agora"
        preset="primary"
      />
    </Screen>
  );
};
