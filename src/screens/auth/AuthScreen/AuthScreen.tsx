import { Box, Screen, SocialButtons, Text } from "@components";

export const AuthScreen = () => {
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
        <Text preset="titleBig" weight="semiBold" color={"primary"}>
          Olá!
        </Text>
        <Text
          textAlign={"center"}
          preset="paragraphsLarge"
          weight="medium"
          color={"backgroundSecondConstrast"}
        >
          Precisamos de uma conta para salvar seus dados e garantir a melhor
          experiência no app. Caso já tenha uma conta, continue com um dos
          provedores abaixo. 🚀
        </Text>
      </Box>
      <SocialButtons boxProps={{ mt: "s20" }} />
    </Screen>
  );
};
