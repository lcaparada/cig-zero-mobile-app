import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Edit2 = ({ color, size }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M17.787 3.28A2.83 2.83 0 0122.4 6.362c-.142.343-.35.655-.613.918l-13.5 13.5-5.5 1.5 1.5-5.5 13.5-13.5z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
