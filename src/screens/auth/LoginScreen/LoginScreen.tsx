import { Box, Screen, SocialButtons, Text } from "@components";

export const LoginScreen = () => {
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
        <Text preset="titleBig" weight="bold" color={"primary"}>
          Olá!
        </Text>
        <Text
          textAlign={"center"}
          preset="paragraphsLarge"
          color={"backgroundSecondConstrast"}
        >
          Que bom tê-lo de volta. Estamos com você nessa jornada para superar o
          vício em cigarro!
        </Text>
      </Box>
      <SocialButtons />
    </Screen>
  );
};
