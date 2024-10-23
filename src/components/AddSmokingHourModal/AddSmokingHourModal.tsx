import { Modal, ModalProps } from "../Modal/Modal";
import { SetTimeInput } from "../SetTimeInput/SetTimeInput";

import { useAddSmokingHourModal } from "./useAddSmokingHourModal";

type SetTimeModalProps = Pick<ModalProps, "visible" | "setVisible">;

export const AddSmokingHourModal = ({
  visible,
  setVisible,
}: SetTimeModalProps) => {
  const { date, modalRef, setDate, isPending, handleAddSmokingRecord } =
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
        action: () => {
          if (date) {
            handleAddSmokingRecord({ date: date?.toISOString() });
            modalRef.current?.closeModal();
          }
        },
      }}
    >
      <SetTimeInput date={date} setDate={setDate} />
    </Modal>
  );
};
