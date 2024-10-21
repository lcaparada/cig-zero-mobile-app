import { TouchableOpacityProps } from "react-native";

import { useAppTheme } from "@hooks";
import { ThemeColors, ThemeSpacing } from "@theme";

import {
  Eye,
  Zap,
  Edit,
  User,
  Grid,
  Home,
  Plus,
  Bell,
  Info,
  List,
  Book,
  Users,
  Globe,
  Heart,
  Minus,
  Apple,
  Coffee,
  EyeOff,
  Share,
  Trash2,
  Shield,
  Search,
  SignIn,
  Google,
  Filter,
  Calendar,
  Bookmark,
  StarIcon,
  Settings,
  LockIcon,
  BookOpen,
  CheckIcon,
  ClockIcon,
  Edit2Icon,
  TrashIcon,
  ArrowLeft,
  AtSignIcon,
  CheckRound,
  PlusSquare,
  CameraIcon,
  ErrorRound,
  HelpCircle,
  arrowRight,
  ChevronLeft,
  CodeSandBox,
  ChevronRight,
  BarChartIcon,
  AlertTriangle,
  ChevronDownIcon,
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
  eye: Eye,
  zap: Zap,
  edit: Edit,
  home: Home,
  grid: Grid,
  user: User,
  info: Info,
  plus: Plus,
  bell: Bell,
  book: Book,
  list: List,
  apple: Apple,
  minus: Minus,
  users: Users,
  heart: Heart,
  globe: Globe,
  share: Share,
  filter: Filter,
  google: Google,
  search: Search,
  shield: Shield,
  star: StarIcon,
  lock: LockIcon,
  coffee: Coffee,
  eyeOff: EyeOff,
  trash2: Trash2,
  signIn: SignIn,
  clock: ClockIcon,
  trash: TrashIcon,
  edit2: Edit2Icon,
  check: CheckIcon,
  error: ErrorRound,
  bookmark: Bookmark,
  bookOpen: BookOpen,
  camera: CameraIcon,
  calendar: Calendar,
  atSing: AtSignIcon,
  settings: Settings,
  success: CheckRound,
  arrowLeft: ArrowLeft,
  arrowRight: arrowRight,
  barChart: BarChartIcon,
  plusSquare: PlusSquare,
  helpCircle: HelpCircle,
  codeSandBox: CodeSandBox,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDownIcon,
  alertTriangle: AlertTriangle,
};
