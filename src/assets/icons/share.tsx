import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Share = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8" />
      <Path d="M16 6L12 2 8 6" />
      <Path d="M12 2L12 15" />
    </Svg>
  );
};
