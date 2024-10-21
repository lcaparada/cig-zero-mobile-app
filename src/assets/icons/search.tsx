import Svg, { Circle, Path } from "react-native-svg";

import { IconBase } from "@components";

export const Search = ({ color, size, strokeWidth }: IconBase) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21L16.65 16.65" />
    </Svg>
  );
};
