import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const BarChart = ({ color, size, strokeWidth, fill }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill={fill}>
      <Path
        d="M12.553 20.127v-10M18.553 20.127v-16M6.553 20.127v-4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
