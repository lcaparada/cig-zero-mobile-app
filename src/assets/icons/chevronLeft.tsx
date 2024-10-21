import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const ChevronLeft = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M15 18L9 12 15 6" />
    </Svg>
  );
};
