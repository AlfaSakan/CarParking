import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import {responsiveWidth} from '../../../utils/responsiveUI';

const Wheelchair = ({width, height, color = 'black'}) => {
  return (
    <Svg
      width={responsiveWidth(width)}
      height={responsiveWidth(height)}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G clip-path="url(#clip0_60_103)">
        <Path
          d="M33.9132 26.3641L34.8857 28.3235C35.1543 28.8646 34.9333 29.5209 34.3923 29.7895L29.9171 32.0376C28.82 32.5822 27.4866 32.1192 26.9648 31.0084L22.6734 21.875H13.125C12.0364 21.875 11.1135 21.0745 10.9594 19.9969C8.64288 3.78085 8.77598 4.78819 8.75 4.37503C8.75 1.88962 10.8225 -0.11174 13.3336 0.00488125C15.608 0.110497 17.4385 1.98081 17.4984 4.2569C17.5578 6.50818 15.9158 8.38738 13.7655 8.70293L14.0847 10.9376H22.9688C23.5728 10.9376 24.0625 11.4273 24.0625 12.0314V14.2189C24.0625 14.8229 23.5728 15.3126 22.9688 15.3126H14.7097L15.0222 17.5001H24.0625C24.4778 17.5001 24.8845 17.6183 25.2351 17.841C25.5857 18.0636 25.8657 18.3815 26.0423 18.7574L29.974 27.125L32.4471 25.8707C32.9882 25.6021 33.6446 25.8231 33.9132 26.3641ZM21.2842 24.0625H19.609C19.0766 27.7679 15.8815 30.625 12.0312 30.625C7.80958 30.625 4.375 27.1905 4.375 22.9688C4.375 20.1315 5.92635 17.6498 8.22527 16.3273C7.97152 14.5523 7.75742 13.0556 7.57668 11.7928C3.14152 13.5669 0 17.9077 0 22.9688C0 29.6029 5.39718 35 12.0312 35C16.9442 35 21.1781 32.0395 23.0446 27.8092L21.2842 24.0625Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_60_103">
          <Rect
            width={responsiveWidth(width)}
            height={responsiveWidth(height)}
            fill="white"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default Wheelchair;