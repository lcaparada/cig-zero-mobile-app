import { Box, TouchableOpacityBox } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";
import { Text } from "src/components/Text/Text";

interface ModalHeaderProps {
  title: string;
  closeModal: (onCompleted?: () => void) => void;
  disabledToClose: boolean;
  rightButton?: {
    text: string;
    action: () => void;
  };
}

export const ModalHeader = ({
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
        <Box position={"absolute"} left={0}>
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
          <TouchableOpacityBox onPress={rightButton.action}>
            <Text weight="medium" color={"backgroundConstrast"}>
              {rightButton.text}
            </Text>
          </TouchableOpacityBox>
        </Box>
      ) : null}
    </Box>
  );
};
