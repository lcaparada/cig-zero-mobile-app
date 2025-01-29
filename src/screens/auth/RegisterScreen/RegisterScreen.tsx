import { Box, Screen, SocialButtons, Text } from "@components";

export const RegisterScreen = () => {
  return (
    <Screen
      centerItems
      canGoBack
      screenTitle="CigZero"
      titleWeight="bold"
      titleColor="primary"
      titleSize="titleBig"
    >
      <Box alignItems={"center"} rowGap={"s20"}>
        <Text preset="titleBig" weight="bold">
          Espere um pouquinho...
        </Text>
        <Text
          preset="paragraphsLarge"
          textAlign={"center"}
          color={"backgroundSecondConstrast"}
        >
          Antes de tudo, precisamos que crie uma conta para que possamos salvar
          tudo direitinho e garantir seus dados!
        </Text>
      </Box>

      <SocialButtons
        copyForApple="Criar conta com Apple"
        copyForGoogle="Criar conta com Google"
      />
    </Screen>
  );
};
