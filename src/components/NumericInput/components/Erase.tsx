import { BoxProps, TouchableOpacityBox } from "src/components/Box/Box";
import { Icon } from "src/components/Icon/Icon";

interface EraseProps {
  onPress: () => void;
  right?: number;
}

export const Erase = ({ onPress, right = 70 }: EraseProps) => {
  return (
    <TouchableOpacityBox
      right={right}
      onPress={onPress}
      {...$eraseBox}
      {...$eraseShadow}
    >
      <Icon strokeWidth={2} name="x" color="neutralLighest" />
    </TouchableOpacityBox>
  );
};

const $eraseBox: BoxProps = {
  backgroundColor: "deleteButton",
  paddingLeft: "s12",
  paddingRight: "s6",
  position: "absolute",

  paddingVertical: "s2",
  borderTopRightRadius: "s4",
  borderBottomRightRadius: "s4",
  borderTopLeftRadius: "s32",
  borderBottomLeftRadius: "s32",
};

const $eraseShadow: BoxProps = {
  shadowColor: "deleteButtonShadow",
  shadowOffset: { width: 0, height: 5 },
  shadowOpacity: 1,
  shadowRadius: 0,
  elevation: 5,
};
