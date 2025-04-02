import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Rings = ({ color, width, height }: IconBase) => {
  return (
    <Svg width={30} height={20} viewBox="0 0 30 20" fill="none">
      <Path
        d="M10 8c0 1.818-.555 3.387-1.357 4.457C7.84 13.526 6.886 14 6 14c-.886 0-1.841-.474-2.643-1.543C2.555 11.387 2 9.818 2 8s.555-3.387 1.357-4.457C4.16 2.474 5.114 2 6 2c.886 0 1.841.474 2.643 1.543C9.445 4.613 10 6.182 10 8zM23 9c0 1.818-.555 3.387-1.357 4.457C20.84 14.526 19.886 15 19 15c-.886 0-1.841-.474-2.643-1.543C15.555 12.387 15 10.818 15 9s.555-3.387 1.357-4.457C17.16 3.474 18.114 3 19 3c.886 0 1.841.474 2.643 1.543C22.445 5.613 23 7.182 23 9z"
        stroke="#333"
        strokeWidth={4}
      />
      <Path fill={color} d="M6 9H12V17H6z" />
      <Path d="M18 9h1c6.075 0 11 4.925 11 11H18V9z" fill={color} />
    </Svg>
  );
};
