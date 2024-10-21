import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const BarChartIcon = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M12 20L12 10" />
      <Path d="M18 20L18 4" />
      <Path d="M6 20L6 16" />
    </Svg>
  );
};
