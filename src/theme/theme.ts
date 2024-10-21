import { createTheme } from "@shopify/restyle";

import { BoxProps } from "@components";

const pallete = {
  bluePrimary: "#7EA2AA",

  bluePrimaryWith25PercentOpacity: "#7ea2aa40",

  errorDark: "#9D4242",
  errorLight: "#EB9494",

  lightGray: "#E5E5E5",
  lightNeutralGray: "#D2D2D2",

  softWhiteGray: "#F4F4F4",

  mutedAqua: "#9BBDC4",
  mutedSlate: "#6B8A90",
  mutedCyan: "#A5BEC4",
  translucentBlack: "#00000040",
  neutralDarkest: "#333333",
  neutralMedium: "#606060",
  neutral: "#D6D1CF",
  dark: "#000",
  grayishSilver: "#B9B9B9",

  neutralLight: "#F5F5F5",
  neutralLighest: "#FFFFFF",
};

export const shadow: BoxProps = {
  shadowColor: "buttonShadow",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 14,
};

export const theme = createTheme({
  colors: {
    ...pallete,
    primary: pallete.bluePrimary,

    progressBarCartoon: pallete.mutedAqua,
    progressBarBackground: pallete.lightGray,

    radioButtonBorder: pallete.grayishSilver,
    radioButtonBackground: pallete.mutedCyan,

    dividerColor: pallete.softWhiteGray,

    onboardingInputSelected: pallete.bluePrimaryWith25PercentOpacity,

    button: pallete.bluePrimary,
    buttonShadow: pallete.mutedSlate,
    buttonConstrast: pallete.neutralLighest,

    background: pallete.neutralLighest,
    backgroundConstrast: pallete.neutralDarkest,
    backgroundSecondConstrast: pallete.neutralMedium,
  },
  spacing: {
    s0: 0,
    s2: 2,
    s3: 3,
    s4: 4,
    s5: 5,
    s6: 6,
    s7: 7,
    s8: 8,
    s9: 9,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s18: 18,
    s20: 20,
    s22: 22,
    s24: 24,
    s25: 25,
    s26: 26,
    s28: 28,
    s30: 30,
    s32: 32,
    s35: 35,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s0: 0,
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s16: 16,
    s20: 20,
    s25: 25,
    s32: 32,
    s48: 48,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof (typeof theme)["colors"];
export type ThemeSpacing = keyof (typeof theme)["spacing"];
export type ThemeBorderRadii = keyof (typeof theme)["borderRadii"];
