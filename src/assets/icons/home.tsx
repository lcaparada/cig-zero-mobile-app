import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Home = ({ color, size, strokeWidth }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 28 28" fill="none">
      <Path
        d="M3.5 10.5L14 2.333 24.5 10.5v12.833a2.333 2.333 0 01-2.333 2.334H5.833A2.333 2.333 0 013.5 23.333V10.5z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.5 25.667V14h7v11.667"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
