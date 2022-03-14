import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {responsiveWidth} from '../../../utils/responsiveUI';

const ArrowDropDownCircle = ({width = 35, height = 35, color = '#323A47'}) => {
  return (
    <Svg
      width={responsiveWidth(width)}
      height={responsiveWidth(height)}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M17.5001 2.91669C9.45008 2.91669 2.91675 9.45002 2.91675 17.5C2.91675 25.55 9.45008 32.0834 17.5001 32.0834C25.5501 32.0834 32.0834 25.55 32.0834 17.5C32.0834 9.45002 25.5501 2.91669 17.5001 2.91669ZM17.5001 20.4167L11.6667 14.5834H23.3334L17.5001 20.4167Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowDropDownCircle;
