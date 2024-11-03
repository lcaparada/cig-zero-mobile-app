import {
  Screen,
  Divider,
  Calendar,
  AddSmokingHourBottomSheet,
  SmokingDetailsBottomSheet,
} from "@components";

import { CalendarHeader, SmokingActivities } from "./components";
import { useCalendarScreen } from "./useCalendarScreen";

export const CalendarScreen = () => {
  const {
    date,
    dateString,
    isFetching,
    smokingRecordDetails,
    indexedSmokingRecords,
    showAddSmokingHourModal,
    showSmokingDetailsModal,
    showAddSmokingRecordButton,
    setDate,
    handleAddSmokeRecord,
    setShowSmokingDetailsModal,
    setShowAddSmokingHourModal,
  } = useCalendarScreen();

  return (
    <>
      <Screen
        hasPaddingTop={false}
        scrollable
        scrollViewPaddingBottom={200}
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
          action={handleAddSmokeRecord}
          smokingRecords={indexedSmokingRecords[dateString]}
        />
      </Screen>
      {showAddSmokingHourModal && (
        <AddSmokingHourBottomSheet
          calendarDate={date}
          setVisible={setShowAddSmokingHourModal}
        />
      )}
      {showSmokingDetailsModal && (
        <SmokingDetailsBottomSheet
          smokingRecord={smokingRecordDetails}
          setVisible={setShowSmokingDetailsModal}
        />
      )}
    </>
  );
};
