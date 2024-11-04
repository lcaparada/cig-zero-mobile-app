import { Modal, StyleSheet } from "react-native";

import { AnimatedBoxRNR, Box, BoxProps } from "../Box/Box";
import { Button, ButtonProps } from "../Button/Button";
import { Text } from "../Text/Text";

import { usePopup } from "./usePopup";

export interface PopupProps {
  title: string;
  visible: boolean;
  description: string;
  button?: ButtonProps;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Popup = ({
  title,
  button,
  visible,
  description,
  setVisible,
}: PopupProps) => {
  const { animatedStyles, hidePopup } = usePopup({ visible, setVisible });

  return (
    <Modal transparent visible={visible} animationType="fade">
      <Box style={StyleSheet.absoluteFillObject} {...$boxWrapper}>
        <AnimatedBoxRNR {...$animatedBoxWrapper} style={[animatedStyles]}>
          <Text
            preset="titleSmall"
            weight="semiBold"
            color={"backgroundConstrast"}
          >
            {title}
          </Text>
          <Text
            preset="notes"
            weight="semiBold"
            mt={"s12"}
            color={"backgroundSecondConstrast"}
          >
            {description}
          </Text>

          <Box flexDirection={"row"} mt={"s20"} columnGap={"s10"}>
            {button && <Button {...button} flex={1} />}
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
