import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const ArrowLeft = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M19 12L5 12" />
      <Path d="M12 19L5 12 12 5" />
    </Svg>
  );
};
