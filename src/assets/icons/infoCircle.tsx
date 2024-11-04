import Svg, { Circle, Path } from "react-native-svg";

import { IconBase } from "@components";

export const InfoCircle = ({ color, size, strokeWidth }: IconBase) => {
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
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 16L12 12" />
      <Path d="M12 8L12.01 8" />
    </Svg>
  );
};
