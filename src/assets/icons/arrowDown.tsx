import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const ArrowDown = ({ color, fill, size, strokeWidth }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill={fill}>
      <Path
        d="M12.832 5.16v14M19.832 12.16l-7 7-7-7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
