import { Divider, Screen } from "@components";

import { HistoricalChart } from "./components";

export const HistoricalChartScreen = () => {
  return (
    <Screen
      canGoBack
      scrollable
      screenTitle="Gráficos do Histórico"
      insets={{ left: "s0", right: "s0", top: "s24" }}
    >
      <HistoricalChart title="Dinheiro gasto x Cigarros" />
      <Divider mb={"s30"} />
      <HistoricalChart title="Cigarros x Ano" />
      <Divider mb={"s30"} />
      <HistoricalChart title="Dinheiro gasto x Ano" />
    </Screen>
  );
};
