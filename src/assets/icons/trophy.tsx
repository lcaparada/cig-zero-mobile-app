import Svg, { Path } from "react-native-svg";

import { IconBase } from "@components";

export const Trophy = ({ size }: IconBase) => {
  return (
    <Svg viewBox="0 0 512 512" width={size} height={size}>
      <Path d="M31 175.86v206.35l45-45 45 45V228.728zm0 0" fill="#ff4d4d" />
      <Path d="M391 224.93v157.28l45-45 45 45V194.493zm0 0" fill="#ff001e" />
      <Path
        d="M391 241v-30c49.629 0 90-40.371 90-90V61h-75V31h106v90c0 66.168-54.832 120-121 120zm0 0"
        fill="#ff9f00"
      />
      <Path
        d="M112.824 236.094C46.98 218.809 0 159.144 0 91V31h106v30H31v30c0 54.52 36.781 102.262 89.441 116.09zm0 0M226 301h60v181h-60zm0 0"
        fill="#ffd400"
      />
      <Path d="M256 301h30v181h-30zm0 0" fill="#ff9f00" />
      <Path
        d="M91 0v166c0 90.902 74.098 165 165 165s165-74.098 165-165V0zm0 0"
        fill="#ffe470"
      />
      <Path d="M421 0v166c0 90.902-74.098 165-165 165V0zm0 0" fill="#fdbf00" />
      <Path
        d="M348.102 124l-63.602-9.3L256 57.101l-28.5 57.597L163.898 124l46.2 45L199 232.3l57-30 57 30-11.098-63.3zm0 0"
        fill="#fdbf00"
      />
      <Path
        d="M301.902 169L313 232.3l-57-30V57.103l28.5 57.597L348.102 124zm0 0"
        fill="#ff9f00"
      />
      <Path
        d="M361 482v30H151v-30c0-16.5 13.5-30 30-30h150c16.5 0 30 13.5 30 30zm0 0"
        fill="#ffe470"
      />
      <Path
        d="M361 482v30H256v-60h75c16.5 0 30 13.5 30 30zm0 0"
        fill="#fdbf00"
      />
    </Svg>
  );
};
