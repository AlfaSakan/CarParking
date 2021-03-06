import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {responsiveHeight, responsiveWidth} from '../../../utils/responsiveUI';

const ArrowIosDownwardFill = ({width = 40, height = 40, color = 'white'}) => {
  return (
    <Svg
      width={responsiveWidth(width)}
      height={responsiveHeight(height)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M26.6667 20C26.6674 20.3894 26.5318 20.7668 26.2833 21.0667L17.95 31.0667C17.6671 31.407 17.2606 31.6211 16.8199 31.6617C16.3792 31.7023 15.9404 31.5662 15.6 31.2833C15.2596 31.0004 15.0456 30.5939 15.005 30.1532C14.9643 29.7125 15.1004 29.2737 15.3833 28.9333L22.85 20L15.65 11.0667C15.5116 10.8962 15.4082 10.7 15.3458 10.4895C15.2834 10.2789 15.2632 10.0581 15.2865 9.83969C15.3097 9.62131 15.3759 9.40967 15.4812 9.21694C15.5864 9.02421 15.7288 8.8542 15.9 8.71666C16.0714 8.56403 16.2724 8.44843 16.4905 8.37711C16.7087 8.30578 16.9392 8.28028 17.1676 8.30219C17.396 8.32409 17.6175 8.39293 17.8181 8.5044C18.0187 8.61588 18.1941 8.76758 18.3333 8.94999L26.3833 18.95C26.5925 19.2585 26.6923 19.6282 26.6667 20Z"
        fill={color}
      />
    </Svg>
  );
};

export default ArrowIosDownwardFill;
