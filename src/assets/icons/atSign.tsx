import { IconBase } from "@components";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const AtSign = ({ color, size }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <G
        clipPath="url(#clip0_198_1393)"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M9 12a3 3 0 100-6 3 3 0 000 6z" />
        <Path d="M12 6v3.75a2.25 2.25 0 004.5 0V9a7.5 7.5 0 10-2.94 5.955" />
      </G>
      <Defs>
        <ClipPath id="clip0_198_1393">
          <Path fill="#fff" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
