import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Grid = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M3 3H10V10H3z" />
      <Path d="M14 3H21V10H14z" />
      <Path d="M14 14H21V21H14z" />
      <Path d="M3 14H10V21H3z" />
    </Svg>
  );
};
