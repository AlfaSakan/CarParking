import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {responsiveWidth} from '../../../utils/responsiveUI';
import {colors} from '../../colors';

const LineSeparator = ({width = 335, height = 2, color = colors.grey}) => {
  return (
    <Svg
      width={responsiveWidth(width)}
      height={height}
      viewBox="0 0 335 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M0.5 1H335"
        stroke={color}
        stroke-width="2"
        stroke-dasharray="4 4"
      />
    </Svg>
  );
};

export default LineSeparator;
