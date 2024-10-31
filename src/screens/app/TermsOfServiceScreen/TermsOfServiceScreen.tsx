import { Box, Screen, Text } from "@components";

import { TermsItems } from "./components";
import { termsItems } from "./termsItems";

export const TermsOfServiceScreen = () => {
  return (
    <Screen canGoBack scrollable screenTitle={"Termos de serviços"}>
      <Box rowGap={"s18"}>
        <Text preset="paragraphs" weight="medium" color={"backgroundConstrast"}>
          Última atualização: 31/10/2024
        </Text>
        <Text weight="medium" color={"backgroundConstrast"}>
          Bem-vindo(a) ao CigZero, um aplicativo criado para apoiar e incentivar
          usuários em sua jornada para parar de fumar. Ao utilizar nosso
          aplicativo, você concorda com os seguintes Termos de Serviço. Se você
          não concorda com qualquer parte deste Termo, solicitamos que não
          utilize o aplicativo.
        </Text>
        {termsItems.map((term, index) => (
          <TermsItems {...term} key={index} />
        ))}
      </Box>
    </Screen>
  );
};
