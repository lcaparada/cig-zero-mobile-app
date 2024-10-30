import { Box, Chart, Icon, Text } from "@components";

interface HistoricalChartProps {
  title: string;
}

export const HistoricalChart = ({ title }: HistoricalChartProps) => {
  return (
    <Box paddingHorizontal={"s24"}>
      <Box
        flexDirection={"row"}
        alignItems={"center"}
        columnGap={"s8"}
        mb={"s16"}
      >
        <Icon name="barChart" size="s20" strokeWidth={2} color="primary" />
        <Text preset="paragraphsLarge" weight="semiBold" color={"primary"}>
          {title}
        </Text>
      </Box>
      <Chart />
    </Box>
  );
};
