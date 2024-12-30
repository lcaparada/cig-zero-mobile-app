import { BottomSheet, BottomSheetProps } from "../BottomSheet/BottomSheet";
import { SetTimeInput } from "../SetTimeInput/SetTimeInput";

import { useAddSmokingHourBottomSheet } from "./useAddSmokingHourBottomSheet";

type AddSmokingHourBottomSheetModalProps = Pick<
  BottomSheetProps,
  "setVisible"
> & {
  calendarDate: Date;
};

export const AddSmokingHourBottomSheet = ({
  calendarDate,
  setVisible,
}: AddSmokingHourBottomSheetModalProps) => {
  const { date, isPending, setDate, handleCreateSmokingRecord } =
    useAddSmokingHourBottomSheet({ setVisible });

  return (
    <BottomSheet
      setVisible={setVisible}
      title={"Insira o horário"}
      height={"30%"}
      scrollable={false}
      button={{
        text: "Adicionar",
        isLoading: isPending,
        action: () => handleCreateSmokingRecord(calendarDate),
      }}
    >
      <SetTimeInput date={date} setDate={setDate} />
    </BottomSheet>
  );
};
