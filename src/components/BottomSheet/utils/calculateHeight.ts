import { Dimensions } from "react-native";

export const calculateHeight = (heightParam: string | number) => {
  if (heightParam === "auto") throw new Error("auto isn't compatible");
  if (typeof heightParam === "number") return heightParam;

  const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

  const percentageNumber = heightParam.replace("%", "");

  const height = SCREEN_HEIGHT * (Number(percentageNumber) / 100);

  return height;
};
