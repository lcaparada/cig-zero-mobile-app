import { Dimensions } from "react-native";

export const calculateHeight = (heightParam: string) => {
  const { height: SCREEN_HEIGHT } = Dimensions.get("screen");

  const percentageNumber = heightParam.replace("%", "");

  const height = SCREEN_HEIGHT * (Number(percentageNumber) / 100);

  return height;
};
