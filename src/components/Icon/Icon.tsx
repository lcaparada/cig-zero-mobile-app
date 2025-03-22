import { TouchableOpacityProps } from "react-native";

import * as Haptics from "expo-haptics";

import { useAppTheme } from "@hooks";
import { ThemeColors, ThemeSpacing } from "@theme";

import {
  Zap,
  Star,
  User,
  Wind,
  Home,
  Rings,
  Clock,
  Settings,
  Calendar,
  ArrowLeft,
  DollarSign,
  Activity,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  TrendingDown,
  ErrorRound,
  CheckRound,
  Info,
  Shield,
  Bell,
  FileText,
  AlertTriangle,
  HelpCircle,
  CameraIcon,
  Trash2,
  Minus,
  Plus,
  BarChart,
  MessageCircle,
  Send,
  InfoCircle,
  UserX,
  Smile,
  X,
  TrendingUp,
  Check,
  ArrowDown,
  ArrowUp,
  Moon,
  Sun,
  Apple,
  Google,
  Globe,
  Users,
  Edit2,
  MapPin,
  Trophy,
  Calendar2,
  Clock2,
  Resume,
  Google2,
  XCircle,
  Lock,
  Goals,
  Money,
  AvoidCigarette,
  Cigarette,
  PackOfCigarette,
  Chat,
  CheckAchievement,
  FirstVitory,
  LightBulb,
  Goal,
  Fire,
  Star2,
  Healthcare,
  Community,
  Home2,
  Thinking,
  LevelUp,
  LevelBadge,
  Egg,
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
      onPress={async () => {
        await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        onPress();
      }}
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
  x: X,
  zap: Zap,
  sun: Sun,
  egg: Egg,
  user: User,
  star: Star,
  info: Info,
  wind: Wind,
  home: Home,
  bell: Bell,
  plus: Plus,
  send: Send,
  moon: Moon,
  lock: Lock,
  goal: Goal,
  fire: Fire,
  chat: Chat,
  star2: Star2,
  goals: Goals,
  apple: Apple,
  users: Users,
  minus: Minus,
  globe: Globe,
  edit2: Edit2,
  rings: Rings,
  clock: Clock,
  userX: UserX,
  smile: Smile,
  check: Check,
  money: Money,
  home2: Home2,
  shield: Shield,
  google: Google,
  mapPin: MapPin,
  trophy: Trophy,
  trash2: Trash2,
  clock2: Clock2,
  resume: Resume,
  xCircle: XCircle,
  arrowUp: ArrowUp,
  google2: Google2,
  levelUp: LevelUp,
  error: ErrorRound,
  camera: CameraIcon,
  barChart: BarChart,
  fileText: FileText,
  activity: Activity,
  settings: Settings,
  thinking: Thinking,
  calendar: Calendar,
  success: CheckRound,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  calendar2: Calendar2,
  cigarette: Cigarette,
  lightBulb: LightBulb,
  community: Community,
  levelBadgde: LevelBadge,
  infoCircle: InfoCircle,
  helpCircle: HelpCircle,
  healthcare: Healthcare,
  arrowRight: ArrowRight,
  dollarSign: DollarSign,
  trendingUp: TrendingUp,
  chevronLeft: ChevronLeft,
  firstVitory: FirstVitory,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  trendingDown: TrendingDown,
  messageCircle: MessageCircle,
  alertTriangle: AlertTriangle,
  avoidCigarette: AvoidCigarette,
  packOfCigarette: PackOfCigarette,
  checkAchievement: CheckAchievement,
};
