import { Box, Chart, Icon, Text } from "@components";

import { YearlyData } from "@domain";

interface HistoricalChartProps {
  title: string;
  description: string;
  data: YearlyData[];
}

export const HistoricalChart = ({
  data,
  title,
  description,
}: HistoricalChartProps) => {
  return (
    <Box paddingHorizontal={"s24"}>
      <Box mb={"s16"}>
        <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
          <Icon name="barChart" size="s20" strokeWidth={2} color="primary" />
          <Text preset="paragraphsLarge" weight="semiBold" color={"primary"}>
            {title}
          </Text>
        </Box>
        <Box flexDirection={"row"} alignItems={"center"} columnGap={"s8"}>
          <Box width={20} />
          <Text
            preset="paragraphsBig"
            weight="medium"
            textAlign={"left"}
            color={"backgroundSecondConstrast"}
          >
            {description}
          </Text>
        </Box>
      </Box>
      <Chart data={data} />
    </Box>
  );
};
