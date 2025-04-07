import { useEffect } from "react";
import { Modal, StyleSheet } from "react-native";

import { usePopupAnimated } from "@hooks";

import { AnimatedBoxRNR, Box, BoxProps } from "../Box/Box";
import { Button, ButtonProps } from "../Button/Button";
import { Text } from "../Text/Text";

export interface PopupProps {
  title: string;
  visible: boolean;
  button?: ButtonProps;
  description: string;
  hideCloseButton?: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Popup = ({
  title,
  button,
  visible,
  description,
  hideCloseButton,
  setVisible,
}: PopupProps) => {
  const { showPopup, hidePopup, animatedStyles } = usePopupAnimated({
    setVisible,
  });

  useEffect(() => {
    if (visible) {
      showPopup();
    }
  }, [showPopup, visible]);

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
            preset="paragraphsBig"
            weight="medium"
            mt={"s12"}
            color={"backgroundSecondConstrast"}
          >
            {description}
          </Text>

          <Box flexDirection={"row"} mt={"s20"} columnGap={"s10"}>
            {button && <Button {...button} flex={1} />}
            {hideCloseButton ? null : (
              <Button text={"Fechar"} onPress={hidePopup} flex={1} />
            )}
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
