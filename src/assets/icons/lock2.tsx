import { IconBase } from "@components";
import Svg, { Path } from "react-native-svg";

export const Lock2 = ({ size, color, strokeWidth }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M14.25 8.25H3.75a1.5 1.5 0 00-1.5 1.5V15a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V9.75a1.5 1.5 0 00-1.5-1.5zM5.25 8.25v-3a3.75 3.75 0 017.5 0v3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
