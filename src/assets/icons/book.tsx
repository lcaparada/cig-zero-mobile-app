import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Book = ({ color, size, strokeWidth }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M4.324 19.668a2.5 2.5 0 012.5-2.5h13.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.824 2.168h13.5v20h-13.5a2.5 2.5 0 01-2.5-2.5v-15a2.5 2.5 0 012.5-2.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
