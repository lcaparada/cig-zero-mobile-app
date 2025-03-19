import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

import { IconBase } from "@components";

export const Users = ({ color, size }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <G
        clipPath="url(#clip0_692_196)"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M17.787 21.28v-2a4 4 0 00-4-4h-8a4 4 0 00-4 4v2M9.787 11.28a4 4 0 100-8 4 4 0 000 8zM23.787 21.28v-2a4 4 0 00-3-3.87M16.787 3.41a4 4 0 010 7.75" />
      </G>
      <Defs>
        <ClipPath id="clip0_692_196">
          <Path fill="#fff" transform="translate(.787 .28)" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
