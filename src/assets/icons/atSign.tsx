import * as React from "react";

import Svg, { Circle, Path } from "react-native-svg";

import { IconBase } from "@components";

export const AtSignIcon = ({ color, size, strokeWidth }: IconBase) => {
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
      <Circle cx={12} cy={12} r={4} />
      <Path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" />
    </Svg>
  );
};
