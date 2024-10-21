import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const SignIn = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" />
      <Path d="M10 17L15 12 10 7" />
      <Path d="M15 12L3 12" />
    </Svg>
  );
};
