import { isToday } from "date-fns";

import { Calendar, Divider, Screen } from "@components";

import { CalendarHeader, SmokingActivities } from "./components";
import { useCalendarScreen } from "./useCalendarScreen";

export const CalendarScreen = () => {
  const { date, setDate } = useCalendarScreen();

  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s24" }}
      button={
        isToday(date)
          ? {
              text: "Adicionar fumo",
              action: () => {},
              insets: {
                left: "s24",
                right: "s24",
              },
            }
          : undefined
      }
    >
      <CalendarHeader />
      <Calendar date={date} setDate={setDate} />
      <Divider mt={"s30"} mb={"s30"} />
      <SmokingActivities date={date} />
    </Screen>
  );
};
