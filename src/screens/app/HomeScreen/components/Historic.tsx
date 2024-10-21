import {
  Box,
  IconName,
  InformationItem,
  HeadingWithDescription,
} from "@components";

interface HistoricItemData {
  icon: IconName;
  label: string;
}

const historicItems: HistoricItemData[] = [
  {
    icon: "wind",
    label: "244 cigarros fumados",
  },
  {
    icon: "dollarSign",
    label: "3.424,00 gastos",
  },
  {
    icon: "clock",
    label: "1 dia perdido",
  },
];

export const Historic = () => {
  return (
    <Box paddingHorizontal={"s24"} paddingVertical={"s30"}>
      <HeadingWithDescription
        title="Histórico"
        description="Seu histórico passado de fumo"
      />
      <Box mt={"s20"} rowGap={"s10"}>
        {historicItems.map((item, index) => (
          <InformationItem key={index} text={item.label} icon={item.icon} />
        ))}
      </Box>
    </Box>
  );
};
