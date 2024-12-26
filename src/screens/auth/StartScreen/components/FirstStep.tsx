import { useWindowDimensions } from "react-native";

import { Box, Text } from "@components";

export const FirstStep = () => {
  const { height: HEIGHT_SCREEN } = useWindowDimensions();

  return (
    <Box
      paddingVertical={"s40"}
      height={HEIGHT_SCREEN}
      justifyContent={"center"}
    >
      <Box flexDirection={"row"} columnGap={"s35"} alignItems={"center"}>
        <Box flex={1} rowGap={"s18"}>
          <Text weight="medium" color="primary">
            Próximos passos
          </Text>
          <Text
            weight="bold"
            color={"backgroundConstrast"}
            preset="paragraphsXL"
          >
            Vamos te ajudar a reduzir ou parar de fumar de forma segura e
            motivadora.
          </Text>
          <Text color={"backgroundConstrast"} weight="medium" preset="default">
            Selecionamos as principais ferramentas do CigZero para apoiar seu
            progresso.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
