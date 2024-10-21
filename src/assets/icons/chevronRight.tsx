import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const ChevronRight = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M9 18L15 12 9 6" />
    </Svg>
  );
};
