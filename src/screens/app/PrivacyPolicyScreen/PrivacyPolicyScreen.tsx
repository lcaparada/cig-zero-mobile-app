import { Box, Screen, Text } from "@components";

import { PrivacyItems } from "./components";
import { privacyPolicyItems } from "./privacyPolicyItems";

export const PrivacyPolicyScreen = () => {
  return (
    <Screen canGoBack scrollable screenTitle={"Politica de privacidade"}>
      <Box rowGap={"s18"}>
        <Text preset="paragraphs" weight="medium" color={"backgroundConstrast"}>
          Última atualização: 31/10/2024
        </Text>
        <Text weight="medium" color={"backgroundConstrast"}>
          Bem-vindo ao CigZero! Esta Política de Privacidade explica como
          coletamos, usamos, armazenamos e protegemos suas informações pessoais
          ao utilizar nosso aplicativo, cujo objetivo é oferecer suporte e
          incentivo para que os usuários parem de fumar.
        </Text>
        {privacyPolicyItems.map((privacyTerm, index) => (
          <PrivacyItems {...privacyTerm} key={index} />
        ))}
      </Box>
    </Screen>
  );
};
