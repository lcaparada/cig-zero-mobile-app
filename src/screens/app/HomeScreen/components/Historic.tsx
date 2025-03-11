import { CopilotStep, walkthroughable } from "react-native-copilot";

import {
  Box,
  IconName,
  InformationItem,
  HeadingWithDescription,
  TouchableOpacityBox,
} from "@components";

import { useGetHistoricData } from "@domain";
import { formatToCurrency } from "@helpers";

interface HistoricItemData {
  icon: IconName;
  label: string;
}

const WalkthroughableTouchableOpacityBox = walkthroughable(TouchableOpacityBox);

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
    <CopilotStep
      text="Esta seção exibe seu histórico de fumo com base nos dados coletados: número de cigarros fumados, dinheiro gasto e dias de vida perdidos. Os valores são estimativas e podem não ser exatos."
      order={6}
      name="historic"
    >
      <WalkthroughableTouchableOpacityBox
        paddingHorizontal={"s24"}
        paddingVertical={"s30"}
        activeOpacity={1}
      >
        <HeadingWithDescription
          title="Histórico"
          description="Seu histórico de fumo"
        />
        <Box mt={"s20"} rowGap={"s10"}>
          {historicItems.map((item, index) => (
            <InformationItem key={index} text={item.label} icon={item.icon} />
          ))}
        </Box>
      </WalkthroughableTouchableOpacityBox>
    </CopilotStep>
  );
};
