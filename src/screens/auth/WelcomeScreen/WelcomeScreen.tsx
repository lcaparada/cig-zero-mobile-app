import { useNavigation } from "@react-navigation/native";

import { Box, Button, Screen, Text } from "@components";

export const WelcomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <Screen
      centerItems
      screenTitle="CigZero"
      titleWeight="bold"
      titleColor="primary"
      titleSize="titleBig"
    >
      <Box alignItems={"center"} justifyContent={"center"} rowGap={"s20"}>
        <Text preset="titleBig" color={"backgroundConstrast"} weight="bold">
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
      <Box rowGap={"s16"} mt={"s40"}>
        <Button
          text="Entrar"
          preset="outline"
          onPress={() => navigate("LoginScreen")}
        />
        <Button text="Criar Conta" onPress={() => navigate("RegisterScreen")} />
      </Box>
    </Screen>
  );
};
