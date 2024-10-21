import * as React from "react";

import Svg, { Rect, Path } from "react-native-svg";

import { IconBase } from "@components";

export const PlusSquare = ({ color, size, strokeWidth }: IconBase) => {
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
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <Path d="M12 8L12 16" />
      <Path d="M8 12L16 12" />
    </Svg>
  );
};
