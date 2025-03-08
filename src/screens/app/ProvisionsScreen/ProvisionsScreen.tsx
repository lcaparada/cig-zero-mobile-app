import { Box, Screen } from "@components";

import { calculateAverage } from "@helpers";
import { useAuth } from "@services";

import { Card } from "./components";

export const AVERAGE_CIGARETTE_PRICE_IN_BRAZIL = 0.28;
export const MINUTES_PER_CIGARETTE = 11;

export const ProvisionsScreen = () => {
  const { session } = useAuth();

  const cigarettesPerDays = calculateAverage(
    session?.user?.user_metadata?.howManyCigarettesPerDay
  );

  return (
    <Screen canGoBack scrollable screenTitle="Progresso Geral">
      <Box rowGap={"s16"}>
        <Card title="Cigarros evitados" value={cigarettesPerDays} />
        <Card
          title="Dinheiro economizado"
          isMoney
          value={cigarettesPerDays * AVERAGE_CIGARETTE_PRICE_IN_BRAZIL}
        />
        <Card
          title="Tempo recuperado"
          isMinutes
          value={cigarettesPerDays * MINUTES_PER_CIGARETTE}
        />
      </Box>
    </Screen>
  );
};
