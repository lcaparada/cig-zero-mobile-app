import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Send = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M22 2L11 13" />
      <Path d="M22 2L15 22 11 13 2 9 22 2z" />
    </Svg>
  );
};
