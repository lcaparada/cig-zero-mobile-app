import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

import { IconBase } from "@components";

export const MapPin = ({ color, size }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <G
        clipPath="url(#clip0_696_189)"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M21.428 10.19c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <Path d="M12.428 13.19a3 3 0 100-6 3 3 0 000 6z" />
      </G>
      <Defs>
        <ClipPath id="clip0_696_189">
          <Path fill="#fff" transform="translate(.428 .19)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
