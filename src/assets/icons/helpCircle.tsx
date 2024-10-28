import Svg, { Circle, Path } from "react-native-svg";

import { IconBase } from "@components";

export const HelpCircle = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
      <Path d="M12 17L12.01 17" />
    </Svg>
  );
};
