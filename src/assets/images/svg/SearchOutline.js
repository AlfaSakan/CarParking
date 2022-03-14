import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {responsiveWidth} from '../../../utils/responsiveUI';

const SearchOutline = ({width, height, color = 'white'}) => {
  return (
    <Svg
      width={responsiveWidth(width)}
      height={responsiveWidth(height)}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M34.5167 32.15L28.85 26.5C30.6783 24.1708 31.6704 21.2944 31.6667 18.3333C31.6667 15.6963 30.8847 13.1184 29.4196 10.9257C27.9545 8.73308 25.8721 7.02411 23.4358 6.01495C20.9994 5.00578 18.3186 4.74173 15.7321 5.2562C13.1457 5.77067 10.7699 7.04055 8.90525 8.90525C7.04055 10.7699 5.77067 13.1457 5.2562 15.7321C4.74173 18.3186 5.00578 20.9994 6.01495 23.4358C7.02411 25.8721 8.73308 27.9545 10.9257 29.4196C13.1184 30.8847 15.6963 31.6667 18.3333 31.6667C21.2944 31.6704 24.1708 30.6783 26.5 28.85L32.15 34.5167C32.3049 34.6729 32.4893 34.7969 32.6924 34.8815C32.8955 34.9661 33.1133 35.0097 33.3333 35.0097C33.5534 35.0097 33.7712 34.9661 33.9743 34.8815C34.1774 34.7969 34.3617 34.6729 34.5167 34.5167C34.6729 34.3617 34.7969 34.1774 34.8815 33.9743C34.9661 33.7712 35.0097 33.5534 35.0097 33.3333C35.0097 33.1133 34.9661 32.8955 34.8815 32.6924C34.7969 32.4893 34.6729 32.3049 34.5167 32.15ZM8.33334 18.3333C8.33334 16.3555 8.91983 14.4221 10.0186 12.7776C11.1175 11.1331 12.6792 9.85142 14.5065 9.09454C16.3338 8.33767 18.3444 8.13963 20.2842 8.52549C22.2241 8.91134 24.0059 9.86375 25.4044 11.2623C26.8029 12.6608 27.7553 14.4426 28.1412 16.3824C28.527 18.3222 28.329 20.3329 27.5721 22.1602C26.8153 23.9874 25.5335 25.5492 23.889 26.648C22.2446 27.7469 20.3112 28.3333 18.3333 28.3333C15.6812 28.3333 13.1376 27.2798 11.2623 25.4044C9.38691 23.529 8.33334 20.9855 8.33334 18.3333Z"
        fill={color}
      />
    </Svg>
  );
};

export default SearchOutline;
