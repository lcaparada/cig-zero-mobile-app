import * as React from "react";

import Svg, { Path, Circle } from "react-native-svg";

import { IconBase } from "@components";

export const UserX = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <Circle cx={8.5} cy={7} r={4} />
      <Path d="M18 8L23 13" />
      <Path d="M23 8L18 13" />
    </Svg>
  );
};
