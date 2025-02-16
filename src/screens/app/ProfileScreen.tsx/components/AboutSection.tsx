import { Box, Icon, Text } from "@components";

export const AboutSection = () => {
  return (
    <Box marginTop={"s12"}>
      <Text
        textAlign={"center"}
        color={"backgroundSecondConstrast"}
        preset="paragraphsBig"
        weight="medium"
      >
        Ola, Sou de nova holanda e estou no app com o intuito de parar de fumar
      </Text>
      <Box
        flexDirection={"row"}
        columnGap={"s8"}
        alignItems={"center"}
        mt={"s12"}
        justifyContent={"center"}
      >
        <Icon color="backgroundSecondConstrast" name="mapPin" />
        <Text
          weight="medium"
          color={"backgroundSecondConstrast"}
          preset="paragraphsBig"
        >
          Rio de Janeiro
        </Text>
      </Box>
    </Box>
  );
};
