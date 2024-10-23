import {
  Box,
  IconName,
  InformationItem,
  HeadingWithDescription,
} from "@components";

import { useGetHistoricData } from "@domain";
import { formatToCurrency } from "@helpers";

interface HistoricItemData {
  icon: IconName;
  label: string;
}

export const Historic = () => {
  const { historicData } = useGetHistoricData();

  const historicItems: HistoricItemData[] = [
    {
      icon: "wind",
      label: `${historicData?.smokedCigarettes ?? 0} cigarros fumados`,
    },
    {
      icon: "dollarSign",
      label: `${formatToCurrency(historicData?.moneySpent ?? 0)} reais gastos`,
    },
    {
      icon: "clock",
      label: `${historicData?.lostTimeInDays ?? 0} ${(historicData?.lostTimeInDays ?? 0 > 1) ? "dias perdidos" : "dia perdido"} `,
    },
  ];

  return (
    <Box paddingHorizontal={"s24"} paddingVertical={"s30"}>
      <HeadingWithDescription
        title="Histórico"
        description="Seu histórico de fumo"
      />
      <Box mt={"s20"} rowGap={"s10"}>
        {historicItems.map((item, index) => (
          <InformationItem key={index} text={item.label} icon={item.icon} />
        ))}
      </Box>
    </Box>
  );
};
