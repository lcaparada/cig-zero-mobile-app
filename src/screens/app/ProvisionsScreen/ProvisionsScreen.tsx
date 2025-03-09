import { Box, Icon, Screen } from "@components";

import { calculateAverage } from "@helpers";
import { useAuth, UserMetaData } from "@services";

import { Card } from "./components";

export const MINUTES_PER_CIGARETTE = 11;

export const ProvisionsScreen = () => {
  const { session } = useAuth();

  const userMetadata = session?.user?.user_metadata as UserMetaData;

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
          value={cigarettesPerDays}
        />
        <Card
          iconName="money"
          title="Dinheiro economizado"
          isMoney
          value={Number((cigarettesPerDays * priceOfCigarrete).toFixed(2))}
        />
        <Card
          iconName="clock2"
          title="Tempo recuperado"
          isMinutes
          value={cigarettesPerDays * MINUTES_PER_CIGARETTE}
        />
        <Box alignItems={"center"}>
          <Icon name="goals" size="s200" />
        </Box>
      </Box>
    </Screen>
  );
};
