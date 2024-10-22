import { TouchableOpacityProps } from "react-native";

import { useAppTheme } from "@hooks";
import { ThemeColors, ThemeSpacing } from "@theme";

import {
  User,
  Rings,
  Settings,
  Calendar,
  DollarSign,
  Wind,
  Clock,
  Star,
  Activity,
  ArrowRight,
  Home,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Zap,
  ArrowLeft,
  TrendingDown,
} from "@assets";

import { TouchableOpacityBox } from "../Box/Box";

export interface IconBase {
  fill?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export type IconName = keyof typeof iconRegistry;

export interface IconProps extends Omit<TouchableOpacityProps, "onPress"> {
  name: IconName;
  size?: ThemeSpacing;
  color?: ThemeColors;
  strokeWidth?: number;
  onPress?: () => void;
  fill?: ThemeColors | "none";
}

export const Icon = ({
  name,
  fill = "none",
  size = "s18",
  color = "neutralDarkest",
  strokeWidth = 1.5,
  onPress,
  ...touchableOpacityProps
}: IconProps) => {
  const { colors, spacing } = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return onPress ? (
    <TouchableOpacityBox
      onPress={onPress}
      hitSlop={10}
      {...touchableOpacityProps}
    >
      <SVGIcon
        size={spacing[size]}
        color={colors[color]}
        strokeWidth={strokeWidth}
        fill={fill !== "none" ? colors[fill] : "none"}
      />
    </TouchableOpacityBox>
  ) : (
    <SVGIcon
      color={colors[color]}
      size={spacing[size]}
      strokeWidth={strokeWidth}
      fill={fill !== "none" ? colors[fill] : "none"}
    />
  );
};

const iconRegistry = {
  zap: Zap,
  user: User,
  star: Star,
  wind: Wind,
  home: Home,
  rings: Rings,
  clock: Clock,
  activity: Activity,
  settings: Settings,
  calendar: Calendar,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  dollarSign: DollarSign,
  chevronLeft: ChevronLeft,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  trendingDown: TrendingDown,
};
