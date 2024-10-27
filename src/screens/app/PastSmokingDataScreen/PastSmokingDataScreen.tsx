import {
  Box,
  InformationItem,
  InformationItemProps,
  Screen,
} from "@components";

export const PastSmokingDataScreen = () => {
  const informationsData: InformationItemProps[] = [
    {
      icon: "clock",
      text: "Anos fumando",
      rightText: "+10 anos",
    },
    {
      icon: "wind",
      text: "Média de cigarros por dia",
      rightText: "+21",
    },
    {
      icon: "user",
      text: "Principal motivo para parar",
      rightText: "Economizar",
    },
    {
      icon: "star",
      text: "Objetivo",
      rightText: "Parar imediatamente",
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
