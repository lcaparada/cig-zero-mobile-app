import { AchievementHeadingProps } from "./components/AchievementHeading";

export const achievementsPresets: Omit<
  AchievementHeadingProps,
  "isLastItem"
>[] = [
  {
    title: "Baseada no tempo",
    description: "Celebre cada marco sem cigarro.",
    icon: "clock",
    current: 0,
    target: 12,
  },
  {
    title: "Baseadas em Redução",
    description: "Avance gradualmente reduzindo o consumo.",
    icon: "trendingDown",
    current: 0,
    target: 12,
  },
  {
    title: "Economia Financeira",
    description: "Veja o quanto você economizou ao parar de fumar.",
    icon: "dollarSign",
    current: 0,
    target: 12,
  },
  {
    title: "Desafios Personalizados",
    description: "Enfrente desafios únicos e fortaleça sua jornada.",
    icon: "zap",
    current: 0,
    target: 12,
  },
];
