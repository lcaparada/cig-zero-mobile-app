import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const CodeSandBox = ({ color, size, strokeWidth }: IconBase) => {
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
      <Path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <Path d="M7.5 4.21L12 6.81 16.5 4.21" />
      <Path d="M7.5 19.79L7.5 14.6 3 12" />
      <Path d="M21 12L16.5 14.6 16.5 19.79" />
      <Path d="M3.27 6.96L12 12.01 20.73 6.96" />
      <Path d="M12 22.08L12 12" />
    </Svg>
  );
};
