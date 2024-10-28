import {
  Box,
  InformationItem,
  InformationItemProps,
  Screen,
} from "@components";

import {
  averageCigarettesPerDay,
  goal,
  mainReasonForQuitting,
  yearsSmoking,
} from "./pastSmokingDataPreset";
import { usePastSmokingDataScreen } from "./usePastSmokingDataScreen";

export const PastSmokingDataScreen = () => {
  const {
    userGoal,
    userYearsSmoking,
    userMainReasonForQuitting,
    userAverageCigarettesPerDay,
  } = usePastSmokingDataScreen();

  const informationsData: InformationItemProps[] = [
    {
      icon: "clock",
      text: "Anos fumando",
      rightText: yearsSmoking[userYearsSmoking],
    },
    {
      icon: "wind",
      text: "Média de cigarros por dia",
      rightText: averageCigarettesPerDay[userAverageCigarettesPerDay],
    },
    {
      icon: "user",
      text: "Principal motivo para parar",
      rightText: mainReasonForQuitting[userMainReasonForQuitting],
    },
    {
      icon: "star",
      text: "Objetivo",
      rightText: goal[userGoal],
    },
  ];

  return (
    <Screen canGoBack scrollable screenTitle="Dados de Fumo Passado">
      <Box rowGap={"s10"}>
        {informationsData.map((info, index) => (
          <InformationItem {...info} key={index} />
        ))}
      </Box>
    </Screen>
  );
};
