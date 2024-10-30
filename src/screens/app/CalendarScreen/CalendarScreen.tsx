import { AddSmokingHourModal, Calendar, Divider, Screen } from "@components";

import { CalendarHeader, SmokingActivities } from "./components";
import { useCalendarScreen } from "./useCalendarScreen";

export const CalendarScreen = () => {
  const {
    date,
    dateString,
    isFetching,
    scrollViewRef,
    indexedSmokingRecords,
    showAddSmokingHourModal,
    showAddSmokingRecordButton,
    setDate,
    setShowAddSmokingHourModal,
  } = useCalendarScreen();

  return (
    <Screen
      hasPaddingTop={false}
      scrollable
      scrollViewPaddingBottom={200}
      scrollRef={scrollViewRef}
      insets={{ left: "s0", right: "s0", top: "s0", bottom: "s0" }}
      button={
        showAddSmokingRecordButton
          ? {
              text: "Adicionar fumo",
              action: () => setShowAddSmokingHourModal(true),
            }
          : undefined
      }
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
          calendarDate={date}
          visible={showAddSmokingHourModal}
          setVisible={setShowAddSmokingHourModal}
        />
      )}
    </Screen>
  );
};
