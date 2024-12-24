import * as React from "react";

import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Smile = ({ color, fill, size, strokeWidth }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill={fill}>
      <Path
        d="M12.89 22.277c5.522 0 10-4.477 10-10 0-5.522-4.478-10-10-10-5.524 0-10 4.478-10 10 0 5.523 4.476 10 10 10z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.89 14.277s1.5 2 4 2 4-2 4-2M9.89 9.277h.01M15.89 9.277h.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
