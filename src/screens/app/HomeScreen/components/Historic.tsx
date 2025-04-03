import { CopilotStep, walkthroughable } from "react-native-copilot";

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

const WalkthroughableBox = walkthroughable(Box);

export const Historic = () => {
  const { historicData } = useGetHistoricData();

  const historicItems: HistoricItemData[] = [
    {
      icon: "cigarette",
      label: `${historicData?.smokedCigarettes ?? 0} cigarros fumados`,
    },
    {
      icon: "money",
      label: `${formatToCurrency(historicData?.moneySpent ?? 0)} reais gastos`,
    },
    {
      icon: "clock2",
      label: `${historicData?.lostTimeInDays ?? 0} ${(historicData?.lostTimeInDays ?? 0 > 1) ? "dias perdidos" : "dia perdido"} `,
    },
  ];

  return (
    <CopilotStep
      text="Esta seção exibe seu histórico de fumo com base nos dados coletados: número de cigarros fumados, dinheiro gasto e dias de vida perdidos. Os valores são estimativas e podem não ser exatos."
      order={7}
      name="historic"
    >
      <WalkthroughableBox paddingHorizontal={"s24"} paddingVertical={"s30"}>
        <HeadingWithDescription
          title="Histórico"
          description="Seu histórico de fumo"
        />
        <Box mt={"s20"} rowGap={"s10"}>
          {historicItems.map((item, index) => (
            <InformationItem key={index} text={item.label} icon={item.icon} />
          ))}
        </Box>
      </WalkthroughableBox>
    </CopilotStep>
  );
};
