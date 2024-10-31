import { Fragment } from "react";

import { differenceInYears } from "date-fns";

import { Divider, Screen } from "@components";

import { StatisticsSummary } from "@domain";

import { HistoricalChart } from "./components";
import { useHistoricalChartScreen } from "./useHistoricalChartScreen";

export const HistoricalChartScreen = () => {
  const { data, isFetching } = useHistoricalChartScreen();
  return (
    <Screen
      canGoBack
      scrollable
      screenTitle="Gráficos do Histórico"
      insets={{ left: "s0", right: "s0", top: "s24" }}
    >
      {!isFetching &&
        data &&
        Object.keys(data).map((key, index) => {
          const statisticSummary = data[key as keyof StatisticsSummary];
          const initialYear = statisticSummary.interval[0];
          const endYear = statisticSummary.interval[1];
          const diff = differenceInYears(endYear, initialYear);
          return (
            <Fragment key={index}>
              <HistoricalChart
                title={key}
                description={`Últimos ${diff} anos (${initialYear}-${endYear})`}
                data={statisticSummary.data}
              />
              {index !== Object.keys(data).length - 1 && <Divider mb={"s30"} />}
            </Fragment>
          );
        })}
    </Screen>
  );
};
