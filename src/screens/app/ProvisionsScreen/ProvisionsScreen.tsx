import { Box, Screen } from "@components";

import { calculateAverage } from "@helpers";
import { useAuth, UserMetadata } from "@services";

import { Card } from "./components";
import { AppScreenProps } from "@routes";

export const MINUTES_PER_CIGARETTE = 11;

export const ProvisionsScreen = ({
  route,
}: AppScreenProps<"ProvisionsScreen">) => {
  const { session } = useAuth();

  const userMetadata = session?.user?.user_metadata as UserMetadata;

  const cigarettesPerDays = calculateAverage(
    userMetadata.howManyCigarettesPerDay
  );

  const priceOfCigarrete = Number(userMetadata?.pricePackCigarrete) / 20;

  return (
    <Screen canGoBack scrollable screenTitle="Progresso Geral">
      <Box rowGap={"s16"}>
        <Card
          iconName="avoidCigarette"
          title="Cigarros evitados"
          total={route.params.totalCigarettesAvoided}
          value={cigarettesPerDays}
        />
        <Card
          iconName="money"
          title="Dinheiro economizado"
          isMoney
          total={route.params.totalMoneySaved}
          value={cigarettesPerDays * priceOfCigarrete}
        />
        <Card
          iconName="clock2"
          title="Tempo recuperado"
          total={route.params.totalTimeSaved}
          isMinutes
          value={cigarettesPerDays * MINUTES_PER_CIGARETTE}
        />
      </Box>
    </Screen>
  );
};
