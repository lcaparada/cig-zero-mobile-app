import * as React from "react";

import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

import { IconBase } from "@components";

export const TrendingUp = ({ color, fill, size, strokeWidth }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill={fill}>
      <G
        clipPath="url(#clip0_565_194)"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M23.102 6.465l-9.5 9.5-5-5-7.5 7.5" />
        <Path d="M17.102 6.465h6v6" />
      </G>
      <Defs>
        <ClipPath id="clip0_565_194">
          <Path
            fill="#fff"
            transform="translate(.102 .465)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
