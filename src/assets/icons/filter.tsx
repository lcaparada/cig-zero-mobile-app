import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Filter = ({ color, size, strokeWidth, fill }: IconBase) => {
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
      <Path fill={fill} d="M22 3L2 3 10 12.46 10 19 14 21 14 12.46 22 3z" />
    </Svg>
  );
};
