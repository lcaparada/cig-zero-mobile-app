import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const ChevronRight = ({ size, color, strokeWidth }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 26 26" fill="none">
      <Path
        d="M9.75 19.5l6.5-6.5-6.5-6.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
