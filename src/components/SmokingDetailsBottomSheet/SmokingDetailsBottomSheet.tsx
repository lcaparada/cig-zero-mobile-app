import { format } from "date-fns";

import { SmokeLogWithDateAndCreatedAt, useDeleteSmokingRecord } from "@domain";

import { BottomSheetProps, BottomSheet } from "../BottomSheet/BottomSheet";
import { Text } from "../Text/Text";

type SmokingDetailsBottomSheetProps = Pick<BottomSheetProps, "setVisible"> & {
  smokingRecord: SmokeLogWithDateAndCreatedAt;
};

export const SmokingDetailsBottomSheet = ({
  setVisible,
  smokingRecord,
}: SmokingDetailsBottomSheetProps) => {
  const { handleDeleteSmokingRecord, isPending } = useDeleteSmokingRecord();
  return (
    <BottomSheet
      button={{
        text: "Deletar",
        preset: "delete",
        isLoading: isPending,
        action: async () => {
          await handleDeleteSmokingRecord({ id: smokingRecord.id ?? "" });
          setVisible(false);
        },
      }}
      title="Detalhes do fumo"
      height={"30%"}
      scrollable={false}
      setVisible={setVisible}
    >
      {smokingRecord?.created_at && (
        <Text
          preset="paragraphsBig"
          weight="medium"
          color={"backgroundSecondConstrast"}
        >
          Esse fumo foi registrado por você às{" "}
          {format(
            smokingRecord?.created_at,
            "HH:mm 'do dia' dd 'de' MMMM 'de' yyyy"
          )}
          .
        </Text>
      )}
    </BottomSheet>
  );
};
