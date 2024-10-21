import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const ChevronLeft = ({ color, size, strokeWidth }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 26 26" fill="none">
      <Path
        d="M16.25 19.5L9.75 13l6.5-6.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
