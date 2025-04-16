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
  LevelUp,
  LevelBadge,
  Goal,
  Rings2,
  Community,
  Thinking,
  Healthcare,
  Star2,
  Edit,
  AtSign,
  Lock2,
  Eye,
  EyeOff,
  Email,
  Apple2,
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
      testID="icon-button"
      onPress={() => {
        onPress();
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      }}
      testID={name}
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
  eye: Eye,
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
  chat: Chat,
  goal: Goal,
  edit: Edit,
  email: Email,
  lock2: Lock2,
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
  apple2: Apple2,
  eyeOff: EyeOff,
  atSign: AtSign,
  rings2: Rings2,
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
  thinking: Thinking,
  settings: Settings,
  calendar: Calendar,
  success: CheckRound,
  community: Community,
  arrowDown: ArrowDown,
  arrowLeft: ArrowLeft,
  calendar2: Calendar2,
  cigarette: Cigarette,
  lightBulb: LightBulb,
  levelBadge: LevelBadge,
  healthcare: Healthcare,
  infoCircle: InfoCircle,
  helpCircle: HelpCircle,
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
