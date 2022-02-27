import React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const facebookFillIcon = ({width = 25, height = 24}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clipPath="url(#clip0_3_66)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 12.067C0.5 18.033 4.833 22.994 10.5 24V15.333H7.5V12H10.5V9.333C10.5 6.333 12.433 4.667 15.167 4.667C16.033 4.667 16.967 4.8 17.833 4.933V8H16.3C14.833 8 14.5 8.733 14.5 9.667V12H17.7L17.167 15.333H14.5V24C20.167 22.994 24.5 18.034 24.5 12.067C24.5 5.43 19.1 0 12.5 0C5.9 0 0.5 5.43 0.5 12.067Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3_66">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default facebookFillIcon;