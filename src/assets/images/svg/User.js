import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {responsiveWidth} from '../../../utils/responsiveUI';

const User = ({width, height, color = 'white'}) => {
  return (
    <Svg
      width={responsiveWidth(width)}
      height={responsiveWidth(height)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 12.5C6.6625 12.5 0 14.175 0 17.5V20H20V17.5C20 14.175 13.3375 12.5 10 12.5Z"
        fill={color}
      />
    </Svg>
  );
};

export default User;
