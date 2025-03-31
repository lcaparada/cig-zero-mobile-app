import { createTheme } from "@shopify/restyle";

import { BoxProps } from "@components";

const pallete = {
  bluePrimary: "#7EA2AA",

  bluePrimaryWith25PercentOpacity: "#7ea2aa40",

  backgroundModal: "#00000080",

  solarGold: "#F6AE2D",

  amber: "#F3B700",

  errorDark: "#6B0F1A",
  errorMedium: "#530811",
  roseTerracotta: "#C87A7A",
  softCoral: "#D68686",

  lightGray: "#E5E5E5",
  lightNeutralGray: "#D2D2D2",
  softGray: "#E0E0E0",

  softWhiteGray: "#F4F4F4",

  mutedAqua: "#9BBDC4",

  mutedAquaWith20PercentOpacity: "#9bbdc433",

  mutedSlate: "#6B8A90",

  mediumGray: "#B0B0B0",
  mutedCyan: "#A5BEC4",
  neutralDarkest: "#333333",
  neutralMedium: "#606060",
  dark: "#000",
  grayishSilver: "#B9B9B9",

  deepCharcoal: "#1C1C1C",
  shadowGray: "#1c1c1c01",
  softCharcoal: "#1c1c1c80",
  charcoalMist: "#1c1c1cFF",

  darkGraphite: "#464646",

  lightSilver: "#EEE",
  mediumSilver: "#DDD",

  softWhite: "#f5f5f5",
  softWhiteTransparent: "#f5f5f500",

  neutralLighest: "#FFFFFF",
  transparentWhite: "#FFFFFF01",
  translucentWhite: "#FFFFFF80",

  shadowBlue: "#233D4D",

  forestGreen: "#058E3F",
  dartMouthGreen: "#036016",
};

export const shadow: BoxProps = {
  shadowColor: "buttonShadow",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 5,
};

export const whiteShadow: BoxProps = {
  shadowColor: "timeCardShadow",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 1,
  shadowRadius: 0,

  elevation: 5,
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

    success: pallete.dartMouthGreen,

    timeCardShadow: pallete.lightNeutralGray,

    background: pallete.neutralLighest,
    backgroundConstrast: pallete.neutralDarkest,
    backgroundSecondConstrast: pallete.neutralMedium,

    switchBackground: pallete.neutralMedium,

    cardProfileBackground: pallete.lightSilver,
    cardProfileShadow: pallete.mediumSilver,

    lightSilver: pallete.lightSilver,
    mediumSilver: pallete.mediumSilver,

    deleteButton: pallete.errorDark,
    deleteButtonShadow: pallete.errorMedium,

    firstLinearGradientColor: pallete.transparentWhite,
    secondLinearGradientColor: pallete.translucentWhite,
    thirdLinearGradientColor: pallete.neutralLighest,

    chatMessageBackground: pallete.lightSilver,
    chatMessageText: pallete.neutralDarkest,
    chatMessageShadow: pallete.mediumSilver,
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
    s100: 100,
    s200: 200,
    s300: 300,
    s400: 400,
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
    full: 999,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {},
  },
  zIndices: undefined,
});

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...pallete,
    primary: pallete.bluePrimary,

    progressBarCartoon: pallete.mutedAqua,
    progressBarBackground: pallete.neutralMedium,

    radioButtonBorder: pallete.grayishSilver,
    radioButtonBackground: pallete.mutedCyan,

    dividerColor: pallete.neutralMedium,

    onboardingInputSelected: pallete.bluePrimaryWith25PercentOpacity,

    button: pallete.bluePrimary,
    buttonShadow: pallete.mutedSlate,
    buttonConstrast: pallete.neutralLighest,

    background: pallete.deepCharcoal,
    backgroundConstrast: pallete.softGray,
    backgroundSecondConstrast: pallete.mediumGray,

    success: pallete.forestGreen,

    switchBackground: pallete.neutralMedium,

    deleteButton: pallete.roseTerracotta,
    deleteButtonShadow: pallete.softCoral,

    cardProfileBackground: pallete.neutralDarkest,
    cardProfileShadow: pallete.neutralMedium,

    lightSilver: pallete.lightSilver,
    mediumSilver: pallete.mediumSilver,

    timeCardShadow: pallete.darkGraphite,

    firstLinearGradientColor: pallete.shadowGray,
    secondLinearGradientColor: pallete.softCharcoal,
    thirdLinearGradientColor: pallete.charcoalMist,

    chatMessageBackground: pallete.neutralDarkest,
    chatMessageText: pallete.neutralLighest,
    chatMessageShadow: pallete.neutralMedium,
  },
};

export type Theme = typeof theme;
export type DarkTheme = typeof darkTheme;
export type ThemeColors = keyof (typeof theme)["colors"];
export type ThemeSpacing = keyof (typeof theme)["spacing"];
export type ThemeBorderRadii = keyof (typeof theme)["borderRadii"];
