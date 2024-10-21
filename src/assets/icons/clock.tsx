import * as React from "react";

import Svg, { Circle, Path } from "react-native-svg";

import { IconBase } from "@components";

export const ClockIcon = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M12 6L12 12 16 14" />
    </Svg>
  );
};
