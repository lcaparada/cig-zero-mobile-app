import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const X = ({ color, fill, size, strokeWidth }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill={fill}>
      <Path
        d="M18.102 6.465l-12 12M6.102 6.465l12 12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
