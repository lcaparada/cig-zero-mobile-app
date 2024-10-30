import { useWindowDimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";

import { useAppTheme } from "@hooks";

import { Box } from "../Box/Box";

export const Chart = () => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const { colors } = useAppTheme();

  const chartConfig: AbstractChartConfig = {
    backgroundGradientFrom: colors.background,
    backgroundGradientTo: colors.background,
    color: () => colors.primary,
    decimalPlaces: 0,
    propsForLabels: {
      fontFamily: "SFProRounded-Regular",
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: colors.primary,
      fill: colors.background,
    },
  };

  const data = {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        data: [32000, 48000, 96000],
        color: () => colors.primary,
      },
    ],
  };

  return (
    <Box flex={1}>
      <LineChart
        data={data}
        width={SCREEN_WIDTH - 50}
        height={300}
        bezier
        chartConfig={chartConfig}
      />
    </Box>
  );
};
