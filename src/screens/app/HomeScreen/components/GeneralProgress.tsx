import {
  Box,
  HeadingWithDescription,
  InformationCard,
  InformationCardProps,
} from "@components";

import { useGetProgressData } from "@domain";
import { formatToCurrency } from "@helpers";

export const GeneralProgress = () => {
  const { progressData } = useGetProgressData();

  const items: InformationCardProps[] = [
    {
      icon: "calendar",
      number: progressData?.daysWithoutSmoking ?? 0,
      label: "dias sem fumar",
    },
    {
      icon: "wind",
      number: progressData?.avoidedCigarettes ?? 0,
      label: "cigarros evitados",
    },
    {
      icon: "dollarSign",
      number: formatToCurrency(progressData?.moneySaved ?? 0),
      label: "reais poupados",
    },
    {
      icon: "clock",
      number: progressData?.timeSaved ?? 0,
      label: "dias recuperados",
    },
  ];

  return (
    <Box paddingHorizontal={"s24"} paddingVertical={"s30"}>
      <HeadingWithDescription
        title="Progresso Geral"
        description="Sua evolução desde o início"
      />
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"row"}
        columnGap={"s10"}
        mt={"s20"}
      >
        {items.map((item, index) => (
          <InformationCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
};
