import { Missions } from "@domain";
import { IconName } from "src/components/Icon/Icon";

const iconMapping: Record<string, IconName> = {
  FINANCIAL_ECONOMY: "clock",
  REDUCTION_BASED: "trendingDown",
  TIME_BASED: "dollarSign",
};

export const getMissionsCardIcon = (mission: Missions): IconName => {
  return iconMapping[mission.category.type] || "defaultIcon";
};
