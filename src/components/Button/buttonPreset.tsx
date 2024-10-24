import { ThemeColors } from "../../theme/theme";
import { TouchableOpacityBoxProps } from "../Box/Box";

export type ButtonPresetType = "primary" | "outline" | "delete";

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
        shadowColor: "buttonShadow",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 0,

        elevation: 5,
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
  delete: {
    default: {
      container: {
        backgroundColor: "errorDark",
        shadowColor: "errorMedium",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 0,

        elevation: 5,
      },
      content: "buttonConstrast",
      icon: "buttonConstrast",
      loading: "buttonConstrast",
    },
    disabled: {
      container: {
        backgroundColor: "errorDark",
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
