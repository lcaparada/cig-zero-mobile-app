import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const arrowRight = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M5 12L19 12" />
      <Path d="M12 5L19 12 12 19" />
    </Svg>
  );
};
