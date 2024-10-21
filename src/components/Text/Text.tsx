import { TextStyle } from "react-native";

import { createText } from "@shopify/restyle";

import { Theme } from "@theme";

const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>;

type TextWeightVariants = "bold" | "medium" | "semiBold" | "regular";

export type TextVariants =
  | "notes"
  | "paragraphs"
  | "default"
  | "paragraphsBig"
  | "titleSmall"
  | "titleBig"
  | "display"
  | "paragraphsLarge"
  | "notesSmall"
  | "timer"
  | "paragraphsXL";

export interface TextProps extends SRTextProps {
  weight?: TextWeightVariants;
  preset?: TextVariants;
}

export const Text = ({
  weight = "regular",
  preset = "default",
  style,
  color = "neutralDarkest",
  children,
  ...sRTextProps
}: TextProps) => {
  return (
    <SRText
      {...sRTextProps}
      color={color}
      style={[$fontFamily[weight], $fontSize[preset], style]}
    >
      {children}
    </SRText>
  );
};

export const $fontFamily: Record<TextWeightVariants, TextStyle> = {
  bold: { fontFamily: "SFProRounded-Bold" },
  medium: { fontFamily: "SFProRounded-Medium" },
  regular: { fontFamily: "SFProRounded-Regular" },
  semiBold: { fontFamily: "SFProRounded-Semibold" },
};

const MULTIPLIER_LINE_HEIGHT = 1.4;

export const $fontSize: Record<TextVariants, TextStyle> = {
  notesSmall: { fontSize: 10, lineHeight: 10 * MULTIPLIER_LINE_HEIGHT },
  notes: { fontSize: 12, lineHeight: 12 * MULTIPLIER_LINE_HEIGHT },
  paragraphs: { fontSize: 14, lineHeight: 14 * MULTIPLIER_LINE_HEIGHT },
  paragraphsBig: { fontSize: 16, lineHeight: 16 * MULTIPLIER_LINE_HEIGHT },
  default: { fontSize: 18, lineHeight: 18 * MULTIPLIER_LINE_HEIGHT },
  paragraphsLarge: { fontSize: 20, lineHeight: 20 * MULTIPLIER_LINE_HEIGHT },
  paragraphsXL: { fontSize: 22, lineHeight: 22 * MULTIPLIER_LINE_HEIGHT },
  titleSmall: { fontSize: 24, lineHeight: 24 * MULTIPLIER_LINE_HEIGHT },
  titleBig: { fontSize: 28, lineHeight: 28 * MULTIPLIER_LINE_HEIGHT },
  display: { fontSize: 30, lineHeight: 30 * MULTIPLIER_LINE_HEIGHT },
  timer: { fontSize: 40, lineHeight: 40 * MULTIPLIER_LINE_HEIGHT },
};
