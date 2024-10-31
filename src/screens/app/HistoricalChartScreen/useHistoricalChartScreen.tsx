import { useGetChartData } from "@domain";

export const useHistoricalChartScreen = () => {
  const { data, isFetching } = useGetChartData();

  return { data, isFetching };
};
