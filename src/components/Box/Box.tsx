import {
  ImageBackground,
  Animated as RNAnimated,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import {
  border,
  layout,
  shadow,
  spacing,
  opacity,
  createBox,
  ShadowProps,
  LayoutProps,
  BorderProps,
  OpacityProps,
  SpacingProps,
  backgroundColor,
  spacingShorthand,
  BackgroundColorProps,
  SpacingShorthandProps,
  createRestyleComponent,
} from "@shopify/restyle";
import Animated from "react-native-reanimated";

import { Theme } from "@theme";

export const Box = createBox<Theme>();

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  BorderProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  TouchableOpacityProps &
  ShadowProps<Theme> &
  OpacityProps<Theme>;

export type BoxProps = React.ComponentProps<typeof Box>;
export type AnimatedBoxProps = React.ComponentProps<typeof AnimatedBoxRNR>;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, border, spacing, spacingShorthand, layout, shadow, opacity],
  TouchableOpacity
);

export const AnimatedBoxRNR = Animated.createAnimatedComponent(Box);

export const AnimatedTouchableOpacityBoxRNR =
  Animated.createAnimatedComponent(TouchableOpacityBox);

export const AnimatedFlatlist = Animated.FlatList;

export const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

export const AnimatedTouchableOpacityBox =
  RNAnimated.createAnimatedComponent(TouchableOpacityBox);

export type AnimatedTouchableOpacityBoxProps = React.ComponentProps<
  typeof AnimatedTouchableOpacityBox
>;

export const AnimatedBox = RNAnimated.createAnimatedComponent(Box);
