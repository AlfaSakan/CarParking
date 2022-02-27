import React from 'react';
import Svg, {Path} from 'react-native-svg';

const baselineCancel = ({width = 35, height = 35}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.5 2.91669C9.43541 2.91669 2.91666 9.43544 2.91666 17.5C2.91666 25.5646 9.43541 32.0834 17.5 32.0834C25.5646 32.0834 32.0833 25.5646 32.0833 17.5C32.0833 9.43544 25.5646 2.91669 17.5 2.91669ZM24.7917 22.7354L22.7354 24.7917L17.5 19.5563L12.2646 24.7917L10.2083 22.7354L15.4437 17.5L10.2083 12.2646L12.2646 10.2084L17.5 15.4438L22.7354 10.2084L24.7917 12.2646L19.5562 17.5L24.7917 22.7354Z"
        fill="white"
      />
    </Svg>
  );
};

export default baselineCancel;
