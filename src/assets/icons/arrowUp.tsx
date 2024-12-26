import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const ArrowUp = ({ color, strokeWidth, fill, size }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill={fill}>
      <Path
        d="M12.624 19.73v-14M5.624 12.73l7-7 7 7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
