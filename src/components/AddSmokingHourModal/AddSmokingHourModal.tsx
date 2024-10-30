import { Modal, ModalProps } from "../Modal/Modal";
import { SetTimeInput } from "../SetTimeInput/SetTimeInput";

import { useAddSmokingHourModal } from "./useAddSmokingHourModal";

type SetTimeModalProps = Pick<ModalProps, "visible" | "setVisible"> & {
  calendarDate: Date;
};

export const AddSmokingHourModal = ({
  visible,
  calendarDate,
  setVisible,
}: SetTimeModalProps) => {
  const { date, modalRef, isPending, handleCreateSmokingRecord, setDate } =
    useAddSmokingHourModal();

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      title={"Insira o horário"}
      height={"auto"}
      ref={modalRef}
      scrollable={false}
      button={{
        text: "Adicionar",
        isLoading: isPending,
        action: () => handleCreateSmokingRecord(calendarDate),
      }}
    >
      <SetTimeInput date={date} setDate={setDate} />
    </Modal>
  );
};
