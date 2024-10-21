import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityBoxProps } from "../Box/Box";

export type ButtonPresetType = "primary" | "outline";

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  icon: ThemeColors;
  content: ThemeColors;
  loading: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPresetType,
  { default: ButtonUI; disabled: ButtonUI }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: "primary",
      },
      content: "buttonConstrast",
      icon: "buttonConstrast",
      loading: "buttonConstrast",
    },
    disabled: {
      container: {
        backgroundColor: "primary",
        opacity: 0.5,
      },
      content: "backgroundConstrast",
      icon: "backgroundConstrast",
      loading: "backgroundConstrast",
    },
  },
  outline: {
    default: {
      container: {
        backgroundColor: "background",
        borderWidth: 2,
        borderColor: "primary",
      },
      content: "primary",
      icon: "primary",
      loading: "primary",
    },
    disabled: {
      container: {
        backgroundColor: "background",
        borderWidth: 2,
        borderColor: "backgroundConstrast",
        opacity: 0.5,
      },
      content: "backgroundConstrast",
      icon: "backgroundConstrast",
      loading: "backgroundConstrast",
    },
  },
};
