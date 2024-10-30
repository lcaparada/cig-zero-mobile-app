import { Missions } from "@domain";
import { IconName } from "src/components/Icon/Icon";

const iconMapping: Record<string, IconName> = {
  FINANCIAL_ECONOMY: "dollarSign",
  REDUCTION_BASED: "trendingDown",
  TIME_BASED: "clock",
};

export const getMissionsCardIcon = (mission: Missions): IconName => {
  return iconMapping[mission.category.type] || "defaultIcon";
};
