import React from 'react';
import Svg, {Path} from 'react-native-svg';

const EmailFill = ({width = 24, height = 24}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16.32 11.04H15.36V9.11999C15.36 7.24799 13.872 5.75999 12 5.75999C10.128 5.75999 8.63999 7.24799 8.63999 9.11999V11.04H7.67999V9.11999C7.67999 6.71999 9.59999 4.79999 12 4.79999C14.4 4.79999 16.32 6.71999 16.32 9.11999V11.04Z"
        fill="white"
      />
      <Path
        d="M15.84 19.2H8.15997C7.34397 19.2 6.71997 18.576 6.71997 17.76V12C6.71997 11.184 7.34397 10.56 8.15997 10.56H15.84C16.656 10.56 17.28 11.184 17.28 12V17.76C17.28 18.576 16.656 19.2 15.84 19.2ZM8.15997 11.52C7.87197 11.52 7.67997 11.712 7.67997 12V17.76C7.67997 18.048 7.87197 18.24 8.15997 18.24H15.84C16.128 18.24 16.32 18.048 16.32 17.76V12C16.32 11.712 16.128 11.52 15.84 11.52H8.15997Z"
        fill="white"
      />
      <Path
        d="M12 14.4C12.5302 14.4 12.96 13.9702 12.96 13.44C12.96 12.9098 12.5302 12.48 12 12.48C11.4698 12.48 11.04 12.9098 11.04 13.44C11.04 13.9702 11.4698 14.4 12 14.4Z"
        fill="white"
      />
      <Path
        d="M12.24 13.44H11.76L11.28 16.32H12.72L12.24 13.44Z"
        fill="white"
      />
    </Svg>
  );
};

export default EmailFill;
