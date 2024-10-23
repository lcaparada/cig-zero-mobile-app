import { format } from "date-fns";

import { SmokeLogWithDateAndCreatedAt, useDeleteSmokingRecord } from "@domain";

import { Modal, ModalProps } from "../Modal/Modal";
import { Text } from "../Text/Text";

type SmokingDetailsModalProps = Pick<ModalProps, "visible" | "setVisible"> & {
  smokingRecord: SmokeLogWithDateAndCreatedAt;
};

export const SmokingDetailsModal = ({
  visible,
  setVisible,
  smokingRecord,
}: SmokingDetailsModalProps) => {
  const { handleDeleteSmokingRecord, isPending } = useDeleteSmokingRecord();
  return (
    <Modal
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
      visible={visible}
      height={"25%"}
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
    </Modal>
  );
};
