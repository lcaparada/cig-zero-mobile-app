import { IconName } from "@components";

type Benefit = { text: string; iconName: IconName };

export const getBenefits = (): Benefit[] => [
  {
    text: "Apoio 24 horas para te auxiliar",
    iconName: "helpCircle",
  },
  {
    text: "Motivação diária para continuar",
    iconName: "smile",
  },
  {
    text: "Confira seus avanços e benefícios",
    iconName: "trendingUp",
  },
  {
    text: "Novos desafios semanalmente para incentivar",
    iconName: "shield",
  },
  { text: "Cancele a qualquer momento", iconName: "x" },
];
