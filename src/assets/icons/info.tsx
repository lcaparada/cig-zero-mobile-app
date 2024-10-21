import * as React from "react";

import Svg, { Circle, Path } from "react-native-svg";

import { IconBase } from "@components";

export const Info = ({ size }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48">
      <Circle fill="#2196F3" cx={24} cy={24} r={21} />
      <Path fill="#fff" d="M22 22H26V33H22z" />
      <Circle fill="#fff" cx={24} cy={16.5} r={2.5} />
    </Svg>
  );
};
