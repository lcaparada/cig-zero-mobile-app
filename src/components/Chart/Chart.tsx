import { useWindowDimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";
import { AbstractChartConfig } from "react-native-chart-kit/dist/AbstractChart";

import { useAppTheme } from "@hooks";

import { YearlyData } from "@domain";

import { Box } from "../Box/Box";

type ChartProps = {
  data: YearlyData[];
};

export const Chart = ({ data }: ChartProps) => {
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

  return (
    <Box flex={1}>
      <LineChart
        data={{
          labels: data.map(({ year }) => year.toString()),
          datasets: [
            {
              data: data.map(({ values }) => values),
              color: () => colors.primary,
            },
          ],
        }}
        width={SCREEN_WIDTH - 50}
        height={300}
        bezier
        chartConfig={chartConfig}
      />
    </Box>
  );
};
