import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Moon = ({ size, color, fill, strokeWidth }: IconBase) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </Svg>
  );
};
