import { UserMetaData } from "@services";

export const yearsSmoking: Record<UserMetaData["howManyYearsSmoke"], string> = {
  "1": "1",
  "2_5": "2 a 5",
  "6_10": "6 a 10",
  "10": "+10",
};

export const averageCigarettesPerDay: Record<
  UserMetaData["howManyCigarettesPerDay"],
  string
> = {
  "1_5": "1 a 5",
  "6_10": "6 a 10",
  "11_20": "11 a 20",
  "21": "+21",
};

export const mainReasonForQuitting: Record<
  UserMetaData["mainReasonForQuitting"],
  string
> = {
  FAMILY: "Família",
  HEALTHY: "Saúde",
  SAVINGS: "Economizar",
  OTHER: "Outros",
};

export const goal: Record<
  UserMetaData["quitImmediatelyOrReduceGradually"],
  string
> = {
  STOP_NOW: "Parar agora",
  REDUCE_GRADUALLY: "Reduzir gradativamente",
};
