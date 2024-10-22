import { AddSmokingHourModal, Calendar, Divider, Screen } from "@components";

import { CalendarHeader, SmokingActivities } from "./components";
import { useCalendarScreen } from "./useCalendarScreen";

export const CalendarScreen = () => {
  const { date, showAddSmokingHourModal, setDate, setShowAddSmokingHourModal } =
    useCalendarScreen();

  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s0" }}
      button={{
        text: "Adicionar fumo",
        action: () => setShowAddSmokingHourModal(true),
      }}
    >
      <CalendarHeader />
      <Calendar date={date} setDate={setDate} />
      <Divider mt={"s30"} mb={"s30"} />
      <SmokingActivities date={date} />
      {showAddSmokingHourModal && (
        <AddSmokingHourModal
          visible={showAddSmokingHourModal}
          setVisible={setShowAddSmokingHourModal}
        />
      )}
    </Screen>
  );
};
