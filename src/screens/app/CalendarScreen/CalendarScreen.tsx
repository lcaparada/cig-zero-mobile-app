import { AddSmokingHourModal, Calendar, Divider, Screen } from "@components";

import { CalendarHeader, SmokingActivities } from "./components";
import { useCalendarScreen } from "./useCalendarScreen";

export const CalendarScreen = () => {
  const {
    date,
    setDate,
    dateString,
    isFetching,
    scrollViewRef,
    indexedSmokingRecords,
    showAddSmokingHourModal,
    setShowAddSmokingHourModal,
  } = useCalendarScreen();

  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      scrollRef={scrollViewRef}
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s0" }}
      button={{
        text: "Adicionar fumo",
        action: () => setShowAddSmokingHourModal(true),
      }}
    >
      <CalendarHeader />
      <Calendar
        date={date}
        setDate={setDate}
        indexedSmokingRecords={indexedSmokingRecords}
      />
      <Divider mt={"s30"} mb={"s30"} />
      <SmokingActivities
        date={date}
        isLoading={isFetching}
        smokingRecords={indexedSmokingRecords[dateString]}
      />
      {showAddSmokingHourModal && (
        <AddSmokingHourModal
          visible={showAddSmokingHourModal}
          setVisible={setShowAddSmokingHourModal}
        />
      )}
    </Screen>
  );
};
