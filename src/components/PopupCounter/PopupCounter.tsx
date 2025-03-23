import { Modal, StyleSheet } from "react-native";

import { AnimatedBoxRNR, Box, BoxProps } from "../Box/Box";
import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { TimeInformation } from "../TimeInformation/TimeInformation";

import { usePopupCounter } from "./usePopupCounter";

export interface PopupCounterProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PopupCounter = ({ visible, setVisible }: PopupCounterProps) => {
  const { timeLeft, animatedStyles, hidePopup } = usePopupCounter({
    visible,
    setVisible,
  });

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Box style={StyleSheet.absoluteFillObject} {...$boxWrapper}>
        <AnimatedBoxRNR {...$animatedBoxWrapper} style={[animatedStyles]}>
          <Text
            preset="titleSmall"
            weight="semiBold"
            color={"backgroundConstrast"}
          >
            Tempo de uso restante
          </Text>
          <Box
            columnGap={"s10"}
            mt={"s18"}
            alignItems={"center"}
            flexDirection={"row"}
            justifyContent={"center"}
          >
            <TimeInformation label="dias" value={timeLeft.days} />
            <TimeInformation label="horas" value={timeLeft.hours} />
            <TimeInformation label="minutos" value={timeLeft.minutes} />
          </Box>
          <Box flexDirection={"row"} mt={"s30"} columnGap={"s10"}>
            <Button text={"Fechar"} onPress={hidePopup} flex={1} />
          </Box>
        </AnimatedBoxRNR>
      </Box>
    </Modal>
  );
};

const $boxWrapper: BoxProps = {
  backgroundColor: "backgroundModal",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: "s35",
};

const $animatedBoxWrapper: BoxProps = {
  borderRadius: "s20",
  padding: "s20",
  backgroundColor: "background",
};
