import { AchievementProgressCardProps } from "src/components/AchievementProgressCard/AchievementProgressCard";

export const formatNumber = (
  num: number,
  type: AchievementProgressCardProps["type"] = "hours"
) => {
  let convertedNum: number;
  switch (type) {
    case "weeks":
      convertedNum = num / (24 * 7);
      break;
    case "months":
      convertedNum = num / (24 * 30);
      break;
    case "years":
      convertedNum = num / (24 * 365);
      break;
    case "hours":
    default:
      convertedNum = num;
  }
  return convertedNum < 10
    ? String(Math.round(convertedNum)).padStart(2, "0")
    : String(Math.round(convertedNum));
};
