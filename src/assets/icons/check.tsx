import * as React from "react";

import Svg, { Polyline } from "react-native-svg";

import { IconBase } from "@components";

export const Check = ({ color, size, strokeWidth }: IconBase) => {
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
      <Polyline points="20 6 9 17 4 12"></Polyline>
    </Svg>
  );
};
