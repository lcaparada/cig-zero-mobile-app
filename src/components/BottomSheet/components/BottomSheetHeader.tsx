import * as Haptics from "expo-haptics";
import { Box, TouchableOpacityBox } from "../../Box/Box";
import { Icon } from "../../Icon/Icon";
import { Text } from "../../Text/Text";

interface ModalHeaderProps {
  title: string;
  closeModal: (onCompleted?: () => void) => void;
  disabledToClose: boolean;
  rightButton?: {
    text: string;
    action: () => void;
  };
}

export const BottomSheetHeader = ({
  title,
  disabledToClose,
  rightButton,
  closeModal,
}: ModalHeaderProps) => {
  return (
    <Box
      mb={"s20"}
      alignItems={"center"}
      flexDirection={"row"}
      justifyContent={"center"}
    >
      {!disabledToClose ? (
        <Box testID="close-box" position={"absolute"} left={0}>
          <Icon
            name="chevronDown"
            strokeWidth={2}
            color="backgroundConstrast"
            size="s24"
            onPress={() => closeModal()}
          />
        </Box>
      ) : null}
      <Text
        weight="semiBold"
        preset="paragraphsLarge"
        color={"backgroundConstrast"}
      >
        {title}
      </Text>
      {rightButton ? (
        <Box position={"absolute"} right={0}>
          <TouchableOpacityBox
            testID="right-button"
            onPress={() => {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              rightButton.action();
            }}
          >
            <Text weight="medium" color={"backgroundConstrast"}>
              {rightButton.text}
            </Text>
          </TouchableOpacityBox>
        </Box>
      ) : null}
    </Box>
  );
};
