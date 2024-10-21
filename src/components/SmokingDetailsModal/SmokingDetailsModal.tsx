import { Modal, ModalProps } from "../Modal/Modal";
import { Text } from "../Text/Text";

export const SmokingDetailsModal = ({
  visible,
  setVisible,
}: Pick<ModalProps, "visible" | "setVisible">) => {
  return (
    <Modal
      button={{ text: "Deletar", action: () => {}, preset: "delete" }}
      title="Detalhes do fumo"
      visible={visible}
      height={"25%"}
      setVisible={setVisible}
    >
      <Text
        preset="paragraphsBig"
        weight="medium"
        color={"backgroundSecondConstrast"}
      >
        Esse fumo foi registrado por você às 14:30 do dia 03 de agosto de 2024.
      </Text>
    </Modal>
  );
};
